import {
  REG_REQUEST,
  REG_SUCCESS,
  REG_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actionType";

let initialState = {
  loggedIn: true,
  isLoading: false,
  error: null,
  registrationResponse: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        loggedIn: false
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false
      };
    }
    case REG_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case REG_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        registrationResponse: action.payload
      };
    }
    case REG_FAILURE: {
      return {
        ...state,
        isLoading: false,
        registrationResponse: action.payload
      };
    }
    default:
      return state;
  }
};

export default authReducer;
