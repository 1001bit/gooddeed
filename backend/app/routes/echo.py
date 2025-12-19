from fastapi import APIRouter
from pydantic import BaseModel


router = APIRouter(tags=["echo"])


class EchoRequest(BaseModel):
    message: str


class EchoResponse(BaseModel):
    echoed: str


@router.post("/echo", response_model=EchoResponse, summary="Echo a message back")
def echo(payload: EchoRequest) -> EchoResponse:
    return EchoResponse(echoed=payload.message)
