import axios from "axios";
import { toast } from "react-toastify";
import {
  ALL_USER_LOAD_FAIL,
  ALL_USER_LOAD_REQUEST,
  ALL_USER_LOAD_SUCCESS,
  USER_APPLY_JOB_FAIL,
  USER_APPLY_JOB_REQUEST,
  USER_APPLY_JOB_SUCCESS,
  USER_LOAD_FAIL,
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "../constants/userConstant";

// Action to sign in a user
export const userSignInAction = (user) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST });
  try {
    const { data } = await axios.post("/api/signin", user);
    localStorage.setItem("userInfo", JSON.stringify(data));
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });
    toast.success("Logged in successfully!");
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};

// Action to sign up a new user
export const userSignUpAction = (user) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST });
  try {
    const { data } = await axios.post("/api/signup", user);

    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: data,
    });
    toast.success("Registered successfully!");
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};

// Action to log out a user
export const userLogoutAction = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT_REQUEST });
  try {
    localStorage.removeItem("userInfo");
    const { data } = await axios.get("/api/logout");
    dispatch({
      type: USER_LOGOUT_SUCCESS,
      payload: data,
    });
    toast.success("Logged out successfully!");
  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};

// Action to get user profile information
export const userProfileAction = () => async (dispatch) => {
  dispatch({ type: USER_LOAD_REQUEST });
  try {
    const { data } = await axios.get("/api/me");
    dispatch({
      type: USER_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOAD_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Action to get information about all users
export const allUserAction = () => async (dispatch) => {
  dispatch({ type: ALL_USER_LOAD_REQUEST });
  try {
    const { data } = await axios.get("/api/allusers");
    dispatch({
      type: ALL_USER_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_USER_LOAD_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Action to apply for a job
export const userApplyJobAction = (job) => async (dispatch) => {
  dispatch({ type: USER_APPLY_JOB_REQUEST });
  try {
    const { data } = await axios.post("/api/user/jobhistory", job);

    dispatch({
      type: USER_APPLY_JOB_SUCCESS,
      payload: data,
    });
    toast.success("Application successful!");
  } catch (error) {
    dispatch({
      type: USER_APPLY_JOB_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};

// Action to delete a user by ID
export const deleteSingleUserAction = (job_id) => async (dispatch) => {
  dispatch({ type: DELETE_USER_REQUEST });
  try {
    const { data } = await axios.delete(`/api/admin/user/delete/${job_id}`);
    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: data,
    });
    toast.success("User deleted successfully");
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};
