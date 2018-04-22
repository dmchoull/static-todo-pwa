import React from 'react';
import { hot } from 'react-hot-loader';
import { Router } from 'react-static';
import { applyMiddleware, compose, createStore } from 'redux';
import persistState, { mergePersistedState } from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Routes from 'react-static-routes';
import reducer from '../reducers';
import '../assets/stylesheets/app.pcss';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

let enhancer = compose(applyMiddleware(...middlewares));

if (typeof document !== 'undefined') {
  // use persistState enhancer if we're running in the browser
  const storage = adapter(window.localStorage);
  enhancer = compose(
    applyMiddleware(...middlewares),
    persistState(storage, 'todo-app'),
  );
}

const store = createStore(
  mergePersistedState()(reducer),
  {},
  enhancer,
);

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
);

export default hot(module)(App);
