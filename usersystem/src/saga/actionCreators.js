import {
  CHECK_AUTHORIZATION,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCESS,
} from "./actionConstant";

export const loginRequest = (userData = {}) => ({
  type: LOGIN_REQUEST,
  payload: userData,
});

export const loginSucess = (user, token) => ({
  type: LOGIN_SUCESS,
  payload: user,
});

export const loginFail = (payload = "", errors = {}) => ({
  type: LOGIN_FAIL,
  payload,
  errors,
});

export const checkAuthorization = () => ({ type: CHECK_AUTHORIZATION });
