# Product Service

## Overview
The Product Service manages product and category APIs, including protected operations and event-driven integration with other services.

## Tech Stack
- Express
- Clerk Express middleware
- Product database package (`@repo/product-db`)
- Kafka producer and consumer (workspace package)
- TypeScript
- Vitest

## Run Locally
From the monorepo root:

```bash
pnpm install
pnpm --filter product-service dev
```

Service runs on `http://localhost:8000`.

## Scripts
- `pnpm --filter product-service dev` - run in watch mode
- `pnpm --filter product-service check-types` - run TypeScript checks
- `pnpm --filter product-service test` - run tests
- `pnpm --filter product-service test:watch` - run tests in watch mode
- `pnpm --filter product-service test:coverage` - generate test coverage

## Key Endpoints
- `GET /health`
- `GET /test`
- `/products/*`
- `/categories/*`
