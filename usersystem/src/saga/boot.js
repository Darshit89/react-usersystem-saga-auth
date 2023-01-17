import { store } from "./store";
import { checkAuthorization } from "./actionCreators";

// this is the first api called whenever browser is refreshed or anything happens
// to check that access is authrorized or not.

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>
  new Promise(() => {
    store.dispatch(checkAuthorization());
  });
