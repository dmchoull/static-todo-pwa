import React from 'react';
import { hot } from 'react-hot-loader';
import { Router } from 'react-static';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Routes from 'react-static-routes';
import reducer from '../reducers';
import '../assets/stylesheets/app.pcss';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
);

export default hot(module)(App);
