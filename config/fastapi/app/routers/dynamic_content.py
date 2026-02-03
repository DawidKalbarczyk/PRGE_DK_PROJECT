from fastapi import APIRouter
from fastapi import Query
from sqlalchemy import create_engine, text
router_get_users = APIRouter()

from app.settings import db_name, db_user, db_password

def connect_to_db(db_name: str, db_user: str, db_password: str):
    return create_engine(
        f"postgresql://{db_user}:{db_password}@postgis:5432/{db_name}"
    )

@router_get_users.get("/get_users")
async def get_users(table: str = Query()):
    try:
        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)

        sql_query= text(f" SELECT * FROM {table};")

        with db_connection.connect() as conn:
            result = conn.execute(sql_query)
            data=[dict(row._mapping) for row in result]

        return {"data": data}
    except Exception as e:
        print(f"Błąd podczas get_users: {e}")

        return {"error": str(e)}







    return {"id": 1, "firstName": "Emily"}
