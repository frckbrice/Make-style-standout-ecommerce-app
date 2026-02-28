# Email Service

## Overview
The Email Service consumes Kafka events and sends transactional emails such as account creation and order confirmation notifications.

## Tech Stack
- Kafka consumer (workspace package)
- Nodemailer
- TypeScript
- Vitest

## Run Locally
From the monorepo root:

```bash
pnpm install
pnpm --filter email-service dev
```

## Scripts
- `pnpm --filter email-service dev` - run in watch mode
- `pnpm --filter email-service check-types` - run TypeScript checks
- `pnpm --filter email-service test` - run tests
- `pnpm --filter email-service test:watch` - run tests in watch mode
- `pnpm --filter email-service test:coverage` - generate test coverage

## Environment Variables
- `GOOGLE_CLIENT_ID` - OAuth client ID for SMTP provider
- `GOOGLE_CLIENT_SECRET` - OAuth client secret
- `GOOGLE_REFRESH_TOKEN` - OAuth refresh token

## Subscribed Topics
- `user.created`
- `order.created`
