from pydantic import BaseModel


class AIAdviceRequest(BaseModel):

    question: str