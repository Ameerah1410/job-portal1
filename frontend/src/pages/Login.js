// Importing required modules and components from Material-UI, React, and Redux
import React, { useEffect } from "react";
import { Avatar, Box } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import LockClockOutlined from "@mui/icons-material/LockClockOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userSignInAction } from "../redux/actions/userActions.js";
import { useNavigate } from "react-router-dom";

// Validation schema using Yup for form validation
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters")
    .required("Password is required"),
});

// Functional component representing the login page
const LogIn = () => {
  // Initializing React hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Extracting state from Redux store using useSelector
  const { isAuthenticated, userInfo } = useSelector((state) => state.signIn);

  // Redirecting based on user role after successful login
  useEffect(() => {
    if (isAuthenticated) {
      if (userInfo.role === 1) {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    }
  }, [isAuthenticated, userInfo, navigate]);

  // Using Formik for form state management and validation
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      // Dispatching user login action and resetting form
      dispatch(userSignInAction(values));
      actions.resetForm();
    },
  });

  // Rendering JSX
  return (
    <>
      {/* Navigation bar */}
      <Navbar />

      {/* Main content container */}
      <Box
        sx={{
          height: "81vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Login form */}
        <Box
          onSubmit={formik.handleSubmit}
          component="form"
          className="form_style border-style"
        >
          {/* Form content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Avatar and lock icon */}
            <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
              <LockClockOutlined />
            </Avatar>

            {/* Email input field */}
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            {/* Password input field */}
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            {/* Log In and Google login buttons */}
            <Button fullWidth variant="contained" type="submit">
              Log In
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </>
  );
};

// Exporting the component as the default export
export default LogIn;
