import {
  ADD_ROOM,
  AVAILABLE_ROOM,
  BOOK_ROOM,
  VIEW_ROOM,
  DELETE_ROOM,
  FILTER_ROOM,
  SORT_ROOM
} from "../actionType";

export const addRoom = data => {
  return {
    type: ADD_ROOM,
    payload: data
  };
};
export const availableRoom = () => {
  return {
    type: AVAILABLE_ROOM
  };
};
export const bookRoom = data => {
  return {
    type: BOOK_ROOM,
    payload: data
  };
};
export const viewRoom = data => {
  return {
    type: VIEW_ROOM,
    payload: data
  };
};
export const deleteRoom = data => {
  return {
    type: DELETE_ROOM,
    payload: data
  };
};
export const filterRoom = data => {
  return {
    type: FILTER_ROOM,
    payload: data
  };
};
export const sortRoom = data => {
  return {
    type: SORT_ROOM,
    payload: data
  };
};
