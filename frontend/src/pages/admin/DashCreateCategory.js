import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createJobTypeAction } from "../../redux/actions/jobTypeAction";

// Validation schema using yup
const validationSchema = yup.object({
  jobTypeName: yup
    .string("Enter a job category")
    .required("A job category is required"),
});

// DashCreateCategory component
const DashCreateCategory = () => {
  const { user } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      user: user && user._id,
      jobTypeName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      // Dispatching the action to create a job category
      dispatch(createJobTypeAction(values));
      actions.resetForm();
    },
  });

  return (
    <>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: 4,
        }}
      >
        {/* Form for creating a job category */}
        <Box
          onSubmit={formik.handleSubmit}
          component="form"
          className="form_style border-style"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Title */}
            <Typography variant="h5" component="h2" sx={{ pb: 3 }}>
              Create a Category
            </Typography>

            {/* Text field for job category name */}
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="jobTypeName"
              label="category"
              name="jobTypeName"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="category name"
              value={formik.values.jobTypeName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.jobTypeName && Boolean(formik.errors.jobTypeName)
              }
              helperText={
                formik.touched.jobTypeName && formik.errors.jobTypeName
              }
            />

            {/* Button for submitting the form */}
            <Button fullWidth variant="contained" type="submit">
              Create category
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

// Exporting the DashCreateCategory component as the default export
export default DashCreateCategory;
