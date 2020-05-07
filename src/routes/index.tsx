import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { allRoutes as routes } from './Routes';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, idx) => {
          return (
            <route.route
              key={idx}
              path={route.path}
              exact={route.exact}
              render={() => <route.component />}></route.route>
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};
