import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ component: Component }) => {
    let token = localStorage.getItem('token')
  const {user} = useContext(AuthContext)
  return (user || token) ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;