import yfinance as yf

def get_stock_price(symbol:str):

    stock = yf.Ticker(symbol)

    data = stock.history(period="1d")

    return data["Close"].iloc[-1]