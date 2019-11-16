import React, { Component } from 'react';
import Home from './views/home/Home';

import { Router, Route, Switch } from 'react-router-dom';

import history from './utils/history';

class AppRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
