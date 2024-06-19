// src/components/Layout/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../../features/auth/authSlice';

function Navbar() {
  const token = useSelector(selectToken);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Photo App
        </Link>
        <div>
          {token ? (
            <div className="flex items-center">
              <Link to="/upload" className="mr-4">
                Upload Photos
              </Link>
              <Link to="/myphotos">My Photos</Link>
            </div>
          ) : (
            <div>
              <Link to="/signup" className="mr-4">
                Sign Up
              </Link>
              <Link to="/login">Log In</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
