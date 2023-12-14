// Importing required modules and components from Material-UI and React
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Stack,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { userApplyJobAction } from "../redux/actions/userActions.js";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import LoadingBox from "../components/LoadingBox";
import { jobLoadSingleAction } from "../redux/actions/jobAction";

// Functional component representing a single job details page
const SingleJob = () => {
  // Initializing React hooks
  const dispatch = useDispatch();
  const { singleJob, loading } = useSelector((state) => state.singleJob);
  const { id } = useParams();

  // Fetching single job details based on the id parameter
  useEffect(() => {
    dispatch(jobLoadSingleAction(id));
  }, [dispatch, id]);

  // Handling job application
  const applyForAJob = () => {
    dispatch(
      userApplyJobAction({
        title: singleJob && singleJob.title,
        description: singleJob && singleJob.description,
        salary: singleJob && singleJob.salary,
        location: singleJob && singleJob.location,
      })
    );
  };

  // Rendering JSX
  return (
    <>
      {/* Main container */}
      <Box sx={{ bgcolor: "#fafafa" }}>
        {/* Navigation bar */}
        <Navbar />

        {/* Content container */}
        <Box sx={{ height: "85vh" }}>
          <Container sx={{ pt: "30px" }}>
            {/* Main content stack */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              {/* Left column: Displaying job details */}
              <Box sx={{ flex: 4, p: 2 }}>
                {loading ? (
                  // Loading spinner while job details are being fetched
                  <LoadingBox />
                ) : (
                  // Displaying job details in a Material-UI card
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="h3">
                        {singleJob && singleJob.title}
                      </Typography>
                      <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 700 }}>
                          Salary
                        </Box>
                        : ${singleJob && singleJob.salary}
                      </Typography>
                      <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 700 }}>
                          Location
                        </Box>
                        : {singleJob && singleJob.location}
                      </Typography>
                      <Typography variant="body2" sx={{ pt: 2 }}>
                        {singleJob && singleJob.description}
                      </Typography>
                    </CardContent>
                  </Card>
                )}
              </Box>

              {/* Right column: Apply button */}
              <Box sx={{ flex: 1, p: 2 }}>
                <Card sx={{ p: 2 }}>
                  {/* Button to apply for the job */}
                  <Button
                    onClick={applyForAJob}
                    sx={{ fontSize: "13px" }}
                    variant="contained"
                  >
                    Apply for this Job
                  </Button>
                </Card>
              </Box>
            </Stack>
          </Container>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </>
  );
};

// Exporting the component as the default export
export default SingleJob;
