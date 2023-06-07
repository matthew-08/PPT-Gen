import React, { ReactNode } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function ProtectRoute() {
  const {
    userInfo: {
      authStatus: { loggedIn },
    },
  } = useAuth();
  return loggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectRoute;
