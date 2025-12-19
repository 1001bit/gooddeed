from fastapi import APIRouter
from pydantic import BaseModel


router = APIRouter(tags=["health"])


class HealthResponse(BaseModel):
    status: str
    detail: str


@router.get("/health", response_model=HealthResponse, summary="Health check")
def health_check() -> HealthResponse:
    """Simple health endpoint used by monitors and load balancers."""
    return HealthResponse(status="ok", detail="Server is running")
