# TRUX Logistics Management System

## Project Description
TRUX is a high-performance logistics management platform designed to streamline the connection between customers, companies, and drivers. The system allows for real-time load requests, fleet management, and shipment tracking through a modern, secure, and intuitive interface.

### Key Modules:
- **Auth Module**: Secure authentication using JWT (Access & Refresh tokens) and role-based access control (RBAC).
- **User Directory**: Centralized management for Clients, Companies, Drivers, and Admin staff.
- **Shipment Module**: Full lifecycle management for cargo, from load request to final delivery.
- **Reporting**: PDF generation for operational telemetry and audit logs.

---

## Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js**: v18.x or higher
- **NPM**: v9.x or higher
- **PostgreSQL**: v14.x or higher (or a Supabase account)
- **Git**

---

## Installation Step-by-Step

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd prueba-typescript
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Database Setup:**
   Initialize the database schema using Prisma:
   ```bash
   npx prisma db push
   npx prisma generate
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## Environment Variables Configuration

Create a `.env` file in the root directory and configure the following variables (see `.env.example` for reference):

```env
# Authentication
JWT_ACCESS_SECRET="your_secure_access_secret"
JWT_REFRESH_SECRET="your_secure_refresh_secret"
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"

# Database
DATABASE_URL="postgresql://user:password@host:6543/postgres"
DIRECT_URL="postgresql://user:password@host:5432/postgres"

# Operational
ADMIN_SECRET_CODE="2206"
```

---

## Commands
- `npm run dev`: Starts the Next.js development server.
- `npx prisma studio`: Opens the GUI to view and edit database data.
- `npx prisma db push`: Synchronizes the schema with the database.
- `npx prisma generate`: Generates the Prisma Client.

---

## API Documentation

### Authentication
- `POST /api/auth/register`: Create a new user account.
- `POST /api/auth/login`: Authenticate and receive JWT tokens.
- `POST /api/auth/refresh`: Refresh expired access tokens.

### Users
- `GET /api/users`: List all registered entities (Admin only).
- `PATCH /api/users/[id]`: Update user status or details.

### Shipments
- `GET /api/shipments`: Fetch shipments filtered by user role.
- `POST /api/shipments`: Create a new load request (Customer/Company only).
- `PATCH /api/shipments/[id]`: Update shipment status or assign a driver.

---

## Test Data & Request Example

### Sample User (Admin)
- **Email**: `admin@trux.com`
- **Password**: `admin123`
- **Role**: `ADMIN`

### Sample Request (Create Shipment)
**Endpoint**: `POST /api/shipments`
**Headers**: `Authorization: Bearer <token>`
**Body**:
```json
{
  "cargoType": "Industrial Machinery",
  "weight": 5.5,
  "origin": "Port of Houston, TX",
  "destination": "Warehouse 7, Chicago IL",
  "timeline": "URGENT"
}
```

---

## Entity-Relationship Diagram

```mermaid
erDiagram
    USER ||--o{ SHIPMENT : "sender"
    USER ||--o{ SHIPMENT : "driver"
    
    USER {
        int id PK
        string name
        string email UK
        string nit UK
        string address
        string phone
        string password
        enum role
        boolean isActive
        datetime createdAt
    }

    SHIPMENT {
        int id PK
        string cargoType
        float weight
        string dimensions
        string origin
        string destination
        string timeline
        enum status
        int senderId FK
        int driverId FK
        datetime createdAt
        datetime updatedAt
    }
```

---

## Operational Notes
- **Role Permissions**: Only users with the `ADMIN` role can view the full Company Directory and change user statuses.
- **Shipment Lifecycle**: Shipments start as `PENDING`, move to `ASSIGNED` when a driver is linked, and then progress through `IN_TRANSIT` and `DELIVERED`.
