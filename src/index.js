import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import rootReducer from './reducer';

const render = (App, store) => {
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      document.getElementById('root')
    );
};

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = createStore(rootReducer, preloadedState);

render(App, store);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App/index.js', () => {
    const App = require('./components/App').default
    render(App, store)
  })
}