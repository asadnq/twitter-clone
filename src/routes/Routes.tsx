import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { Login } from 'login';
import { Home } from 'home';

interface PageRoute {
  path: string;
  component: React.ComponentType;
  route: React.ComponentType<RouteProps>;
  name?: string;
  exact?: boolean;
}

const loginRoute: PageRoute = {
  path: '/login',
  name: 'login',
  component: Login,
  route: Route,
}

const homeRoute: PageRoute = {
  path: '/',
  name: 'home',
  component: Home,
  route: Route,
};

export const allRoutes = [loginRoute, homeRoute];