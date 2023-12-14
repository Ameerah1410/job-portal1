// Importing React, hooks, and Material-UI components
import React, { useEffect } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  menuClasses,
  useProSidebar,
} from "react-pro-sidebar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { Box, useTheme } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CategoryIcon from "@mui/icons-material/Category";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import Person3Icon from "@mui/icons-material/Person3";
import Avatar from "@mui/material/Avatar";
import logoDashboard from "../../images/logo.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  userLogoutAction,
  userProfileAction,
} from "../../redux/actions/userActions.js";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

// SidebarAdm component
const SidebarAdm = () => {
  // Extracting user information from Redux store
  const { userInfo } = useSelector((state) => state.signIn);

  // Extracting theme palette from Material-UI
  const { palette } = useTheme();

  // Using ProSidebar hook to control sidebar collapse
  const { collapsed } = useProSidebar();

  // Initializing dispatch and navigate functions
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect to fetch user profile information
  useEffect(() => {
    dispatch(userProfileAction());
  }, [dispatch]);

  // Logout function
  const logOut = () => {
    dispatch(userLogoutAction());
    window.location.reload(true);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  // Rendering JSX
  return (
    <>
      {/* Sidebar component */}
      <Sidebar backgroundColor="#003366" style={{ borderRightStyle: "none" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box>
            <Box
              sx={{ pt: 3, pb: 5, display: "flex", justifyContent: "center" }}
            >
              {/* Conditional rendering of logo/avatar based on collapse state */}
              {collapsed ? (
                <Avatar alt="logo dashboard" src={logoDashboard} />
              ) : (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      textAlign: "center",
                      transition: "all ease-out .5s",
                      borderRadius: "50%",
                    }}
                    src={logoDashboard}
                    alt="logo dashboard"
                  />
                </Box>
              )}
            </Box>

            {/* Menu for navigation based on user role */}
            <Menu
              menuItemStyles={{
                button: {
                  [`&.${menuClasses.button}`]: {
                    color: "#fafafa",
                  },
                  [`&.${menuClasses.disabled}`]: {
                    color: "green",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(23,105,170, 1)",
                    color: "#fafafa",
                  },
                },

                icon: {
                  [`&.${menuClasses.icon}`]: {
                    color: palette.primary.main,
                  },
                },
              }}
            >
              {/* Conditional rendering of menu items based on user role */}
              {userInfo && userInfo.role === 1 ? (
                <>
                  <MenuItem
                    component={<Link to="/admin/dashboard" />}
                    icon={<DashboardIcon />}
                  >
                    {" "}
                    Dashboard{" "}
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/admin/users" />}
                    icon={<GroupAddIcon />}
                  >
                    {" "}
                    Users{" "}
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/admin/jobs" />}
                    icon={<WorkIcon />}
                  >
                    {" "}
                    Jobs{" "}
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/admin/category" />}
                    icon={<CategoryIcon />}
                  >
                    {" "}
                    Category{" "}
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem
                    component={<Link to="/user/dashboard" />}
                    icon={<DashboardIcon />}
                  >
                    {" "}
                    Dashboard{" "}
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/user/jobs" />}
                    icon={<WorkHistoryIcon />}
                  >
                    {" "}
                    Applied Jobs{" "}
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/user/info" />}
                    icon={<Person3Icon />}
                  >
                    {" "}
                    Personal Info{" "}
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
          <Box sx={{ pb: 2 }}>
            {/* Logout menu item */}
            <Menu
              menuItemStyles={{
                button: {
                  [`&.${menuClasses.button}`]: {
                    color: "#fafafa",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(23,105,170, 1)",
                    color: "#fafafa",
                  },
                },

                icon: {
                  [`&.${menuClasses.icon}`]: {
                    color: palette.primary.main,
                  },
                },
              }}
            >
              <MenuItem onClick={logOut} icon={<LoginIcon />}>
                {" "}
                Log out{" "}
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Sidebar>
    </>
  );
};

// Exporting the SidebarAdm component as the default export
export default SidebarAdm;
