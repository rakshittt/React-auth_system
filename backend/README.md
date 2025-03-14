Get the neondb database string link , post signing into neondb website

Make the tables manually using the SQL editor inside the neondb
-- Create users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on email for faster lookups
CREATE INDEX idx_users_email ON users(email);

-- Create sessions table for Passport sessions
CREATE TABLE sessions (
  sid VARCHAR NOT NULL,
  sess JSON NOT NULL,
  expire TIMESTAMP(6) NOT NULL,
  PRIMARY KEY (sid)
);

-- Create index on expire for session cleanup
CREATE INDEX idx_sessions_expire ON sessions(expire);


The backend server is running on port 4000 ( use postman for api endpoint testing)

To register the user
POST Method http://localhost:4000/api/auth/register