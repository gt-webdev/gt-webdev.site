import React, { Component } from 'react';
import { BrowserRouter, IndexRoute, Route, Switch } from 'react-router-dom';

import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import About from './components/About/About';
import Connect from './components/Connect/Connect';
import Privacy from './components/Privacy/Privacy';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Root}>
                        <IndexRoute component={Home} />
                        <Route path="events" component={Events} />
                        <Route path="about" component={About} />
                        <Route path="connect" component={Connect} />
                        <Route path="privacy" component={Privacy} />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
