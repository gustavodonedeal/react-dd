import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const render = App => {
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.getElementById('root')
    );
};

render(App);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App/index.js', () => {
    const App = require('./components/App').default
    render(App)
  })
}