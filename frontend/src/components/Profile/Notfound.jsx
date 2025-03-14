import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-4xl font-bold mb-4">404</h2>
      <h3 className="text-2xl mb-6">Page Not Found</h3>
      <p className="mb-4">The page you are looking for doesn't exist or has been moved.</p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;