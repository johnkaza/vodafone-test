import React, { Component } from 'react';
import Home from 'views/home/Home';
import Page from 'views/page/Page';

import { Router, Route, Switch } from 'react-router-dom';

import history from './utils/history';

class AppRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/page-2" component={Page} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
