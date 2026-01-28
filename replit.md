# SelectMyCards

## Overview

SelectMyCards is a credit card comparison and recommendation platform designed for the Indian market. The application helps users find suitable credit cards based on their income, credit score, and spending preferences without requiring personal contact information.

The platform features a modern, dark-themed UI with animated components that guide users through a simple three-step process: entering financial details, selecting spending categories, and receiving personalized card recommendations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom theme configuration (dark mode, sapphire color scheme)
- **Animation**: Framer Motion for smooth UI transitions
- **State Management**: React Query for server state, local React state for forms
- **Routing**: Wouter (lightweight router)
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Development**: TSX for TypeScript execution in development
- **Build**: esbuild bundles server code for production
- **API Pattern**: RESTful endpoints under `/api/` prefix

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` with Zod integration via drizzle-zod
- **Migrations**: Drizzle Kit manages database schema changes
- **Database**: PostgreSQL (connection via `DATABASE_URL` environment variable)

### Project Structure
```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # UI components (Hero, Navbar, Footer, etc.)
│   │   └── lib/          # Utilities (queryClient, supabaseClient)
│   └── vite.config.ts
├── server/           # Backend Express application
│   ├── index.ts      # Entry point with middleware setup
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Database access layer
│   ├── db.ts         # Drizzle database connection
│   └── seed.ts       # Initial data seeding
├── shared/           # Shared code between client and server
│   ├── schema.ts     # Database schema and types
│   └── mockData.ts   # Fallback sample data
└── migrations/       # Database migration files
```

### Development vs Production
- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: Static files served from `dist/public`, bundled server runs via Node

## External Dependencies

### Database
- **PostgreSQL**: Primary data store, configured via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries and schema management

### Optional Services
- **Supabase**: Client exists in codebase but gracefully handles missing credentials (returns null if `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are not set)

### Key NPM Packages
- `@tanstack/react-query`: Server state management and caching
- `framer-motion`: Animation library for React
- `lucide-react`: Icon library
- `zod`: Runtime type validation
- `drizzle-orm` / `drizzle-kit`: Database ORM and migration tooling
- `pg`: PostgreSQL client for Node.js

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string (required for backend)
- `VITE_SUPABASE_URL`: Supabase project URL (optional)
- `VITE_SUPABASE_ANON_KEY`: Supabase anonymous key (optional)