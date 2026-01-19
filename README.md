# Docker Compose Stack: API + Postgres + Nginx

## What this shows
- Dockerfile-built API container
- Postgres with a named volume
- Nginx reverse proxy (only public port)
- Service discovery by Compose service name

## Run
cp .env.example .env
docker compose up -d --build

## Test
curl -s -i http://localhost:8080/
curl -s -i http://localhost:8080/api/health
curl -s http://localhost:8080/api/db

## Stop + wipe data
docker compose down -v
