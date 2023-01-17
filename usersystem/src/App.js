import React, { Suspense } from "react";
import "antd/dist/antd.css";

import Routes from "./router";
import { history } from "./saga/store";
import Boot from "./saga/boot";
import Spinner from "./components/Spinner";
// import "dotenv/config";/
// import useLoader from './helper/useLoader';

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes history={history} />
    </Suspense>
  );
}

Boot()
  .then(() => App())
  .catch((error) => error);

export default App;
