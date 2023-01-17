import React, { useMemo, lazy } from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { connect } from 'react-redux';
import { Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import routesString from "./helper/routesString";
import { ConnectedRouter } from 'connected-react-router';

import { memberSubRoutes } from "./pages/Members/memberRoute";
import { statistiquesSubRoutes } from "./pages/Statistiques/statistiquesRoute";
import { ActivitySubRoutes } from "./pages/Activities/activitiesRoute";
import { EnvironmentSubRoutes } from "./pages/Environments/environmentRoute";
import { TeamMeetingSubRoutes } from "./pages/TeamMeeting/teamMeetingRoute";
import Login from "./pages/Auth/login";
import SystemAdmin from "./pages/Admin/systemAdmin";

const Member: any = lazy(() => import('./pages/Members/memberRoute'));
const Statistiques: any = lazy(() => import('./pages/Statistiques/statistiquesRoute'));
const activity: any = lazy(() => import('./pages/Activities/activitiesRoute'));
const environments: any = lazy(() => import('./pages/Environments/environmentRoute'));
const teamMeeting: any = lazy(() => import('./pages/TeamMeeting/teamMeetingRoute'));

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

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }: any) => (
    <Route
        {...rest}
        render={(props) =>
            !isLoggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

const UnRestrictedRoute = ({ component: Component, isLoggedIn, ...rest }: any) => (
    <Route
        {...rest}
        render={(props) =>
            isLoggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/members',
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

const Router = ({ history, isLoggedIn }: any) => {
    const memberRoutes = useMemo(() => {
        return routesString(memberSubRoutes, "members");
    }, []);

    const statistiquesRoutes = useMemo(() => {
        return routesString(statistiquesSubRoutes, "statistiques");
    }, []);

    const activityRoutes = useMemo(() => {
        return routesString(ActivitySubRoutes, "activities");
    }, []);

    const environmentRoutes = useMemo(() => {
        return routesString(EnvironmentSubRoutes, "environments");
    }, []);

    const teamMeetingRoutes = useMemo(() => {
        return routesString(TeamMeetingSubRoutes, "teamMeeting");
    }, []);

    return (
        <ConnectedRouter history={history}>
            <Switch>
                <UnRestrictedRoute
                    exact
                    path="/"
                    component={Login}
                    isLoggedIn={isLoggedIn}
                />
                <RestrictedRoute
                    path="/system-settings"
                    component={SystemAdmin}
                    isLoggedIn={isLoggedIn}
                />
                <RestrictedRoute
                    path={memberRoutes}
                    component={Member}
                    isLoggedIn={isLoggedIn}
                />
                <RestrictedRoute
                    path={statistiquesRoutes}
                    component={Statistiques}
                    isLoggedIn={isLoggedIn}
                />
                <RestrictedRoute
                    path={activityRoutes}
                    component={activity}
                    isLoggedIn={isLoggedIn}
                />
                <RestrictedRoute
                    path={environmentRoutes}
                    component={environments}
                    isLoggedIn={isLoggedIn}
                />
                <RestrictedRoute
                    path={teamMeetingRoutes}
                    component={teamMeeting}
                    isLoggedIn={isLoggedIn}
                />
                <Route path="*" component={NoMatchPage} />
            </Switch>
        </ConnectedRouter>
    )
}

export default connect((state: any) => ({
    isLoggedIn: state.auth.token !== null
}))(Router);