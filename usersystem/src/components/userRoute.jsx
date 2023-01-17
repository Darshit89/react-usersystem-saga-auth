import React, { lazy } from "react";
import { Route, Switch } from "react-router";

const memberSubRoutes = [
  {
    url: "/home",
    component: lazy(() => import("./Home")),
  },
];

const MemberRouter = () => {
  return (
    <Switch>
      {memberSubRoutes.map((singleRoute) => {
        const { path, exact, url, ...otherProps } = singleRoute;
        return (
          <Route
            exact={exact === false ? false : true}
            key={singleRoute.url}
            path={singleRoute.url}
            {...otherProps}
          />
        );
      })}
    </Switch>
  );
};

export { memberSubRoutes };
export default MemberRouter;
