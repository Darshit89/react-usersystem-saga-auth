import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';

const TeamMeetingSubRoutes: any = [
    {
        url: '/teamMeeting',
        component: lazy(() => import('./teamMeetingTable'))
    },
    {
        url: '/teamMeeting/teamMeeting-report',
        component: lazy(() => import('./teamMeetingReport'))
    },
    {
        url: '/teamMeeting/teamMeeting-details/:id',
        component: lazy(() => import('./teamMeetingDetails'))
    }
];

const TeamMeetingRouter = () => {
    return (
        <Switch>
            {TeamMeetingSubRoutes.map((singleRoute: any) => {
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

export { TeamMeetingSubRoutes };
export default TeamMeetingRouter;
