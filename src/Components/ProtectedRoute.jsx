import React from 'react'
import {  useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, role }) => {
  const { user } = useSelector((state) => state.auth);

  if (!user || user.role !== role) {
    return <Navigate to="/login" />;
  }

  return element;
};


export default ProtectedRoute

// const ProtectedRoute = ({children,role}) => {
//   const {user} =useSelector((state)=>state.auth);
//   if (!user) {
//     return <Navigate to="/" />
//   }
//   if (user.role!==role) {
//     return <Navigate to="/unauthorize" />
//   }

//   return children;

// }