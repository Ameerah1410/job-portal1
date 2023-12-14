import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// UserRoute component: A wrapper for routes accessible only to authenticated users
const UserRoute = ({ children }) => {
  // Access user information from the Redux store
  const { userInfo } = useSelector((state) => state.signIn);

  // If the user is authenticated, render the children (allowed content),
  // otherwise, redirect to the home page
  return userInfo ? children : <Navigate to="/" />;
};

export default UserRoute;
