import React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Head } from 'react-static';
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

class App extends React.Component {
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        // eslint-disable-next-line compat/compat
        navigator.serviceWorker.register('/sw.js').then((registration) => {
          // Registration was successful
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (err) => {
          // registration failed :(
          console.log('ServiceWorker registration failed: ', err);
        });
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <meta name="theme-color" content="#2196F3" />
          <link rel="manifest" href="/manifest.json" />
        </Head>

        <Provider store={store}>
          <Router>
            <Routes />
          </Router>
        </Provider>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
