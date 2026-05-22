from fastapi import APIRouter

router = APIRouter(
    prefix="/portfolio",
    tags=["Portfolio"]
)

@router.get("/")
def get_portfolio():

    return {

        "portfolio":[

            {
                "symbol":"AAPL",
                "shares":120
            },

            {
                "symbol":"NVDA",
                "shares":45
            }

        ]
    }