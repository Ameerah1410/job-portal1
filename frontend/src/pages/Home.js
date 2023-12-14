// Importing React, hooks, and Material-UI components
import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import Header from "../components/Header";
import {
  Box,
  Card,
  Container,
  ListItemIcon,
  MenuItem,
  MenuList,
  Pagination,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { jobLoadAction } from "../redux/actions/jobAction";
import { Link, useParams } from "react-router-dom";
import CardElement from "../components/CardElement";
import Footer from "../components/Footer";
import LoadingBox from "../components/LoadingBox";
import SelectComponent from "../components/SelectComponent";
import { jobTypeLoadAction } from "../redux/actions/jobTypeAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// Functional component representing the Home (main) page
const Home = () => {
  // Extracting data from the Redux store using useSelector
  const { jobs, setUniqueLocation, pages, loading } = useSelector(
    (state) => state.loadJobs
  );

  // Extracting theme palette from Material-UI
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const { keyword, location } = useParams();

  // State for pagination and category filtering
  const [page, setPage] = useState(1);
  const [cat, setCat] = React.useState("");

  // useEffect to load jobs based on filters
  useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
  }, [dispatch, page, keyword, cat, location]);

  // useEffect to load job types
  useEffect(() => {
    dispatch(jobTypeLoadAction());
  }, [dispatch]);

  // Event handler for category filter change
  const handleChangeCategory = (e) => {
    setCat(e.target.value);
  };

  // Rendering JSX
  return (
    <>
      {/* Main container with background color */}
      <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
        {/* Navigation bar */}
        <Navbar />
        {/* Header component */}
        <Header />
        {/* Main content container */}
        <Container>
          {/* Stack layout for responsive design */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {/* Left side: Filters */}
            <Box sx={{ flex: 2, p: 2 }}>
              {/* Category filter card */}
              <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                <Box sx={{ pb: 2 }}>
                  {/* Heading for category filter */}
                  <Typography
                    component="h4"
                    sx={{ color: palette.secondary.main, fontWeight: 600 }}
                  >
                    Filter jobs by category
                  </Typography>
                </Box>
                {/* Select component for category filtering */}
                <SelectComponent
                  handleChangeCategory={handleChangeCategory}
                  cat={cat}
                />
              </Card>

              {/* Location filter card */}
              <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                <Box sx={{ pb: 2 }}>
                  <Typography
                    component="h4"
                    sx={{ color: palette.secondary.main, fontWeight: 600 }}
                  >
                    Filter jobs by location
                  </Typography>
                  {/* List of unique locations for filtering */}
                  <MenuList>
                    {setUniqueLocation &&
                      setUniqueLocation.map((location, i) => (
                        <MenuItem key={i}>
                          <ListItemIcon>
                            {/* Location icon */}
                            <LocationOnIcon
                              sx={{
                                color: palette.secondary.main,
                                fontSize: 18,
                              }}
                            />
                          </ListItemIcon>
                          {/* Link to location-specific search */}
                          <Link to={`/search/location/${location}`}>
                            {location}
                          </Link>
                        </MenuItem>
                      ))}
                  </MenuList>
                </Box>
              </Card>
            </Box>
            {/* Right side: Job listings */}
            <Box sx={{ flex: 5, p: 2 }}>
              {/* Loading spinner or no results message */}
              {loading ? (
                <LoadingBox />
              ) : jobs && jobs.length === 0 ? (
                <>
                  <Box
                    sx={{
                      minHeight: "350px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h2>No results found!</h2>
                  </Box>
                </>
              ) : (
                // Job listing cards
                jobs &&
                jobs.map((job, i) => (
                  <CardElement
                    key={i}
                    id={job._id}
                    jobTitle={job.title}
                    description={job.description}
                    category={
                      job.jobType ? job.jobType.jobTypeName : "No category"
                    }
                    location={job.location}
                  />
                ))
              )}
              {/* Pagination component */}
              <Stack spacing={2}>
                <Pagination
                  page={page}
                  count={pages === 0 ? 1 : pages}
                  onChange={(event, value) => setPage(value)}
                />
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
      {/* Footer component */}
      <Footer />
    </>
  );
};

// Exporting the component as the default export
export default Home;
