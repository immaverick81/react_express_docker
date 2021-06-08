import { CLEAR_MESSAGE, SET_MESSAGE } from "./AuthActionTypes";

export const setMessage = (message: string) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});
