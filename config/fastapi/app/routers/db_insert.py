from typing import Optional
from fastapi import Query
from fastapi import Body
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from sqlalchemy import create_engine, text
router_insert = APIRouter()

from app.settings import db_name, db_user, db_password


def connect_to_db(db_name: str, db_user: str, db_password: str):
    return create_engine(
        f"postgresql://{db_user}:{db_password}@postgis:5432/{db_name}"

    )

class DeliveryMenData(BaseModel):
    name: str
    location: str
    phoneNumber: str
    salary: float
    workedHours: int
    store: int

class EmployeesData(BaseModel):
    name: str
    location: str
    age: int
    phoneNumber: str
    salary: float
    position: str
    workedHours: int
    store: int

class StoresData(BaseModel):
    owner: str
    location: str
    employeesNr: int
    phoneNumber: str

class DeliveriesData(BaseModel):
    date: str
    locationFrom: str
    locationTo: str
    deliveryman: int
    distance: float


def scrappedGeom(data):
    import requests
    from bs4 import BeautifulSoup

    try:
        naglowek = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                          "AppleWebKit/537.36 (KHTML, like Gecko) "
                          "Chrome/120.0 Safari/537.36 "
                          "(+https://twojastrona.pl/contact)"
        }
        url: str = f"https://pl.wikipedia.org/wiki/{data}"
        response = requests.get(url, headers=naglowek, timeout=5)
        response_html = BeautifulSoup(response.text, "html.parser")

        latitude = response_html.select('.latitude')
        longitude = response_html.select('.longitude')

        if len(latitude) > 1 and len(longitude) > 1:
            latitude = float(latitude[1].text.replace(",", "."))
            longitude = float(longitude[1].text.replace(",", "."))
            return (latitude, longitude)
        else:
            print(f"Nie znaleziono współrzędnych dla: {data}")
            # Zwróć domyślne współrzędne dla Warszawy
            return (52.2297, 21.0122)
    except Exception as e:
        print(f"Błąd w scrappedGeom: {e}")
        # Zwróć domyślne współrzędne dla Warszawy
        return (52.2297, 21.0122)


@router_insert.post("/insert_user")
async def insert_user(
        deliveryman: Optional[DeliveryMenData] = Body(None),
        employee: Optional[EmployeesData] = Body(None),
        store: Optional[StoresData] = Body(None),
        delivery: Optional[DeliveriesData] = Body(None),
        table: str = Query()
):
    try:
        print(f"=== Otrzymano żądanie dla tabeli: {table} ===")
        print(f"deliveryman: {deliveryman}")
        print(f"employee: {employee}")
        print(f"store: {store}")
        
        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)

        coords = (52.2297, 21.0122)  # domyślnie Warszawa
        sql_query = None

        params = {}

        match table:
            case "deliverymen":
                if deliveryman is None:
                    raise HTTPException(status_code=400, detail="Brak danych deliveryman")
                coords = scrappedGeom(data=deliveryman.location)

            case "employees":
                if employee is None:
                    raise HTTPException(status_code=400, detail="Brak danych employee")
                coords = scrappedGeom(data=employee.location)

            case "stores":
                if store is None:
                    raise HTTPException(status_code=400, detail="Brak danych store")
                coords = scrappedGeom(data=store.location)
            case "deliveries":
                if delivery is None:
                    raise HTTPException(status_code=400, detail="Brak danych deliveries")
                    
                params = {
                    "date": delivery.date,
                    "locationfrom": delivery.locationFrom,
                    "locationto": delivery.locationTo,
                    "deliveryman": delivery.deliveryman,
                    "distance": delivery.distance
                }
                sql_query = text(f"""
                    INSERT INTO deliveries (date, locationfrom, locationto, deliveryman, distance) 
                    VALUES (:date, :locationfrom, :locationto, :deliveryman, :distance);
                """)
                
                with db_connection.connect() as conn:
                    fix_sequence_query = text(f"""
                        SELECT setval(pg_get_serial_sequence('deliveries', 'id'), 
                                      COALESCE((SELECT MAX(id) FROM deliveries), 0) + 1, 
                                      false);
                    """)
                    conn.execute(fix_sequence_query)
                    print(f"Naprawiono sekwencję ID dla tabeli deliveries")
                    
                    result = conn.execute(sql_query, params)
                    conn.commit()
                    print(f"Sukces! Dodano {result.rowcount} rekordów")
                
                return {"status": 1, "message": "Rekord dodany pomyślnie"}

        latitude = float(coords[0])
        longitude = float(coords[1])
        print(f"Współrzędne: {latitude}, {longitude}")


        match table:
            case "deliverymen":
                params = {
                    "name": deliveryman.name,
                    "location": deliveryman.location,
                    "phonenumber": deliveryman.phoneNumber,
                    "salary": deliveryman.salary,
                    "workedhours": deliveryman.workedHours,
                    "store": deliveryman.store,
                    "longitude": longitude,
                    "latitude": latitude
                }
                sql_query = text(f"""
                                INSERT INTO deliverymen (name, geom, location, phonenumber, salary, workedhours, store) \
                                VALUES (:name, ST_GeomFromText('POINT({longitude} {latitude})', 4326), :location, :phonenumber,\
                                :salary, :workedhours, :store);
                                """)

            case "employees":
                params = {
                    "name": employee.name,
                    "location": employee.location,
                    "age": employee.age,
                    "phonenumber": employee.phoneNumber,
                    "salary": employee.salary,
                    "position": employee.position,
                    "workedhours": employee.workedHours,
                    "store": employee.store,
                    "longitude": longitude,
                    "latitude": latitude
                }
                sql_query = text(f"""
                                INSERT INTO employees (name, geom, location, age, phonenumber, salary, position, workedhours, store) \
                                VALUES (:name, ST_GeomFromText('POINT({longitude} {latitude})', 4326), :location, :age, :phonenumber,\
                                :salary, :position, :workedhours, :store);
                                """)

            case "stores":
                params = {
                    "owner": store.owner,
                    "location": store.location,
                    "employeesnr": store.employeesNr,
                    "phonenumber": store.phoneNumber,
                    "longitude": longitude,
                    "latitude": latitude
                }
                sql_query = text(f"""
                            INSERT INTO stores (owner, geom, location, employeesnr, phonenumber) \
                            VALUES (:owner, ST_GeomFromText('POINT({longitude} {latitude})', 4326), :location,\
                             :employeesnr, :phonenumber);
                            """)


        print(f"Wykonuję SQL dla tabeli {table}")
        print(f"Parametry: {params}")
        
        with db_connection.connect() as conn:
            fix_sequence_query = text(f"""
                SELECT setval(pg_get_serial_sequence('{table}', 'id'), 
                              COALESCE((SELECT MAX(id) FROM {table}), 0) + 1, 
                              false);
            """)
            conn.execute(fix_sequence_query)
            print(f"Naprawiono sekwencję ID dla tabeli {table}")
            
            result = conn.execute(sql_query, params)
            conn.commit()
            print(f"Sukces! Dodano {result.rowcount} rekordów")
        
        return {"status": 1, "message": "Rekord dodany pomyślnie"}
        
    except HTTPException:
        raise
    except Exception as e:
        print(f"Błąd: {type(e).__name__}: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Błąd serwera: {str(e)}")
