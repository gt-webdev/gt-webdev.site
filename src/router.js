import React from 'react';
import {render} from 'react-dom'
import { Router, Route, Link } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import Home from './pages/home'
import Events from './pages/events'

// Used for client-side and server-side rendering
var router = (
  <Router history={typeof document !== "undefined" ? createBrowserHistory() : null}>
    <Route path="/" component={Home} />
    <Route path="events" component={Events} />
  </Router>
);

// Attach handlers when page is opened in browser
if (typeof document !== "undefined") {
  document.addEventListener('DOMContentLoaded', function() {
    render(router, document.getElementById("root"));
  });
}

module.exports = router;