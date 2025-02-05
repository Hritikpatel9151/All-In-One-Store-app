import React from 'react'
import { useContext } from 'react'
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
const ProtectedRoute = ({children,role}) => {
  const {user} =useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login" />
  }
  if (user.role!==role) {
    return <Navigate to="/403" />
  }
  return children;

}

export default ProtectedRoute
