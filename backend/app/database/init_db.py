from app.database.db import engine, Base

from app.models.user import User
from app.models.portfolio import Portfolio

print("Creating database tables...")

Base.metadata.create_all(bind=engine)

print("Tables created successfully.")