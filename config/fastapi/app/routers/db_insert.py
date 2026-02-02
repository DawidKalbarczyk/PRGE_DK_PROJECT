from typing import Optional
from fastapi import Query
from fastapi import Body
from fastapi import APIRouter
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

def scrappedGeom(data):
    import requests
    from bs4 import BeautifulSoup

    naglowek = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                      "AppleWebKit/537.36 (KHTML, like Gecko) "
                      "Chrome/120.0 Safari/537.36 "
                      "(+https://twojastrona.pl/contact)"
    }
    url: str = f"https://pl.wikipedia.org/wiki/{data}"
    response = requests.get(url, headers=naglowek)
    response_html = BeautifulSoup(response.text, "html.parser")

    latitude = response_html.select('.latitude')
    longitude = response_html.select('.longitude')

    if len(latitude) > 1 and len(longitude) > 1:
        latitude = float(latitude[1].text.replace(",", "."))
        longitude = float(longitude[1].text.replace(",", "."))
        return (latitude, longitude)
    else:
        print("Błąd w markerze!")
        return (0,0)


@router_insert.post("/insert_user")
async def insert_user(
        deliveryman: Optional[DeliveryMenData] = Body(None),
        employee: Optional[EmployeesData] = Body(None),
        store: Optional[StoresData] = Body(None),
        table: str = Query()
):
    try:
        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)

        coords = (0,0)
        sql_query = None
        match table:
            case "deliverymen":
                coords = scrappedGeom(data=deliveryman.location)

            case "employees":
                coords = scrappedGeom(data=employee.location)

            case "stores":
                coords = scrappedGeom(data=store.location)

        latitude = float(coords[0])
        longitude = float(coords[1])

        params = {}
        match table:
            case "deliverymen":
                params = {
                    "name": deliveryman.name,
                    "location": deliveryman.location,
                    "phoneNumber": deliveryman.phoneNumber,
                    "salary": deliveryman.salary,
                    "workedHours": deliveryman.workedHours,
                    "store": deliveryman.store,
                    "longitude": longitude,
                    "latitude": latitude
                }
                sql_query = text(f"""
                                INSERT INTO deliverymen (name, geom, location, phoneNumber, salary, workedHours, store) \
                                VALUES (:name, ST_GeomFromText('POINT({longitude} {latitude})', 4326), :location, :phoneNumber,\
                                :salary, :workedHours, :store);
                                """)

            case "employees":
                params = {
                    "name": employee.name,
                    "location": employee.location,
                    "age": employee.age,
                    "phoneNumber": employee.phoneNumber,
                    "salary": employee.salary,
                    "position": employee.position,
                    "workedHours": employee.workedHours,
                    "store": employee.store,
                    "longitude": longitude,
                    "latitude": latitude
                }
                sql_query = text(f"""
                                INSERT INTO employees (name, geom, location, age, phoneNumber, salary, position, workedHours, store) \
                                VALUES (:name, ST_GeomFromText('POINT({longitude} {latitude})', 4326), :location, :age, :phoneNumber,\
                                :salary, :position, :workedHours, :store);
                                """)
            case "stores":
                params = {
                    "owner": store.owner,
                    "location": store.location,
                    "employeesNr": store.employeesNr,
                    "phoneNumber": store.phoneNumber,
                    "longitude": longitude,
                    "latitude": latitude
                }
                sql_query = text(f"""
                            INSERT INTO stores (owner, geom, location, employeesNr, phoneNumber) \
                            VALUES (:owner, ST_GeomFromText('POINT({longitude} {latitude})', 4326), :location,\
                             :employeesNr, :phoneNumber);
                            """)


        with db_connection.connect() as conn:
            result = conn.execute(sql_query, params)
            conn.commit()
            print(result)
    except Exception as e:
        print(e)
        raise e
    return {"status":1}
