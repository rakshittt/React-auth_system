import React from 'react';
import { useAuth } from '../../context/AuthContext';
// import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      // Redirect will happen automatically through AuthContext state change
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Logout
        </button>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-2">User Information</h3>
        <p><strong>Name:</strong> {currentUser?.name}</p>
        <p><strong>Email:</strong> {currentUser?.email}</p>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Protected Content</h3>
        <p>This is protected content only visible to authenticated users.</p>
      </div>
    </div>
  );
};

export default Dashboard;