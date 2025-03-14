React & Node.js Authentication System

Overview:
    A complete authentication system built with React, Node.js, Express, Passport.js, and NeonDB (PostgreSQL).


Features: 
    User registration and login
    Session-based authentication using Passport.js
    Protected routes
    User profile management
    Responsive design with Tailwind CSS
    PostgreSQL database with NeonDB
    Secure password hashing
    Persistent sessions

Tech Stack:

    Frontend:
        React 18
        React Router 6
        Axios for API requests
        Tailwind CSS for styling
        Context API for state management

    Backend
        Node.js
        Express
        Passport.js for authentication
        PostgreSQL (NeonDB)
        bcrypt for password hashing
        express-session for session management
        connect-pg-simple for PostgreSQL session storage

Project Structure:

REACT_AUTH_SYSTEM/
├── frontend/                  # React frontend
│   ├── public/                # Public assets
│   ├── src/                   # Source files
│   │   ├── components/        # UI components
│   │   ├── context/           # React context
│   │   ├── App.js             # Main app component
│   │   └── index.js           # Entry point
│   ├── .env                   # Environment variables
│   └── package.json           # Dependencies
│
├── backend/                   # Node.js backend
│   ├── config/                # Configuration files
│   ├── controllers/           # Route controllers
│   ├── models/                # Database models
│   ├── routes/                # API routes
│   ├── middleware/            # Custom middleware
│   ├── server.js              # Server entry point
│   ├── .env                   # Environment variables
│   └── package.json           # Dependencies
│
└── README.md                  # This file

Getting Started

Prerequisites:
    Node.js (v14+)
    npm or yarn
    PostgreSQL database (NeonDB account)

Backend Setup

-> Clone the repository:
git clone https://github.com/yourusername/auth-system.git
cd auth-system/backend

-> Install dependencies:
npm install 

-> Create a .env file in the backend directory:
PORT=5000
NODE_ENV=development
DATABASE_URL=postgresql://username:password@endpoint.neon.tech/dbname
SESSION_SECRET=your_secret_key_here

-> Set up the database:

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE session (
  sid VARCHAR NOT NULL PRIMARY KEY,
  sess JSON NOT NULL,
  expire TIMESTAMP(6) NOT NULL
);

CREATE INDEX ON session (expire);

-> Start the server:
npm start

Frontend Setup

-> Navigate to the frontend directory:
cd ../frontend

-> Install dependencies:
npm install

Create a .env file in the frontend directory:
REACT_APP_API_URL=http://localhost:5000

-> Start the development server:
npm start

API Endpoints

-> Authentication

POST /api/auth/register - Register a new user

Body: { username, email, password }
Response: { success: true, user: { id, username, email } }


POST /api/auth/login - Authenticate a user

Body: { email, password }
Response: { success: true, user: { id, username, email } }


GET /api/auth/logout - Log out a user

Response: { success: true, message: "Logged out successfully" }


GET /api/auth/current-user - Get current user info

Response: { user: { id, username, email } } or { user: null }


PUT /api/auth/update-profile - Update user profile

Body: { username }
Response: { success: true, user: { id, username, email } }


Authentication Flow

Registration: User creates an account by providing username, email, and password
Login: User authenticates with email and password
Session: Server creates a session and sends a cookie to the client
Protected Routes: Client includes the session cookie in subsequent requests
Verification: Server verifies the session on protected routes
Logout: Session is destroyed when user logs out

Security Considerations

Passwords are hashed using bcrypt
HTTP-only cookies prevent client-side JavaScript access
CORS is configured to allow requests only from trusted origins
Sessions are stored in the PostgreSQL database
Protected routes require authentication
Form validation on both client and server side

Deployment
Backend

Set up a NeonDB database
Configure environment variables for production
Deploy to a Node.js hosting service (Heroku, Vercel, Railway, etc.)

Frontend

Build the production version:
npm run build

Deploy to a static site hosting service (Netlify, Vercel, GitHub Pages, etc.)

