import {
  FETCH_ROOMS_REQUEST,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_FAILURE,
  AVAILABLE_ROOM,
  ADD_ROOM_REQUEST,
  ADD_ROOM_SUCCESS,
  ADD_ROOM_FAILURE
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
      dispatch({
        type: FETCH_ROOMS_SUCCESS,
        payload: res.data
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
      dispatch({
        type: ADD_ROOM_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: ADD_ROOM_FAILURE
      });
    }
  };
};

export const fetchAvailableRoom = data => {
  // console.log(data);
  return {
    type: AVAILABLE_ROOM,
    payload: data
  };
};
