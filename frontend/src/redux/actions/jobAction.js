import axios from "axios";
import { toast } from "react-toastify";
import {
  DELETE_JOB_FAIL,
  DELETE_JOB_REQUEST,
  DELETE_JOB_SUCCESS,
  JOB_LOAD_FAIL,
  JOB_LOAD_REQUEST,
  JOB_LOAD_SINGLE_FAIL,
  JOB_LOAD_SINGLE_REQUEST,
  JOB_LOAD_SINGLE_SUCCESS,
  JOB_LOAD_SUCCESS,
  REGISTER_JOB_FAIL,
  REGISTER_JOB_REQUEST,
  REGISTER_JOB_SUCCESS,
  UPDATE_JOB_REQUEST,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB_FAIL,
} from "../constants/jobConstant";

// Action to load jobs
export const jobLoadAction =
  (pageNumber, keyword = "", cat = "", location = "") =>
  async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    try {
      const { data } = await axios.get(
        `/api/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`
      );
      dispatch({
        type: JOB_LOAD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: JOB_LOAD_FAIL,
        payload: error.response.data.error,
      });
    }
  };

// Action to load a single job
export const jobLoadSingleAction = (id) => async (dispatch) => {
  dispatch({ type: JOB_LOAD_SINGLE_REQUEST });
  try {
    const { data } = await axios.get(`/api/job/${id}`);
    dispatch({
      type: JOB_LOAD_SINGLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOB_LOAD_SINGLE_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Action to delete a single job
export const deleteSingleJobAction = (job_id) => async (dispatch) => {
  dispatch({ type: DELETE_JOB_REQUEST });
  try {
    const { data } = await axios.delete(`/api/job/delete/${job_id}`);
    dispatch({
      type: DELETE_JOB_SUCCESS,
      payload: data,
    });
    toast.success("Job deleted successfully");
  } catch (error) {
    dispatch({
      type: DELETE_JOB_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};

// Action to register a new job
export const registerAjobAction = (job) => async (dispatch) => {
  dispatch({ type: REGISTER_JOB_REQUEST });

  try {
    const { data } = await axios.post("/api/job/create", job);
    dispatch({
      type: REGISTER_JOB_SUCCESS,
      payload: data,
    });
    toast.success("Job created successfully");
  } catch (error) {
    dispatch({
      type: REGISTER_JOB_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};

// Action to update a job
export const updateJobAction = (job_id, updatedData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_JOB_REQUEST });

    const { data } = await axios.put(`/api/job/update/${job_id}`, updatedData);

    dispatch({
      type: UPDATE_JOB_SUCCESS,
      payload: data,
    });
    toast.success("Job updated successfully");
  } catch (error) {
    dispatch({
      type: UPDATE_JOB_FAIL,
      payload: error.response ? error.response.data.error : error.message,
    });
    toast.error(error.response.data.error);
  }
};
