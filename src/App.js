import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Root from './components/Root/Root';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import About from './pages/About/About';
import Connect from './pages/Connect/Connect';
import Privacy from './pages/Privacy/Privacy';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Root}></Route>
                    <Route exact path="/" component={Home} />
                    <Route path="events" component={Events} />
                    <Route path="about" component={About} />
                    <Route path="connect" component={Connect} />
                    <Route path="privacy" component={Privacy} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
