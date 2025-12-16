FROM node:20-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

FROM base AS deps
WORKDIR /app

# Copy workspace files
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY packages ./packages
COPY apps/order-service/package.json ./apps/order-service/

# Install dependencies
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/packages ./packages
COPY . .

# Build workspace packages
RUN pnpm --filter @repo/kafka build || true
RUN pnpm --filter @repo/order-db build || true
RUN pnpm --filter @repo/types build || true

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/packages ./packages

# Copy application
COPY apps/order-service ./apps/order-service

WORKDIR /app/apps/order-service

EXPOSE 8001

CMD ["tsx", "src/index.ts"]

