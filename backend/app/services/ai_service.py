import os
import time

from dotenv import load_dotenv

from google import genai
from google.genai import types


load_dotenv()


MODEL_NAME = "gemini-3.6-flash"


def generate_portfolio_advice(
    portfolio_context: str,
    user_question: str
):

    api_key = os.getenv(
        "GEMINI_API_KEY"
    )

    if not api_key:

        raise RuntimeError(
            "GEMINI_API_KEY environment variable is not configured"
        )

    client = genai.Client(
        api_key=api_key
    )

    system_instruction = """
You are RoboVest AI, an educational portfolio analysis assistant.

Your job is to analyze the portfolio information supplied by the application
and provide clear, practical and personalized portfolio insights.

Important rules:

- Use only the portfolio data supplied in the prompt.
- Do not invent holdings, prices, returns or financial data.
- Do not claim to know future stock prices.
- Do not guarantee investment returns.
- Do not present speculation as fact.
- Clearly explain concentration and diversification risks.
- Mention both strengths and weaknesses when appropriate.
- Give concise actionable suggestions.
- You are providing educational analysis, not guaranteed financial advice.
- Never tell the user that an investment will definitely rise or fall.

Structure the response with:

1. Portfolio Overview
2. Key Strengths
3. Main Risks
4. Diversification Insight
5. Suggested Improvements

Keep the response easy to read for a normal investor.
"""

    prompt = f"""
Here is the user's current portfolio data:

{portfolio_context}

The user's question is:

{user_question}

Analyze the portfolio using the information above.
"""

    last_error = None

    for attempt in range(3):

        try:

            response = client.models.generate_content(

                model=MODEL_NAME,

                contents=prompt,

                config=types.GenerateContentConfig(

                    system_instruction=system_instruction,

                    max_output_tokens=1200,

                    thinking_config=types.ThinkingConfig(
                        thinking_level="low"
                    )

                )
            )

            if not response.text:

                raise RuntimeError(
                    "Gemini returned an empty response"
                )

            return response.text

        except Exception as error:

            last_error = error

            print(
                f"Gemini attempt {attempt + 1} failed: {error}"
            )

            if attempt < 2:

                time.sleep(2)

    raise RuntimeError(
        f"Gemini request failed after 3 attempts: {last_error}"
    )