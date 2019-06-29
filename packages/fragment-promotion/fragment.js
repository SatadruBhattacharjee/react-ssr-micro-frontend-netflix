const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')
const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('./app/containers/PromotionContent').default;
require('isomorphic-fetch');
var initialData;
fetch(`https://api.themoviedb.org/3/tv/63351?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0`)
.then( response => response.json())
.then( idata => {
  initialData = idata;
});

const server = http.createServer((req, res) => {
  const hostname = req.headers.host;
  const pathname = url.parse(req.url).pathname
  const jsHeader = { 'Content-Type': 'application/javascript' }
  const htmlPath = path.resolve(__dirname, 'public', 'index.html');
  switch(pathname) {
    case '/':
      res.writeHead(200,  { 
        'Content-Type': 'text/html'
       })
      fs.readFile(htmlPath, 'utf8', (err, html) => {
        const rootElem = '<div id="promotion" class="header">';
        const renderedApp = renderToString(<App initialData = {initialData}/>);
        res.write(rootElem + renderedApp + '</div>');
        return res.end('')
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

server.listen(8088, () => {
  console.log('Promotion Fragment Server started at 8088')
})
