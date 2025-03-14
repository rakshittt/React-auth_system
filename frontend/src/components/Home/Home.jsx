import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const HomePage = () => {
  const { currentUser } = useAuth();

  return (
    <div className="max-w-4xl mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our App</h1>
      <p className="text-xl mb-8">A secure authentication system built with React, Node.js, and Passport.js</p>
      
      <div className="mt-8">
        {currentUser ? (
          <div>
            <p className="mb-4">You are logged in as <strong>{currentUser.name}</strong></p>
            <Link
              to="/dashboard"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg mr-4"
            >
              Go to Dashboard
            </Link>
          </div>
        ) : (
          <div>
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg mr-4"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;