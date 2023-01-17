import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';

const statistiquesSubRoutes: any = [
    {
        url: '/statistiques/interventions-table',
        component: lazy(() => import('./Members/interventionsTable'))
    },
    {
        url: '/statistiques/interventions-graph',
        component: lazy(() => import('./Members/interventionsGraph'))
    },
    {
        url: '/statistiques/activities-table',
        component: lazy(() => import('./Activities/activitiesTable'))
    },
    {
        url: '/statistiques/activities-graph',
        component: lazy(() => import('./Activities/activitiesGraph'))
    }
];

const StatistiquesRouter = () => {
    return (
        <Switch>
            {statistiquesSubRoutes.map((singleRoute: any) => {
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

export { statistiquesSubRoutes };
export default StatistiquesRouter;
