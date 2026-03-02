# Client App

## Overview
The Client app is the customer-facing storefront for browsing products, managing cart and checkout flow, and viewing order status.

## Tech Stack
- Next.js 15 (App Router)
- React 19
- Clerk authentication
- Stripe checkout integration
- Zustand state management
- Tailwind CSS
- Vitest and Testing Library

## Run Locally
From the monorepo root:

```bash
pnpm install
pnpm --filter client dev
```

Client app runs on `http://localhost:3002`.

## Scripts
- `pnpm --filter client dev` - start local development server
- `pnpm --filter client build` - create production build
- `pnpm --filter client start` - start production server
- `pnpm --filter client lint` - run linter
- `pnpm --filter client check-types` - run TypeScript checks
- `pnpm --filter client test` - run unit tests
- `pnpm --filter client test:watch` - run tests in watch mode
- `pnpm --filter client test:coverage` - generate test coverage

## Environment Variables
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk publishable key (required for build/runtime)
- `CLERK_SECRET_KEY` - Clerk secret key (required for server auth)
- `NEXT_PUBLIC_PRODUCT_SERVICE_URL` - Product service base URL
- `NEXT_PUBLIC_ORDER_SERVICE_URL` - Order service base URL
- `NEXT_PUBLIC_PAYMENT_SERVICE_URL` - Payment service base URL

## Related Services
- Product Service (`apps/product-service`)
- Order Service (`apps/order-service`)
- Payment Service (`apps/payment-service`)
