import "isomorphic-fetch";
import React from "react";
import ReactDOM from "react-dom/server";
import { StaticRouter } from "react-router";
import flushChunks from "webpack-flush-chunks";
import { flushChunkNames } from "react-universal-component/server";
import { Provider } from "react-redux";
import { configureStore } from "../src/store";
import { matchPath } from "react-router-dom";
import App from "../src/components/App";
import routes from "../src/components/App/routes";

export default ({ clientStats }) => async (req, res, next) => {
  const store = await getStore(req);
  const app = getApp(req.url, store);
  const chunks = flushChunks(clientStats, { chunkNames: flushChunkNames() });
  res.send(getHTMLString(app, chunks));
};

const getStore = async req => {
  const store = configureStore();
  const data = await getData(req, store);
  return store;
};

const getApp = (url, store) => {
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
  };
};

const getData = async (req, store) => {
  const promises = [];
  routes.some(route => {
    const match = matchPath(req.url, route);
    if (match) {
      promises.push(store.dispatch(route.loadData(match)));
    }
    return match;
  });
  const result = await Promise.all(promises);
  console.log(result);
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

const initialStateString = preloadedState =>
  `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(
    preloadedState
  ).replace(/</g, "\\u003c")};</script>`;
