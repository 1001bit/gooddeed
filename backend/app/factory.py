from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import echo, health, image

def create_app() -> FastAPI:
    app = FastAPI(title="GoodDeed API", version="0.1.0")

    # Allow the Expo client to load resources from the backend during development.
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.include_router(health.router)
    app.include_router(echo.router)
    app.include_router(image.router)

    @app.get("/", summary="API information")
    def root():
        return {
            "service": "GoodDeed FastAPI backend",
            "docs": "/docs",
            "schema": "/openapi.json",
        }

    return app
