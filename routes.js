import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { Left, Right, Whoops404 } from './client/components/index';
import { AboutMe } from './client/components/AboutMe';
import App from './client/components/App.jsx';

const routes = (
  <Router history={hashHistory}>
  <Route path="/" component={App} />
  <Route path="about" component={AboutMe} />
  <Route path="*" component={Whoops404} />
  </Router>
)

export default routes;
