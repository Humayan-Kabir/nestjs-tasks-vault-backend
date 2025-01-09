<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# NestJS Task Management API

## Overview
A robust RESTful API built with NestJS for task management, featuring comprehensive CRUD operations, data validation, and error handling. The system implements enterprise-level architecture patterns and best practices for scalable backend development.

## Key Features
- ✨ Complete CRUD operations for tasks
- 🔐 Input validation and sanitization
- 🎯 Custom exception handling
- 📝 Comprehensive API documentation
- 🔄 Entity-DTO mapping patterns
- 🗃️ PostgreSQL integration
- 🐳 Docker support for development

## Technology Stack
- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Validation**: class-validator, class-transformer
- **Documentation**: Swagger/OpenAPI
- **Container**: Docker (optional, for PostgreSQL)
- **Testing**: Jest

## Architecture
The project follows a modular architecture with clear separation of concerns:

### Core Components
- **Controllers**: Handle HTTP requests/responses
- **Services**: Implement business logic
- **Repositories**: Manage data persistence
- **DTOs**: Define data transfer objects
- **Entities**: Define database models
- **Mappers**: Handle object transformations

### Best Practices
- Dependency Injection
- Repository Pattern
- DTO Pattern
- Single Responsibility
- Custom Exception Filters
- Request Validation

## API Endpoints

### Tasks Resource
```typescript
GET    /api/tasks     - Retrieve all tasks
GET    /api/tasks/:id - Retrieve a specific task
POST   /api/tasks     - Create a new task
PATCH  /api/tasks/:id - Update a task
DELETE /api/tasks/:id - Delete a task
```

### Request/Response Examples

#### Create Task
```json
POST /api/tasks
{
  "title": "Complete Project",
  "description": "Finish the NestJS project implementation",
  "status": "OPEN"
}
```

#### Task Response
```json
{
  "id": 1,
  "title": "Complete Project",
  "description": "Finish the NestJS project implementation",
  "status": "OPEN",
  "createdAt": "2025-01-10T02:01:47+06:00",
  "updatedAt": "2025-01-10T02:01:47+06:00"
}
```

## Setup and Installation

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL (local install or Docker)

### Database Setup
```bash
# Option 1: Using Docker for PostgreSQL
docker-compose up -d postgres

# Option 2: Use local PostgreSQL installation
# Ensure PostgreSQL is running on port 5432
```

### Application Setup
```bash
# Install dependencies
npm install

# Development
npm run start:dev

# Production Build
npm run build
npm run start:prod
```

## Project Structure
```
src/
├── modules/
│   └── tasks/
│       ├── dto/          # Data Transfer Objects
│       ├── entities/     # Database Entities
│       ├── exceptions/   # Custom Exceptions
│       ├── mappers/      # Object Mappers
│       ├── tasks.controller.ts
│       ├── tasks.service.ts
│       └── tasks.module.ts
├── config/              # Configuration
└── common/             # Shared Resources
```

## Environment Configuration
```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=tasks
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
PORT=3000
```

## Testing
```bash
# Unit tests
npm run test

# Integration tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## API Documentation
API documentation is available at `/api/docs` when running the application in development mode.

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.
