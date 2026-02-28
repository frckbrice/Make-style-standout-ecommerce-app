# Payment Service

## Overview
The Payment Service handles checkout session creation, payment status retrieval, Stripe webhooks, and payment-related event processing.

## Tech Stack
- Hono
- Stripe SDK
- Clerk middleware
- Kafka (workspace package)
- TypeScript
- Vitest

## Run Locally
From the monorepo root:

```bash
pnpm install
pnpm --filter payment-service dev
```

Service runs on `http://localhost:8002`.

## Scripts
- `pnpm --filter payment-service dev` - run in watch mode
- `pnpm --filter payment-service build` - compile TypeScript
- `pnpm --filter payment-service start` - run compiled app
- `pnpm --filter payment-service check-types` - run TypeScript checks
- `pnpm --filter payment-service test` - run tests
- `pnpm --filter payment-service test:watch` - run tests in watch mode
- `pnpm --filter payment-service test:coverage` - generate test coverage

## Environment Variables
- `STRIPE_SECRET_KEY` - Stripe API secret key
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook signing secret

## Key Endpoints
- `GET /health`
- `/sessions/*`
- `/webhooks/*`
