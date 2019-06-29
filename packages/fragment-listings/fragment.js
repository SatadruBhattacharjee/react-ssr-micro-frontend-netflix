const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
const React = require('react');
const { renderToString } = require('react-dom/server');
import App from './app/containers/ListingContent';
const actions = require('./app/store/actions/index');
import { StaticRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './app/store/reducers';
import promise from 'redux-promise';

const server = http.createServer((req, res) => {
  const hostname = req.headers.host;
  const pathname = url.parse(req.url).pathname
  const jsHeader = { 'Content-Type': 'application/javascript' }
  const htmlPath = path.resolve(__dirname, 'public', 'index.html');
  switch(pathname) {
    case '/':
      const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
      const store = createStoreWithMiddleware(reducers, {})
      Promise.all([
        store.dispatch(actions.fetchTrending()),
        store.dispatch(actions.fetchNetflixOriginals()), 
        store.dispatch(actions.fetchNetflixOriginals()), 
        store.dispatch(actions.fetchTopRated()),
        store.dispatch(actions.fetchActionMovies()),
        store.dispatch(actions.fetchComedyMovies()),
        store.dispatch(actions.fetchHorrorMovies()),
        store.dispatch(actions.fetchRomanceMovies()),
        store.dispatch(actions.fetchDocumentaries())
      ]).then((results) => {
          const preloadedState = store.getState();
          res.writeHead(200,  { 
            'Content-Type': 'text/html'
          })
          fs.readFile(htmlPath, 'utf8', (err, html) => {
            const rootElem = `<script>window.__PRELOADED_LISTINGS = ${JSON.stringify(preloadedState)} </script><div id="listings" class="movieShowcase">`;
            const renderedApp = renderToString(<Provider store={store}>
            <StaticRouter>
                <App />
            </StaticRouter>
            </Provider>);
            res.write(rootElem + renderedApp + '</div>');
            return res.end('')
          });
      });
      break;
    case '/public/bundle.js':
      res.writeHead(200,  { 'Content-Type': 'application/javascript' })
      return fs.createReadStream('./public/bundle.js').pipe(res);

  }
  // switch(pathname) {
  //   case '/public/bundle.js':
  //     res.writeHead(200, jsHeader)
  //     return fs.createReadStream('./public/bundle.js').pipe(res)
  //   default:
  //     res.writeHead(200, {
  //       'Content-Type': 'text/html',
  //       'Link': `<http://${hostname}/public/bundle.js>; rel="fragment-script"`
  //     })
  //     return res.end('')
  // }
})

server.listen(8089, () => {
  console.log('Listing Fragment Server started at 8089')
})
