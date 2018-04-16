/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './components/App';

// Export your top level component as JSX (for static rendering)
// noinspection JSUnusedGlobalSymbols
export default App;

// Render your app
if (typeof document !== 'undefined') {
  const store = createStore(reducer);
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;
  const render = (Comp) => {
    renderMethod(
      <Provider store={store}>
        <Comp />
      </Provider>,
      document.getElementById('root'),
    );
  };

  // Render!
  render(App);
}
