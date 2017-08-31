import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './store';
import App from './components/App';
import '../node_modules/sanitize.css';

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

const store = configureStore(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;

render(App, store);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App/index.js', () => {
    console.log('hello?');
    const App = require('./components/App').default;
    render(App, store);
  });
}
