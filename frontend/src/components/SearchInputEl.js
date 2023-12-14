import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Button, InputBase } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Define validation schema using yup
const validationSchema = yup.object({
  search: yup
    .string("Enter your search query")
    .required("This field cannot be empty"),
});

const SearchInputEl = () => {
  const navigate = useNavigate();

  // Handle form submission
  const onSubmit = (values, actions) => {
    // Extract search value from formik values
    const { search } = values;

    // Check if the search query is not empty
    if (search.trim()) {
      // Navigate to the search page with the provided search query
      navigate(`/search/${search}`);
    } else {
      // If the search query is empty, navigate to the home page
      navigate("/");
    }

    // Reset the form after submission
    actions.resetForm();
  };

  // Initialize formik for form handling
  const { values, errors, touched, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        search: "",
      },
      validationSchema: validationSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit} style={{ width: "50%" }}>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {/* Search Input Field */}
        <InputBase
          sx={{ bgcolor: "white", padding: "10px" }}
          fullWidth={true}
          id="search"
          name="search"
          label="search"
          placeholder="e.g. developer, backend"
          value={values.search}
          onChange={handleChange}
          error={touched.search && Boolean(errors.search)}
          // Helper text for search input errors
          // helperText={touched.search && errors.search}
        />

        {/* Search Button */}
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={isSubmitting}
        >
          Search
        </Button>
      </Box>

      {/* Display validation error message if touched */}
      <Box component="span" sx={{ color: "orange" }}>
        {touched.search && errors.search}
      </Box>
    </form>
  );
};

export default SearchInputEl;
