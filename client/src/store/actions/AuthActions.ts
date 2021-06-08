import { Dispatch } from "redux";
import { AuthState } from "../states/AuthState";
import { LOGIN_FAIL, LOGIN_SUCCESS, SET_MESSAGE } from "./AuthActionTypes";
import AuthEffects from '../effects/AuthEffects';

export const login = (username: string, password: string) => (dispatch: any) => {
    return AuthEffects.login(username, password).then((data: any) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });
      return Promise.resolve();
    },
    (error: any) => {
      const message = error.response.data;
      dispatch({
        type: LOGIN_FAIL ,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message.errors[0]
      });
      return Promise.reject();
    });
};