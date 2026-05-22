from sqlalchemy import Column, Integer, String, Float

from app.database.db import Base

class Portfolio(Base):

    __tablename__ = "portfolio"

    id = Column(Integer, primary_key=True, index=True)

    symbol = Column(String(20))

    shares = Column(Float)

    average_price = Column(Float)