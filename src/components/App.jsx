import React from 'react';
import { hot } from 'react-hot-loader';
import { Router } from 'react-static';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Routes from 'react-static-routes';
import '../assets/stylesheets/app.pcss';

const App = () => (
  <React.Fragment>
    <h1>TODO</h1>

    <Router>
      <Routes />
    </Router>
  </React.Fragment>
);

export default hot(module)(App);
