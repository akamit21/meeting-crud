import {
  LOGIN,
  LOGOUT,
  REG_REQUEST,
  REG_SUCCESS,
  REG_FAILURE
} from "../actionType";
import Axios from "axios";

let config = {
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json"
  }
};

// user registration
export const userSignUp = data => {
  return dispatch => {
    dispatch({
      type: REG_REQUEST
    });
    Axios.post("auth/register", { ...data }, config)
      .then(res => {
        dispatch({
          type: REG_SUCCESS,
          payload: res
        });
      })
      .catch(err => {
        dispatch({
          type: REG_FAILURE,
          payload: err
        });
      });
  };
};
export const userLogin = () => {
  return {
    type: LOGIN
  };
};

export const userLogout = () => {
  return {
    type: LOGOUT
  };
};
