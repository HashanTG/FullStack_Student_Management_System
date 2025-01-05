# Full Stack Project with React (Vite) and Spring Boot

## Overview
This repository contains a full stack project built using React (with Vite) for the frontend, Spring Boot for the backend, and MySQL as the database. This README provides all the necessary instructions to set up and run the project.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Running the Project](#running-the-project)
5. [Environment Variables](#environment-variables)
6. [API Documentation](#api-documentation)
7. [Frontend Configuration](#frontend-configuration)
8. [Backend Configuration](#backend-configuration)
9. [Database Setup](#database-setup)
10. [Deployment](#deployment)
11. [Contributing](#contributing)
12. [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (>= 14.x)
- **npm** (>= 6.x) or **yarn** (>= 1.x)
- **Java** (>= 11)
- **Maven** (>= 3.6.x)
- **MySQL** (>= 5.7)

## Project Structure

```
project-root/
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── ...
├── frontend/
│   ├── src/
│   ├── public/
│   ├── vite.config.js
│   └── ...
└── README.md
```

## Installation

### Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Build the project with Maven:
   ```bash
   mvn clean install
   ```

## Running the Project

### Backend

1. Start the MySQL server.
2. Update the database configurations in `src/main/resources/application.properties`.
3. Run the backend:
   ```bash
   mvn spring-boot:run
   ```

### Frontend

1. Navigate to the `frontend` directory if not already there:
   ```bash
   cd frontend
   ```
2. Start the frontend server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Environment Variables

### Backend

Create a `.env` file in the `backend` directory and add the following variables:

```
DB_URL=jdbc:mysql://localhost:3306/your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

### Frontend

Create a `.env` file in the `frontend` directory and add any required environment variables. Example:

```
VITE_API_BASE_URL=http://localhost:8080/api
```

## API Documentation

API documentation is available at `http://localhost:8080/swagger-ui.html` (if Swagger is configured).

## Frontend Configuration

The frontend is built with React and Vite. The main entry point is `src/main.jsx`. The API base URL is configured via environment variables.

## Backend Configuration

The backend is built with Spring Boot. The main entry point is `src/main/java/com/yourcompany/YourApplication.java`. Configuration files are located in `src/main/resources/`.

## Database Setup

1. Create a new MySQL database:
   ```sql
   CREATE DATABASE your_database_name;
   ```
2. Update the backend configuration in `application.properties` or `.env`.
3. Run the application to auto-create tables if configured.

## Deployment

### Frontend

1. Build the frontend for production:
   ```bash
   npm run build
   # or
   yarn build
   ```
2. Serve the `dist/` folder using your preferred web server.

### Backend

1. Package the backend as a JAR:
   ```bash
   mvn package
   ```
2. Deploy the JAR file on your server.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

