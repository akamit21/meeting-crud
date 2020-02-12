import {
  FETCH_ROOMS_REQUEST,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_FAILURE
} from "../actionType";
import Axios from "axios";

const config = {
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json"
  }
};

export const fetchRoomList = () => {
  return async dispatch => {
    dispatch({
      type: FETCH_ROOMS_REQUEST
    });
    try {
      const res = await Axios.get("/meeting-rooms", config);
      console.log(res);
      setTimeout(() => {
        dispatch({
          type: FETCH_ROOMS_SUCCESS,
          payload: { status: 200, error: false, response: res.data }
        });
      }, 2000);
    } catch (err) {
      console.log(err);
      dispatch({
        type: FETCH_ROOMS_FAILURE,
        payload: { status: 404, error: true, response: err.message }
      });
    }
  };
};
