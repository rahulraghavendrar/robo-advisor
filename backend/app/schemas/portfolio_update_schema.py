from pydantic import BaseModel

class PortfolioUpdate(BaseModel):

    shares: float

    average_price: float