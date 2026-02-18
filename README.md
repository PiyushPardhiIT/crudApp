# CRUD App

A full-stack CRUD (Create, Read, Update, Delete) application for user management.

## Features

- Add new users
- View all users
- Edit existing users
- Delete users

## Tech Stack

### Backend
- Java 21
- Spring Boot 4.0.2
- Spring Data JPA
- MySQL Database
- Maven

### Frontend
- React 19
- Vite
- Axios for API calls
- Bootstrap for styling
- React Router for navigation

## Prerequisites

- Java 21 or higher
- Node.js 18 or higher
- MySQL Server
- Maven

## Installation

### Backend Setup

1. Clone the repository
2. Navigate to `crudApp-Backend`
3. Update `application.properties` with your MySQL credentials
4. Run `mvn clean install`
5. Run `mvn spring-boot:run`

### Frontend Setup

1. Navigate to `crudApp-Frontend`
2. Run `npm install`
3. Run `npm run dev`

## API Endpoints

- `POST /user` - Create a new user
- `GET /users` - Get all users
- `GET /user/{id}` - Get user by ID
- `PUT /user/{id}` - Update user by ID
- `DELETE /user/{id}` - Delete user by ID

## Usage

Open your browser and go to `http://localhost:5173` for the frontend.

The backend runs on `http://localhost:8080`.

## Contributing

Feel free to contribute!

## License

This project is open source.
