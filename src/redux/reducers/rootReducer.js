import { combineReducers } from "redux";
import roomReducer from "./roomReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  roomReducer,
  authReducer
});

export default rootReducer;
