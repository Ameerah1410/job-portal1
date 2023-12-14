import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// AdminRoute: A wrapper component for routes accessible only to admin users
const AdminRoute = ({ children }) => {
  // Accessing user information from the Redux store
  const { userInfo } = useSelector((state) => state.signIn);

  // Render the child components if the user is an admin, otherwise navigate to the home page
  return userInfo && userInfo.role === 1 ? children : <Navigate to="/" />;
};

export default AdminRoute;
