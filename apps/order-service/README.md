# Order Service

## Overview
The Order Service handles order lifecycle operations, exposes order endpoints, and coordinates order-related events through Kafka.

## Tech Stack
- Fastify
- Clerk Fastify integration
- Order database package (`@repo/order-db`)
- Kafka producer and consumer (workspace package)
- TypeScript
- Vitest

## Run Locally
From the monorepo root:

```bash
pnpm install
pnpm --filter order-service dev
```

Service runs on `http://localhost:8001`.

## Scripts
- `pnpm --filter order-service dev` - run in watch mode
- `pnpm --filter order-service check-types` - run TypeScript checks
- `pnpm --filter order-service test` - run tests
- `pnpm --filter order-service test:watch` - run tests in watch mode
- `pnpm --filter order-service test:coverage` - generate test coverage

## Key Endpoints
- `GET /health`
- `GET /test`
- Order routes registered in `src/routes/order.ts`
