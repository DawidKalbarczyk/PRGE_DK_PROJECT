import os

db_name = os.getenv("POSTGRES_DB")
db_user = os.getenv("POSTGRES_USER")
db_password = os.getenv("POSTGRES_PASSWORD")

print("=" * 50)
print("CHECKING ENV VARIABLES:")
print(f"POSTGRES_DB: {db_name}")
print(f"POSTGRES_USER: {db_user}")
print(f"POSTGRES_PASSWORD: {'SET' if db_password else 'NOT SET'}")
print("=" * 50)