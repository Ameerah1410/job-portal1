// Importing necessary dependencies and components
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import LogIn from "./pages/Login";
import UserDashboard from "./pages/user/UserDashboard";
import UserRoute from "./components/UserRoute";
import AdminRoute from "./components/AdminRoute";
import Layout from "./pages/global/Layout";
import UserJobsHistory from "./pages/user/UserJobsHistory";
import UserInfoDashboard from "./pages/user/UserInfoDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import SingleJob from "./pages/SingleJob";
import DashUsers from "./pages/admin/DashUsers";
import DashJobs from "./pages/admin/DashJobs";
import Register from "./pages/Register";
import DashCategory from "./pages/admin/DashCategory";
import DashCreateJob from "./pages/admin/DashCreateJob";
import DashCreateCategory from "./pages/admin/DashCreateCategory";
import EditJob from "./pages/admin/EditJob";

// Higher Order Components (HOC) for layouts
const UserDashboardHOC = Layout(UserDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);
const AdminDashboardHOC = Layout(AdminDashboard);
const DashUsersHOC = Layout(DashUsers);
const DashJobsHOC = Layout(DashJobs);
const DashCategoryHOC = Layout(DashCategory);
const DashCreateJobHOC = Layout(DashCreateJob);
const DashCreateCategoryHOC = Layout(DashCreateCategory);
const EditJobHOC = Layout(EditJob);

// Main App component
const App = () => {
  // State to manage user information
  const [user, setUser] = useState(null);

  // Function to fetch user information
  const getUser = async () => {
    try {
      const url = "http://localhost:5000/auth/login/success";
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch user information on component mount
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {/* Notification container */}
      <ToastContainer />

      {/* Theme setup */}
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* Sidebar provider */}
        <ProSidebarProvider>
          {/* Routing setup */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/location/:location" element={<Home />} />
            <Route path="/search/:keyword" element={<Home />} />
            <Route path="/login" element={<LogIn user={user} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/job/:id" element={<SingleJob />} />

            {/* Admin routes */}
            <Route
              path="/admin/dashboard"
              element={
                <AdminRoute>
                  <AdminDashboardHOC />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <AdminRoute>
                  <DashUsersHOC />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/jobs"
              element={
                <AdminRoute>
                  <DashJobsHOC />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/category"
              element={
                <AdminRoute>
                  <DashCategoryHOC />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/job/create"
              element={
                <AdminRoute>
                  <DashCreateJobHOC />
                </AdminRoute>
              }
            />
            <Route
              path="/job/update/:id"
              element={
                <AdminRoute>
                  <EditJobHOC />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/category/create"
              element={
                <AdminRoute>
                  <DashCreateCategoryHOC />
                </AdminRoute>
              }
            />

            {/* User routes */}
            <Route
              path="/user/dashboard"
              element={
                <UserRoute>
                  <UserDashboardHOC />
                </UserRoute>
              }
            />
            <Route
              path="/user/jobs"
              element={
                <UserRoute>
                  <UserJobsHistoryHOC />
                </UserRoute>
              }
            />
            <Route
              path="/user/info"
              element={
                <UserRoute>
                  <UserInfoDashboardHOC />
                </UserRoute>
              }
            />

            {/* Not found route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ProSidebarProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
