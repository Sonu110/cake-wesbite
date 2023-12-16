// Protexted.jsx
import React, { useContext } from 'react';
import { Mycontext } from '../../Context/Context';
import { Navigate, Outlet} from 'react-router-dom';

function Protexted({ children, user }) {
  if (user) {
      return <Outlet></Outlet>;
  }
  return <Navigate to="/login" />;
}

export default Protexted;
