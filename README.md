Here’s your backend README molded exactly in the style you provided, customized for your **Equipment Tracker** backend:

---

# Equipment Tracker - Backend API

A professional, production-ready REST API built with **Node.js**, **Express**, and **MongoDB** following clean architecture principles.

## Architecture

This project follows a **layered architecture** with clear separation of concerns:

```
┌─────────────────┐
│   Controllers   │  ← HTTP Request/Response handling
├─────────────────┤
│    Services     │  ← Business logic
├─────────────────┤
│  Repositories   │  ← Data access layer
├─────────────────┤
│     Models      │  ← Database schemas
└─────────────────┘
```

##  Project Structure

```
src/
├── config/
│   ├── database.js
│   ├── constants.js
│   └── index.js
├── models/
│   └── Equipment.model.js
├── repositories/
│   ├── base/
│   │   └── CrudRepository.js
│   └── EquipmentRepository.js
├── services/
│   └── EquipmentService.js
├── controllers/
│   └── EquipmentController.js
├── routes/
│   ├── index.js
│   └── equipment.routes.js
├── middlewares/
│   ├── errorHandler.js
│   └── equipmentValidator.js
├── utils/
│   ├── ApiError.js
│   ├── ApiResponse.js
│   └── logger.js
├── seed/
│   └── equipment.seed.js
└── app.js
```

##  Features

*  **Clean Architecture** - Layered design with separation of concerns
*  **CRUD Operations** - Create, Read, Update, Delete equipment
*  **Data Validation** - Input validation using custom validator
*  **Error Handling** - Centralized error handling with `ApiError`
*  **Logging** - Simple console-based logging (can be extended to Winston)
*  **Security** - CORS, rate limiting, request size limits
*  **Environment Configuration** - `.env` variables for all configurable settings
*  **Graceful Shutdown** - Proper database cleanup on server stop

##  Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (Mongoose)
* **Validation:** Custom validation middleware
* **Utilities:** `ApiError`, `ApiResponse` for standard responses
* **Security:** CORS, rate limiting, body parser limits

##  Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/equipment-tracker
CORS_ORIGIN=http://localhost:5173
API_PREFIX=/api
API_VERSION=v1
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

4. Start MongoDB:

```bash
# Local MongoDB
mongod

# Or using Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

5. Start the server:

```bash
npm run dev       # Development mode
npm start         # Production mode
```

Server runs at `http://localhost:5000`

---

##  API Endpoints

### Equipment

| Method | Endpoint             | Description            |
| ------ | -------------------- | ---------------------- |
| GET    | `/api/equipment`     | Fetch all equipment    |
| GET    | `/api/equipment/:id` | Fetch equipment by ID  |
| POST   | `/api/equipment`     | Create new equipment   |
| PUT    | `/api/equipment/:id` | Update equipment by ID |
| DELETE | `/api/equipment/:id` | Delete equipment by ID |

### Utility

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET    | `/api`   | API info    |

---

##  Example Requests

### Create Equipment

```bash
POST /api/equipment
Content-Type: application/json

{
  "name": "Industrial Mixer 001",
  "type": "Mixer",
  "status": "Active",
  "lastCleaned": "2024-01-15"
}
```

### Get All Equipment

```bash
GET /api/equipment
```

### Update Equipment

```bash
PUT /api/equipment/:id
Content-Type: application/json

{
  "status": "Under Maintenance"
}
```

---

##  Security Features

* **CORS** - Configurable cross-origin access
* **Rate Limiting** - Limits requests per time window
* **Body Size Limits** - Prevents very large requests

---

##  Request Flow

```
Client Request
    ↓
Routes (with validation)
    ↓
Controller (handles HTTP)
    ↓
Service (business logic)
    ↓
Repository (data access)
    ↓
Database
    ↓
Response flows back up
```

---

##  Environment Variables

| Variable                | Description               | Default                                        |
| ----------------------- | ------------------------- | ---------------------------------------------- |
| NODE_ENV                | Environment               | development                                    |
| PORT                    | Server port               | 5000                                           |
| MONGODB_URI             | MongoDB connection string | mongodb://localhost:27017/equipment-tracker    |
| CORS_ORIGIN             | Allowed frontend origin   | [http://localhost:5173](http://localhost:5173) |
| API_PREFIX              | API base path             | /api                                           |
| API_VERSION             | API version               | v1                                             |
| RATE_LIMIT_WINDOW_MS    | Rate limit window         | 900000                                         |
| RATE_LIMIT_MAX_REQUESTS | Max requests per window   | 100                                            |

---

##  Scripts

```bash
npm start        # Production server
npm run dev      # Development server with nodemon
```

---

I can also make a **matching frontend README** in your style so the full project is consistently documented.

Do you want me to do that?
