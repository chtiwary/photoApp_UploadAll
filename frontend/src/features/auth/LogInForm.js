import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, selectError, clearError } from './authSlice';

function LogInForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    dispatch(clearError()); // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(formData));
  };

  return (
    <div>
      <h2>Log In</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-400 p-2 mb-2 w-full"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border border-gray-400 p-2 mb-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default LogInForm;
