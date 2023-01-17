import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";

// import routesString from "./helper/routesString";
import { ConnectedRouter } from "connected-react-router";

import Home from "./components/Home";
import LoginForm from "./components/LoginForm";

const NoMatchPage = () => {
  return (
    <Row className="margin-top">
      <Col xs={{ span: 12, offset: 6 }}>
        <Card>
          <div className="card-body">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h2>Page not found</h2>
              <Link to="/members">back to member</Link>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const UnRestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/home",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const Router = ({ history, isLoggedIn }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <UnRestrictedRoute
          exact
          path="/"
          component={LoginForm}
          isLoggedIn={isLoggedIn}
        />
        <RestrictedRoute
          path="/home"
          component={Home}
          isLoggedIn={isLoggedIn}
        />

        <Route path="*" component={NoMatchPage} />
      </Switch>
    </ConnectedRouter>
  );
};

export default connect((state) => ({
  isLoggedIn: state.loginReducer.token !== null,
}))(Router);
