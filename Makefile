.PHONY: dev prod build preview

dev:
	docker compose up --build dev

prod:
	docker compose up --build prod

build:
	npm run build

preview:
	npm run preview
