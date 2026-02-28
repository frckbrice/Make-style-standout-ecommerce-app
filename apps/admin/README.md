# Admin App

## Overview
The Admin app is the internal dashboard for managing the e-commerce platform. It provides authenticated interfaces to manage products, categories, users, and order analytics.

## Tech Stack
- Next.js 15 (App Router)
- React 19
- Clerk authentication
- TanStack Query and TanStack Table
- Tailwind CSS and Radix UI
- Vitest and Testing Library

## Run Locally
From the monorepo root:

```bash
pnpm install
pnpm --filter admin dev
```

Admin app runs on `http://localhost:3003`.

## Scripts
- `pnpm --filter admin dev` - start local development server
- `pnpm --filter admin build` - create production build
- `pnpm --filter admin start` - start production server
- `pnpm --filter admin lint` - run linter
- `pnpm --filter admin check-types` - run TypeScript checks
- `pnpm --filter admin test` - run unit tests
- `pnpm --filter admin test:watch` - run tests in watch mode
- `pnpm --filter admin test:coverage` - generate test coverage

## Environment Variables
- `NEXT_PUBLIC_AUTH_SERVICE_URL` - Auth service base URL
- `NEXT_PUBLIC_PRODUCT_SERVICE_URL` - Product service base URL
- `NEXT_PUBLIC_ORDER_SERVICE_URL` - Order service base URL
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name for image uploads

## Related Services
- Auth Service (`apps/auth-service`)
- Product Service (`apps/product-service`)
- Order Service (`apps/order-service`)
