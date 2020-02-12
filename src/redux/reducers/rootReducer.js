import { combineReducers } from "redux";
import { fetchRoomReducer } from "./roomReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  fetchRoomReducer,
  authReducer
});

export default rootReducer;
