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

    symbol = data.symbol.strip().upper()

    if symbol == "":
        return {
            "error": "Symbol required"
        }

    if data.shares <= 0:
        return {
            "error": "Shares must be greater than 0"
        }

    if data.average_price <= 0:
        return {
            "error": "Average price must be greater than 0"
        }

    portfolio = Portfolio(
        symbol=symbol,
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

    if data.shares <= 0:

        return {
            "error": "Shares must be greater than 0"
        }

    if data.average_price <= 0:

        return {
            "error": "Average price must be greater than 0"
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
        if p.symbol
    )

    total_shares = sum(
        p.shares
        for p in portfolio
        if p.symbol
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

    symbol = symbol.strip().upper()

    if symbol == "":
        return {
            "error": "Invalid symbol"
        }

    price = get_stock_price(symbol)

    if price is None:

        return {
            "error": "Symbol not found"
        }

    return {

        "symbol": symbol,

        "price": round(price, 2)
    }


# PORTFOLIO VALUATION
@router.get("/valuation")
def portfolio_valuation(
    db: Session = Depends(get_db)
):

    holdings = db.query(
        Portfolio
    ).all()

    portfolio_data = []

    total_invested = 0
    total_current = 0

    for stock in holdings:

        if not stock.symbol:
            continue

        current_price = get_stock_price(
            stock.symbol
        )

        if current_price is None:
            continue

        invested = (
            stock.shares *
            stock.average_price
        )

        current = (
            stock.shares *
            current_price
        )

        pnl = current - invested
        portfolio_data.append({

            "id": stock.id,

            "symbol": stock.symbol,

            "shares": stock.shares,

            "avg_price": stock.average_price,

            "current_price": round(
                     current_price,
                    2
            ),

            "invested": round(
                    invested,
                    2
            ),

            "current_value": round(
                    current,
                    2
            ),

            "profit_loss": round(
                    pnl,
                    2
            )
        })

        total_invested += invested
        total_current += current

    return {

        "total_invested": round(
            total_invested,
            2
        ),

        "current_value": round(
            total_current,
            2
        ),

        "profit_loss": round(
            total_current -
            total_invested,
            2
        ),

        "holdings": portfolio_data
    }


# DASHBOARD ANALYTICS
@router.get("/dashboard")
def dashboard_data(
    db: Session = Depends(get_db)
):

    holdings = db.query(
        Portfolio
    ).all()

    total_positions = len(
        holdings
    )

    total_invested = 0
    total_current = 0

    for stock in holdings:

        if not stock.symbol:
            continue

        current_price = get_stock_price(
            stock.symbol
        )

        if current_price is None:
            continue

        total_invested += (
            stock.shares *
            stock.average_price
        )

        total_current += (
            stock.shares *
            current_price
        )

    return {

        "positions":
            total_positions,

        "invested":
            round(
                total_invested,
                2
            ),

        "current":
            round(
                total_current,
                2
            ),

        "profit":
            round(
                total_current -
                total_invested,
                2
            )
    }
@router.get("/analytics")
def portfolio_analytics(
    db: Session = Depends(get_db)
):

    holdings = db.query(
        Portfolio
    ).all()

    allocation = []

    total_value = 0

    values = {}

    for stock in holdings:

        if not stock.symbol:
            continue

        current_price = get_stock_price(
            stock.symbol
        )

        if current_price is None:
            continue

        current_value = (
            stock.shares *
            current_price
        )

        total_value += current_value

        values[
            stock.symbol
        ] = current_value

    if total_value == 0:

        return {

            "total_positions": 0,

            "largest_holding": "N/A",

            "largest_percentage": 0,

            "diversification_score": 0,

            "health": "No Data",

            "allocation": []
        }

    for symbol,value in values.items():

        percentage = round(

            (value / total_value) * 100,

            2
        )

        allocation.append({

            "name": symbol,

            "symbol": symbol,

            "value": percentage,

            "percentage": percentage
        })

    largest = max(
        allocation,
        key=lambda x: x["percentage"]
    )

    diversification_score = max(

        0,

        100 -
        largest["percentage"]
    )

    health = (
        "Excellent"
        if diversification_score > 75
        else
        "Good"
        if diversification_score > 50
        else
        "Risky"
    )

    return {

        "total_positions":
            len(allocation),

        "largest_holding":
            largest["symbol"],

        "largest_percentage":
            largest["percentage"],

        "diversification_score":
            round(
                diversification_score,
                2
            ),

        "health":
            health,

        "allocation":
            allocation
    }