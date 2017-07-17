import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import About from './client/components/About';
import  { Left, Right, Whoops404 } from './client/components/index';
import App from './client/components/App.jsx';

const routes = (
  <Router history={hashHistory}>
  <Route path="/" component={App} />
  <Route path="about" component={About} />
  <Route path="*" component={Whoops404} />
  </Router>
)

export default routes;
