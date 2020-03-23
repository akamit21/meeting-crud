import {
  ADD_ROOM_REQUEST,
  ADD_ROOM_SUCCESS,
  ADD_ROOM_FAILURE,
  FETCH_ROOMS_REQUEST,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_FAILURE,
  BOOK_ROOM_REQUEST,
  BOOK_ROOM_FAILURE,
  BOOK_ROOM_SUCCESS,
  AVAILABLE_ROOM,
  FILTER_ROOM,
  SORT_ROOM
} from "../actionType";
import Axios from "axios";

const config = {
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json"
  }
};

// add new room to db
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

// get list of all rooms
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

// book room
export const bookRoom = (data, id) => {
  return async dispatch => {
    dispatch({
      type: BOOK_ROOM_REQUEST
    });
    try {
      const res = await Axios.patch(
        "/meeting-rooms/" + id,
        { ...data },
        config
      );
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

// get available room list
export const fetchAvailableRoom = data => {
  return {
    type: AVAILABLE_ROOM,
    payload: data
  };
};

// filter room
export const filterRoom = data => {
  return {
    type: FILTER_ROOM,
    payload: data
  };
};
// sort room
export const sortRoom = data => {
  return {
    type: SORT_ROOM,
    payload: data
  };
};
