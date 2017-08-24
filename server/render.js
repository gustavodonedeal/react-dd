import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router';
import flushChunks from 'webpack-flush-chunks';
import { flushChunkNames } from 'react-universal-component/server';
import App from '../src/components/App';

export default ({ clientStats }) => async (req, res, next) => {
  const context = {};
  const app = ReactDOM.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const { js, styles, cssHash } = flushChunks(clientStats, {
    chunkNames: flushChunkNames()
  })
  
  res.send(`
    <!doctype html>
    <html>
      <head>
        ${styles}
      </head>
      <body>
        <div id="root">${app}</div>
        ${cssHash}
        ${js}
      </body>
    </html>
  `)
};