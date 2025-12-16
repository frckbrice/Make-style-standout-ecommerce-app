# Microservices E-Commerce Platform

A modern, scalable e-commerce platform built with a microservices architecture. This project demonstrates enterprise-level software development practices, featuring a monorepo structure, event-driven communication, and comprehensive full-stack implementation.

## Overview

This e-commerce platform is designed with a microservices architecture to ensure scalability, maintainability, and independent service deployment. The system consists of multiple specialized services that communicate through REST APIs and event-driven messaging using Apache Kafka.

## Architecture

### Monorepo Structure

The project uses a Turborepo monorepo structure with pnpm workspaces, enabling efficient code sharing and build orchestration across multiple applications and packages.

### Services

#### Frontend Applications

- **Client Application** (`apps/client`): Next.js 15 customer-facing e-commerce application
  - Product catalog with search and filtering
  - Shopping cart functionality
  - Stripe payment integration
  - User authentication and order management
  - Responsive design with Tailwind CSS

- **Admin Dashboard** (`apps/admin`): Next.js 15 administrative interface
  - Product, category, and user management
  - Order tracking and analytics
  - Data visualization with charts and graphs
  - Role-based access control

#### Backend Services

- **Auth Service** (`apps/auth-service`): Express-based authentication service
  - User authentication and authorization
  - Clerk integration for secure authentication
  - Kafka event publishing for user lifecycle events

- **Product Service** (`apps/product-service`): Express-based product management
  - RESTful API for products and categories
  - Prisma ORM with PostgreSQL
  - Product CRUD operations
  - Category management

- **Order Service** (`apps/order-service`): Fastify-based order processing
  - Order creation and management
  - MongoDB integration for order persistence
  - Kafka event subscriptions
  - Order status tracking

- **Payment Service** (`apps/payment-service`): Hono-based payment processing
  - Stripe integration for payment processing
  - Checkout session management
  - Webhook handling for payment events
  - Payment status notifications

- **Email Service** (`apps/email-service`): Email notification service
  - Nodemailer integration
  - Kafka consumer for event-driven emails
  - Welcome emails for new users
  - Order confirmation emails

#### Shared Packages

- **Kafka Package** (`packages/kafka`): Apache Kafka client utilities
  - Producer and consumer implementations
  - Docker Compose configuration for local development

- **Type Definitions** (`packages/types`): Shared TypeScript types
  - Type definitions for auth, cart, order, and product entities

- **Product Database** (`packages/product-db`): Prisma-based database package
  - PostgreSQL schema definitions
  - Product and category models

- **Order Database** (`packages/order-db`): MongoDB integration package
  - Order model definitions
  - Database connection utilities

- **ESLint Configuration** (`packages/eslint-config`): Shared linting rules
- **TypeScript Configuration** (`packages/typescript-config`): Shared TypeScript configs

## Technology Stack

### Frontend
- Next.js 15 with React 19
- TypeScript 5.9
- Tailwind CSS 4
- Zustand for state management
- React Hook Form with Zod validation
- Clerk for authentication
- Stripe for payments
- Recharts for data visualization

### Backend
- Node.js 18+
- Express.js (Auth, Product services)
- Fastify (Order service)
- Hono (Payment service)
- TypeScript
- Prisma ORM (PostgreSQL)
- MongoDB
- Apache Kafka for event streaming
- Nodemailer for email notifications

### Infrastructure & Tools
- Turborepo for monorepo management
- pnpm for package management
- Docker Compose for Kafka infrastructure
- ESLint for code linting
- Prettier for code formatting

## Prerequisites

- Node.js 18 or higher
- pnpm 9.0.0
- PostgreSQL database
- MongoDB database
- Docker and Docker Compose (for Kafka)
- Clerk account and API keys
- Stripe account and API keys
- Email service credentials (for email service)

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone git@github.com:frckbrice/Make-style-standout-ecommerce-app.git
cd microservices-ecommerce
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
   - Create `.env` files in each service directory
   - Configure database connections, API keys, and service URLs
   - Refer to individual service documentation for required variables

4. Set up databases:
   - Configure PostgreSQL for product service
   - Configure MongoDB for order service
   - Run Prisma migrations for product database:
   ```bash
   cd packages/product-db
   pnpm prisma migrate dev
   ```

5. Start Kafka infrastructure:
```bash
cd packages/kafka
docker-compose up -d
```

### Running the Application

#### Development Mode

Run all services in development mode:
```bash
pnpm dev
```

This will start all services concurrently using Turborepo.

#### Individual Services

Each service can be run independently:

- Client application: `cd apps/client && pnpm dev` (port 3002)
- Admin dashboard: `cd apps/admin && pnpm dev` (port 3003)
- Auth service: `cd apps/auth-service && pnpm dev`
- Product service: `cd apps/product-service && pnpm dev`
- Order service: `cd apps/order-service && pnpm dev`
- Payment service: `cd apps/payment-service && pnpm dev`
- Email service: `cd apps/email-service && pnpm dev`

### Building for Production

Build all applications:
```bash
pnpm build
```

## Project Structure

```
microservices-ecommerce/
├── apps/
│   ├── admin/              # Admin dashboard application
│   ├── auth-service/       # Authentication service
│   ├── client/             # Customer-facing application
│   ├── email-service/      # Email notification service
│   ├── order-service/      # Order management service
│   ├── payment-service/    # Payment processing service
│   └── product-service/    # Product management service
├── packages/
│   ├── eslint-config/      # Shared ESLint configuration
│   ├── kafka/              # Kafka client utilities
│   ├── order-db/           # Order database package
│   ├── product-db/         # Product database package
│   ├── types/              # Shared TypeScript types
│   └── typescript-config/  # Shared TypeScript configurations
├── package.json            # Root package configuration
├── pnpm-workspace.yaml     # pnpm workspace configuration
├── turbo.json              # Turborepo configuration
└── README.md               # This file
```

## Key Features

### Customer Features
- Browse and search products
- Filter products by category, price, and attributes
- Add products to shopping cart
- Secure checkout process with Stripe
- Order tracking and history
- User authentication and profile management

### Admin Features
- Comprehensive dashboard with analytics
- Product and category management
- User management and administration
- Order tracking and management
- Data visualization and reporting
- Role-based access control

### Technical Features
- Microservices architecture with independent services
- Event-driven communication via Apache Kafka
- RESTful API design
- Type-safe development with TypeScript
- Monorepo structure for code sharing
- Scalable and maintainable codebase
- Modern UI/UX with responsive design

## Development Guidelines

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Consistent code style across the monorepo

### Git Workflow
- Progressive commits for each major feature
- Clear commit messages following conventional commits
- Feature-based branch strategy

### Testing
- Type checking: `pnpm check-types`
- Linting: `pnpm lint`
- Formatting: `pnpm format`

## Environment Variables

Each service requires specific environment variables. Create `.env` files in the respective service directories with the following:

- Database connection strings
- Clerk authentication keys
- Stripe API keys
- Kafka broker URLs
- Email service credentials
- Service URLs and ports

Refer to individual service documentation for complete environment variable requirements.

## API Documentation

### Product Service
- `GET /api/products` - List all products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)
- `GET /api/categories` - List categories
- `POST /api/categories` - Create category (admin)

### Order Service
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details

### Payment Service
- `POST /api/sessions` - Create checkout session
- `POST /api/webhooks/stripe` - Stripe webhook handler

### Auth Service
- `GET /api/user` - Get user information
- `POST /api/user` - Create user

## Kafka Topics

The system uses the following Kafka topics for event-driven communication:

- `user.created` - Published when a new user is created
- `order.created` - Published when an order is created
- `payment.successful` - Published when payment is completed

## Contributing

This project follows standard software development practices:

1. Create a feature branch for new work
2. Make progressive commits with clear messages
3. Ensure code passes linting and type checking
4. Test thoroughly before submitting

## License

This project is private and proprietary.

## Contact

For questions or inquiries about this project, please contact the repository maintainer.

