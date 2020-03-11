import { combineReducers } from "redux";
import { fetchRoomReducer, availableRoomReducer } from "./roomReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  fetchRoomReducer,
  availableRoomReducer,
  authReducer
});

export default rootReducer;
