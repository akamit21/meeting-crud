import {
  REG_REQUEST,
  REG_SUCCESS,
  REG_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
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
        setTimeout(() => {
          dispatch({
            type: REG_SUCCESS,
            payload: res
          });
        }, 3000);
      })
      .catch(err => {
        dispatch({
          type: REG_FAILURE,
          payload: err
        });
      });
  };
};

export const userLogin = data => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST
    });
    Axios.post("auth/login", { ...data }, config)
      .then(res => {
        setTimeout(() => {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res
          });
        }, 3000);
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAILURE,
          paylaod: err
        });
      });
  };
};

// export const userLogout = () => {
//   return {
//     type: LOGOUT
//   };
// };
