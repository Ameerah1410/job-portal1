// Importing action constants for job operations
import {
  DELETE_JOB_FAIL,
  DELETE_JOB_REQUEST,
  DELETE_JOB_RESET,
  DELETE_JOB_SUCCESS,
  JOB_LOAD_FAIL,
  JOB_LOAD_REQUEST,
  JOB_LOAD_RESET,
  JOB_LOAD_SINGLE_FAIL,
  JOB_LOAD_SINGLE_REQUEST,
  JOB_LOAD_SINGLE_RESET,
  JOB_LOAD_SINGLE_SUCCESS,
  JOB_LOAD_SUCCESS,
  REGISTER_JOB_FAIL,
  REGISTER_JOB_REQUEST,
  REGISTER_JOB_RESET,
  REGISTER_JOB_SUCCESS,
  UPDATE_JOB_REQUEST,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB_FAIL,
} from "../constants/jobConstant";

// Reducer for loading multiple jobs
export const loadJobReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case JOB_LOAD_REQUEST:
      return { loading: true };
    case JOB_LOAD_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        page: action.payload.page,
        pages: action.payload.pages,
        count: action.payload.count,
        setUniqueLocation: action.payload.setUniqueLocation,
        jobs: action.payload.jobs,
      };
    case JOB_LOAD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case JOB_LOAD_RESET:
      return {};
    default:
      return state;
  }
};

// Reducer for loading a single job
export const loadJobSingleReducer = (state = { job: {} }, action) => {
  switch (action.type) {
    case JOB_LOAD_SINGLE_REQUEST:
      return { loading: true };
    case JOB_LOAD_SINGLE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        singleJob: action.payload.job,
      };
    case JOB_LOAD_SINGLE_FAIL:
      return { loading: false, error: action.payload };
    case JOB_LOAD_SINGLE_RESET:
      return {};
    default:
      return state;
  }
};

// Reducer for registering a job
export const registerAjobReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_JOB_REQUEST:
      return { loading: true };
    case REGISTER_JOB_SUCCESS:
      return {
        loading: false,
        job: action.payload,
      };
    case REGISTER_JOB_FAIL:
      return { loading: false, error: action.payload };
    case REGISTER_JOB_RESET:
      return {};
    default:
      return state;
  }
};

// Reducer for deleting a job by id
export const deleteJobReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_JOB_REQUEST:
      return { loading: true };
    case DELETE_JOB_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
      };
    case DELETE_JOB_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case DELETE_JOB_RESET:
      return {};
    default:
      return state;
  }
};

// Reducer for updating a job
const initialState = {
  job: null,
  isLoading: false,
  error: null,
};

export const updateJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_JOB_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case UPDATE_JOB_SUCCESS:
      return {
        ...state,
        job: action.payload,
        isLoading: false,
        error: null,
      };
    case UPDATE_JOB_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
