import * as React from 'react';
import { FC } from 'react';
import { Route, Switch } from 'react-router';

export interface IRoute {
  path: string | string[];
  exact?: boolean;
  auth?: JSX.Element | Route;
  noAuth?: JSX.Element | Route;
  both?: JSX.Element;
}

interface IProps {
  routes: IRoute[];
  authorized?: boolean;
}

const SwitchGenerator: FC<IProps> = ({ routes, authorized }) => (
  <Switch>
    {routes.map(route => (
      <Route
        key={typeof route.path === 'string' ? route.path : route.path[0]}
        path={route.path}
        exact={route.exact}
      >
        {route.both ? route.both : authorized ? route.auth : route.noAuth}
      </Route>
    ))}
  </Switch>
);

export default SwitchGenerator;
