import React from 'react';
import {render} from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import Root from './components/root'
import Home from './pages/home'
import Events from './pages/events'
import About from './pages/about'
import Connect from './pages/connect'
import Privacy from './pages/privacy'

// Used for client-side and server-side rendering
var router = (
  <Router history={browserHistory} onUpdate={fireTracking}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home} />
      <Route path="events" component={Events} />
      <Route path="about" component={About} />
      <Route path="connect" component={Connect} />
      <Route path="privacy" component={Privacy} />
    </Route>
  </Router>
);

// Attach handlers when page is opened in browser
if (typeof document !== "undefined") {
  document.addEventListener('DOMContentLoaded', function() {
    render(router, document.getElementById("root"));
  });
}

function fireTracking() {
  ga('set', 'page', location.pathname);
  ga('send', 'pageview');
}

module.exports = router;