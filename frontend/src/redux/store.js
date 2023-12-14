// Importing necessary dependencies
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

// Importing reducers for different parts of the state
import {
  deleteJobReducer,
  loadJobReducer,
  loadJobSingleReducer,
  registerAjobReducer,
  updateJobReducer,
} from "./reducers/jobReducer";
import {
  createJobTypeReducer,
  loadJobTypeReducer,
} from "./reducers/jobTypeReducer";
import {
  allUserReducer,
  userApplyJobReducer,
  userReducerLogout,
  userReducerProfile,
  userReducerSignIn,
  userReducerSignUp,
  deleteUserReducer,
} from "./reducers/userReducer";

// Combine reducers to create the root reducer
const reducer = combineReducers({
  loadJobs: loadJobReducer,
  jobTypeAll: loadJobTypeReducer,
  signIn: userReducerSignIn,
  logOut: userReducerLogout,
  userProfile: userReducerProfile,
  singleJob: loadJobSingleReducer,
  userJobApplication: userApplyJobReducer,
  allUsers: allUserReducer,
  signUp: userReducerSignUp,
  registerJob: registerAjobReducer,
  deleteJob: deleteJobReducer,
  createJobType: createJobTypeReducer,
  deleteUser: deleteUserReducer,
  updateJob: updateJobReducer,
});

// Initial state with user information retrieved from local storage
let initialState = {
  signIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

// Middleware for handling asynchronous actions
const middleware = [thunk];

// Creating the Redux store with the root reducer, initial state, and middleware
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
