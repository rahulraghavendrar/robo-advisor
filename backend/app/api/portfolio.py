from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.db import get_db

from app.models.portfolio import Portfolio

from app.schemas.portfolio_schema import (
    PortfolioCreate
)

router = APIRouter(
    prefix="/portfolio",
    tags=["Portfolio"]
)

# ADD STOCK
@router.post("/add")
def add_stock(
    data:PortfolioCreate,
    db:Session = Depends(get_db)
):

    portfolio = Portfolio(

        symbol=data.symbol,

        shares=data.shares,

        average_price=data.average_price,

        user_id=1
    )

    db.add(portfolio)

    db.commit()

    db.refresh(portfolio)

    return {
        "message":"Stock Added"
    }

# GET PORTFOLIO
@router.get("/")
def get_portfolio(
    db:Session = Depends(get_db)
):

    portfolio = db.query(
        Portfolio
    ).all()

    return portfolio