FROM node:20-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

FROM base AS deps
WORKDIR /app

# Copy workspace files
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY packages ./packages
COPY apps/client/package.json ./apps/client/

# Install dependencies
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/packages ./packages
COPY . .

ARG NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_placeholder
ARG CLERK_SECRET_KEY=sk_test_placeholder
ARG NEXT_PUBLIC_PRODUCT_SERVICE_URL
ARG NEXT_PUBLIC_ORDER_SERVICE_URL
ARG NEXT_PUBLIC_PAYMENT_SERVICE_URL

ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=${NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
ENV CLERK_SECRET_KEY=${CLERK_SECRET_KEY}
ENV NEXT_PUBLIC_PRODUCT_SERVICE_URL=${NEXT_PUBLIC_PRODUCT_SERVICE_URL}
ENV NEXT_PUBLIC_ORDER_SERVICE_URL=${NEXT_PUBLIC_ORDER_SERVICE_URL}
ENV NEXT_PUBLIC_PAYMENT_SERVICE_URL=${NEXT_PUBLIC_PAYMENT_SERVICE_URL}

# Build client application
RUN pnpm --filter client build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

ARG NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_placeholder
ARG CLERK_SECRET_KEY=sk_test_placeholder
ARG NEXT_PUBLIC_PRODUCT_SERVICE_URL
ARG NEXT_PUBLIC_ORDER_SERVICE_URL
ARG NEXT_PUBLIC_PAYMENT_SERVICE_URL

ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=${NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
ENV CLERK_SECRET_KEY=${CLERK_SECRET_KEY}
ENV NEXT_PUBLIC_PRODUCT_SERVICE_URL=${NEXT_PUBLIC_PRODUCT_SERVICE_URL}
ENV NEXT_PUBLIC_ORDER_SERVICE_URL=${NEXT_PUBLIC_ORDER_SERVICE_URL}
ENV NEXT_PUBLIC_PAYMENT_SERVICE_URL=${NEXT_PUBLIC_PAYMENT_SERVICE_URL}

# Copy built application
COPY --from=builder /app/apps/client/.next/standalone ./
COPY --from=builder /app/apps/client/.next/static ./apps/client/.next/static
COPY --from=builder /app/apps/client/public ./apps/client/public

WORKDIR /app/apps/client

EXPOSE 3002

ENV PORT=3002
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]

