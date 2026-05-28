from pydantic import BaseModel

class PortfolioCreate(BaseModel):

    symbol:str

    shares:float

    average_price:float