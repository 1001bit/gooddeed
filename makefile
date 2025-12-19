frontend-run:
	npm --prefix frontend run start

backend-run:
	cd backend && uvicorn main:app --host 0.0.0.0 --port 8000 --reload
