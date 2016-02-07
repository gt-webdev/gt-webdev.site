import React from 'react';
import { browserHistory, Router, Route, Link } from 'react-router'
import Home from './pages/home'
import Events from './pages/events'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/events" component={Events} />
  </Router>
);