// AuthenticatedRoute.jsx
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';

const AuthenticatedRoute = ({ path, element }) => {
  return (
    <Routes>
    <Route
      path={path}
      element={AuthenticationService.IsUserLoggedIn() ? element : <Navigate to="/login" replace />}
    />
    </Routes>
  );
};

export default AuthenticatedRoute;
