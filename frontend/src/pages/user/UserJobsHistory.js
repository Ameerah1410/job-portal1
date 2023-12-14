// Importing necessary Material-UI components and React:
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CardElement from "../../components/CardElement";

// UserJobsHistory component
const UserJobsHistory = () => {
  // Accessing the user information from the Redux store
  const { user } = useSelector((state) => state.userProfile);

  return (
    <>
      {/* Main container */}
      <Box>
        {/* Title */}
        <Typography variant="h4" sx={{ color: "#fafafa" }}>
          {" "}
          Jobs History
        </Typography>

        {/* Container for displaying job history */}
        <Box>
          {/* Mapping over user's job history and rendering CardElement for each entry */}
          {user &&
            user.jobsHistory.map((history, i) => (
              <CardElement
                key={i}
                id={history._id}
                jobTitle={history.title}
                description={history.description}
                category=""
                location={history.location}
              />
            ))}
        </Box>
      </Box>
    </>
  );
};

// Exporting the UserJobsHistory component as the default export
export default UserJobsHistory;
