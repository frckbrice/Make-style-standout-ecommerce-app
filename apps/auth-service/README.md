# Auth Service

## Overview
The Auth Service manages protected user administration endpoints and integrates Clerk authentication for internal operations.

## Tech Stack
- Express
- Clerk Express middleware
- Kafka producer (workspace package)
- TypeScript
- Vitest

## Run Locally
From the monorepo root:

```bash
pnpm install
pnpm --filter auth-service dev
```

Service runs on `http://localhost:8003`.

## Scripts
- `pnpm --filter auth-service dev` - run in watch mode
- `pnpm --filter auth-service check-types` - run TypeScript checks
- `pnpm --filter auth-service test` - run tests
- `pnpm --filter auth-service test:watch` - run tests in watch mode
- `pnpm --filter auth-service test:coverage` - generate test coverage

## Environment Variables
- `CLERK_SECRET_KEY` - Clerk backend API secret key

## Key Endpoints
- `GET /health`
- `/users/*`
