from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.db import get_db

from app.models.portfolio import Portfolio

from app.schemas.portfolio_schema import PortfolioCreate
from app.schemas.portfolio_update_schema import PortfolioUpdate

from app.services.market_service import get_stock_price

router = APIRouter(
    prefix="/portfolio",
    tags=["Portfolio"]
)

# ADD STOCK
@router.post("/add")
def add_stock(
    data: PortfolioCreate,
    db: Session = Depends(get_db)
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
        "message": "Stock Added",
        "id": portfolio.id
    }


# GET PORTFOLIO
@router.get("/")
def get_portfolio(
    db: Session = Depends(get_db)
):

    portfolio = db.query(
        Portfolio
    ).all()

    return portfolio


# UPDATE STOCK
@router.put("/update/{portfolio_id}")
def update_stock(
    portfolio_id: int,
    data: PortfolioUpdate,
    db: Session = Depends(get_db)
):

    stock = db.query(
        Portfolio
    ).filter(
        Portfolio.id == portfolio_id
    ).first()

    if not stock:

        return {
            "error": "Stock not found"
        }

    stock.shares = data.shares
    stock.average_price = data.average_price

    db.commit()
    db.refresh(stock)

    return {
        "message": "Position updated"
    }


# DELETE STOCK
@router.delete("/delete/{portfolio_id}")
def delete_stock(
    portfolio_id: int,
    db: Session = Depends(get_db)
):

    stock = db.query(
        Portfolio
    ).filter(
        Portfolio.id == portfolio_id
    ).first()

    if not stock:

        return {
            "error": "Stock not found"
        }

    db.delete(stock)
    db.commit()

    return {
        "message": "Stock deleted successfully"
    }


# PORTFOLIO SUMMARY
@router.get("/summary")
def portfolio_summary(
    db: Session = Depends(get_db)
):

    portfolio = db.query(
        Portfolio
    ).all()

    total_positions = len(portfolio)

    total_value = sum(
        p.shares * p.average_price
        for p in portfolio
    )

    total_shares = sum(
        p.shares
        for p in portfolio
    )

    return {

        "positions": total_positions,

        "invested_value": round(
            total_value,
            2
        ),

        "shares": total_shares
    }


# LIVE STOCK PRICE
@router.get("/price/{symbol}")
def get_live_price(symbol: str):

    price = get_stock_price(symbol)

    if price is None:

        return {
            "error": "Symbol not found"
        }

    return {

        "symbol": symbol,

        "price": round(price, 2)
    }