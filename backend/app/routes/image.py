from pathlib import Path
from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse


router = APIRouter(prefix="/image", tags=["images"])

# Store images under backend/images/<category>/<name>.<ext>
IMAGES_ROOT = Path(__file__).resolve().parent.parent.parent / "images"
IMAGES_ROOT.mkdir(parents=True, exist_ok=True)
MEDIA_TYPES = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
}


def _sanitize_segment(segment: str) -> str:
    cleaned = segment.strip()
    if not cleaned or cleaned != Path(cleaned).name or cleaned.startswith("."):
        raise HTTPException(status_code=400, detail="Invalid path segment")
    return cleaned


def _find_image_path(category: str, name: str) -> Path | None:
    for ext in (".png", ".jpg", ".jpeg"):
        candidate = IMAGES_ROOT / category / f"{name}{ext}"
        if candidate.is_file():
            return candidate
    return None


@router.get(
    "/{category}/{name}",
    summary="Serve an image by category and name",
    responses={
        404: {"description": "Image not found"},
        400: {"description": "Invalid path segment"},
    },
)
def serve_image(category: str, name: str):
    safe_category = _sanitize_segment(category)
    safe_name = _sanitize_segment(name)

    image_path = _find_image_path(safe_category, safe_name)
    if not image_path:
        raise HTTPException(status_code=404, detail="Image not found")

    media_type = MEDIA_TYPES.get(image_path.suffix.lower(), "application/octet-stream")
    return FileResponse(image_path, media_type=media_type)
