import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../../features/auth/authSlice';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = useSelector(selectToken);

  return token ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;