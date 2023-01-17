import { CHECK_AUTHORIZATION, LOGIN_REQUEST } from "./actionConstant";
import { put, call, takeEvery } from "redux-saga/effects";
import { CreateData } from "./api";
import { loginSucess } from "./actionCreators";
import { clearToken, getToken } from "../helper/utility";
import { push } from "connected-react-router";

function* createUser({ payload }) {
  console.log("dispatch", payload);
  try {
    const { data } = yield call(CreateData, payload);
    console.log("data", data);
    let { token } = data?.data?.user;
    console.log("token: ", token);
    if (token) {
      console.log("true");
      yield localStorage.setItem("auth_token", token);
      yield localStorage.setItem("user", JSON.stringify(data.data.user));
      // console.log("SAGA file:");

      yield put(loginSucess(data.data.user));
      yield put(push("/home"));
      console.log(data.data.user);
    } else {
      console.log("false");
      throw new Error("Invalid credentials provided.");
    }
  } catch (error) {
    console.log("false 2");

    console.log(error);
  }
}

export function* checkAuthorization() {
  const token = getToken().get("authToken");
  const user = getToken().get("user");
  if (token && user) {
    yield put(loginSucess(user, token));
  } else {
    clearToken();
    yield put(push("/"));
  }
}

export default function* loginSaga() {
  yield takeEvery(CHECK_AUTHORIZATION, checkAuthorization);
  yield takeEvery(LOGIN_REQUEST, createUser);
}
