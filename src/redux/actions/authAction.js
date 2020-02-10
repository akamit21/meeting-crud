import { LOGIN, LOGOUT } from "../actionType";

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
