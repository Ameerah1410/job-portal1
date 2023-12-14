// Importing required modules and components from Material-UI and React
import React from "react";
import { Avatar, Box } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { userSignUpAction } from "../redux/actions/userActions.js";
import { useNavigate } from "react-router-dom";

// Validation schema using Yup for form validation
const validationSchema = yup.object({
  firstName: yup
    .string("Enter your first name")
    .min(3, "First name should be of minimum 3 characters")
    .required("First name is required"),
  lastName: yup
    .string("Enter your last name")
    .min(3, "Last name should be of minimum 3 characters")
    .required("Last name is required"),
  email: yup
    .string("Enter your e-mail")
    .email("Enter a valid e-mail")
    .required("E-mail is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters")
    .required("Password is required"),
});

// Functional component representing the registration page
const Register = () => {
  // Initializing React hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Using Formik for form state management and validation
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      // Dispatching user registration action and navigating to login page
      dispatch(userSignUpAction(values));
      actions.resetForm();
      navigate("/login");
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
          minHeight: "calc(100vh - 100px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "primary.white",
        }}
      >
        {/* Registration form */}
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
              <LockOpenIcon />
            </Avatar>

            {/* Text fields for user input */}
            <TextField
              // First Name input field
              sx={{
                mb: 3,
                "& .MuiInputBase-root": {
                  color: "text.secondary",
                },
                fieldset: { borderColor: "rgb(231, 235, 240)" },
              }}
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />

            {/* Last Name input field */}
            <TextField
              sx={{
                mb: 3,
                "& .MuiInputBase-root": {
                  color: "text.secondary",
                },
                fieldset: { borderColor: "rgb(231, 235, 240)" },
              }}
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />

            {/* Email input field */}
            <TextField
              sx={{
                mb: 3,
                "& .MuiInputBase-root": {
                  color: "text.secondary",
                },
                fieldset: { borderColor: "rgb(231, 235, 240)" },
              }}
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
              sx={{
                mb: 3,
                "& .MuiInputBase-root": {
                  color: "text.secondary",
                },
                fieldset: { borderColor: "rgb(231, 235, 240)" },
              }}
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

            {/* Register and Google registration buttons */}
            <Button fullWidth variant="contained" type="submit">
              Register
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
export default Register;
