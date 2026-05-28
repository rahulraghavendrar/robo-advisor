from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    ForeignKey,
)

from sqlalchemy.orm import relationship

from app.database.db import Base

class Portfolio(Base):

    __tablename__ = "portfolio"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    symbol = Column(String(20))

    shares = Column(Float)

    average_price = Column(Float)

    user_id = Column(
        Integer,
        ForeignKey("users.id")
    )

    owner = relationship(
        "User",
        back_populates="portfolios"
    )