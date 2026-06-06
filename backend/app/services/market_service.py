import yfinance as yf


def get_stock_price(symbol: str):

    if not symbol:
        return None

    symbol = symbol.strip().upper()

    if symbol == "":
        return None

    try:

        stock = yf.Ticker(symbol)

        history = stock.history(
            period="1d"
        )

        if history.empty:
            return None

        return float(
            history["Close"].iloc[-1]
        )

    except Exception as e:

        print(
            f"Price lookup failed for {symbol}: {e}"
        )

        return None