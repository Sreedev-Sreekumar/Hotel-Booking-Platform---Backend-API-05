# Hotel-Booking-Platform---Backend-API-05
Hotel Booking REST API built with Node.js, Express.js, MySQL, JWT Authentication, and bcrypt for secure user registration, login, room management, and booking operations.

# STEPS
# Hotel Booking API

A RESTful Hotel Booking API built using Node.js, Express.js, and MySQL.

## Features

- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcrypt
- Add Rooms
- View Rooms
- Create Bookings
- View Bookings

## Tech Stack

- Node.js
- Express.js
- MySQL
- JWT
- bcryptjs
- Postman

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

### Rooms

POST /api/rooms

GET /api/rooms

### Bookings

POST /api/bookings

GET /api/bookings

## Installation

```bash
npm install
```

Create `.env` file:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=hotel_booking
JWT_SECRET=your_secret_key
```

Run:

```bash
node index.js
```

## Author

Sreedev Sreekumar
