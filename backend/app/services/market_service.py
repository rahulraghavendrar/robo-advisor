import yfinance as yf


def get_stock_price(symbol: str):

    stock = yf.Ticker(symbol)

    history = stock.history(period="1d")

    if history.empty:

        return None

    return float(
        history["Close"].iloc[-1]
    )