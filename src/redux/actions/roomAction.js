import {
  FETCH_ROOMS_REQUEST,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_FAILURE,
  AVAILABLE_ROOM,
  ADD_ROOM_REQUEST,
  ADD_ROOM_SUCCESS,
  ADD_ROOM_FAILURE,
  BOOK_ROOM_REQUEST,
  BOOK_ROOM_FAILURE,
  BOOK_ROOM_SUCCESS
} from "../actionType";
import Axios from "axios";

const config = {
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json"
  }
};

export const fetchAllRoom = () => {
  return async dispatch => {
    dispatch({
      type: FETCH_ROOMS_REQUEST
    });
    try {
      const res = await Axios.get("/meeting-rooms", config);
      console.log(res);
      dispatch({
        type: FETCH_ROOMS_SUCCESS,
        payload: res
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: FETCH_ROOMS_FAILURE,
        payload: { status: 404, error: true, response: err.message }
      });
    }
  };
};

export const addNewRoom = data => {
  return async dispatch => {
    dispatch({
      type: ADD_ROOM_REQUEST
    });
    try {
      const res = await Axios.post("/meeting-rooms", { ...data }, config);
      console.log(res);
      dispatch({
        type: ADD_ROOM_SUCCESS,
        payload: res
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: ADD_ROOM_FAILURE
      });
    }
  };
};

export const bookRoom = data => {
  return async dispatch => {
    dispatch({
      type: BOOK_ROOM_REQUEST
    });
    try {
      const res = await Axios.post("/meeting-room", { ...data }, config);
      console.log(res);
      dispatch({
        type: BOOK_ROOM_SUCCESS,
        payload: res
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: BOOK_ROOM_FAILURE,
        payload: err
      });
    }
  };
};

export const fetchAvailableRoom = data => {
  return {
    type: AVAILABLE_ROOM,
    payload: data
  };
};
