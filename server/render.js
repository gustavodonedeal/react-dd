import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router';
import flushChunks from 'webpack-flush-chunks';
import { flushChunkNames } from 'react-universal-component/server';
import { Provider } from 'react-redux';
import App from '../src/components/App';
import rootReducer from '../src/reducer';
import { createStore } from 'redux';

export default ({ clientStats }) => async (req, res, next) => {
  const app = getApp(req.url);
  const chunks = flushChunks(clientStats, { chunkNames: flushChunkNames() });
  res.send(getHTMLString(app, chunks))
};

const getApp = (url) => {
  const store = createStore(rootReducer);
  const context = {};
  const html = ReactDOM.renderToString(
    <Provider store={store}>    
      <StaticRouter location={url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  return {
    html,
    preloadedState: store.getState()
  }
};

const getHTMLString = ({ html, preloadedState }, { styles, cssHash, js }) => {
  return `
    <!doctype html>
    <html>
      <head>
        ${styles}
      </head>
      <body>
        <div id="root">${html}</div>
        ${initialStateString(preloadedState)}
        ${cssHash}
        ${js}
      </body>
    </html>
  `;
};

const initialStateString = preloadedState => `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};</script>`;
