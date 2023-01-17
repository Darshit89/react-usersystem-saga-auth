import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCESS } from "./actionConstant";

const initialState = {
  user: {},
  token: null,
  errorData: {},
  loading: false,
};

const loginReducer = (state = initialState, { type, payload, errors }) => {
  console.log("state", state);

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        errorData: {},
        token: null,
        loading: true,
      };
    case LOGIN_SUCESS:
      return {
        ...state,
        user: payload,
        token: payload.token,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        errorData: errors || {},
        token: null,
        loading: false,
      };

    default:
      return state;
  }
};
export default loginReducer;
