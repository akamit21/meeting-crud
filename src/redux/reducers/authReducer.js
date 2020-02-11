import {
  LOGIN,
  LOGOUT,
  REG_REQUEST,
  REG_SUCCESS,
  REG_FAILURE
} from "../actionType";

let initialState = {
  loggedIn: false,
  loading: false,
  error: null,
  registrationResponse: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        loggedIn: true
      };
    }
    case LOGOUT: {
      return {
        ...state,
        loggedIn: false
      };
    }
    case REG_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case REG_SUCCESS: {
      return {
        ...state,
        loading: false,
        registrationResponse: action.payload
      };
    }
    case REG_FAILURE: {
      return {
        ...state,
        loading: false,
        registrationResponse: action.payload
      };
    }
    default:
      return state;
  }
};

export default authReducer;
