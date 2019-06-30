const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')
const React = require('react');
const { renderToString } = require('react-dom/server');
const Navbar = require('./app/components/Navbar').default;

const server = http.createServer((req, res) => {
  const hostname = req.headers.host;
  console.log("Hostname: " + hostname)
  const pathname = url.parse(req.url).pathname
  const jsHeader = { 'Content-Type': 'application/javascript' }
  const htmlPath = path.resolve(__dirname, 'public', 'index.html');
  switch(pathname) {
    case '/':
      res.writeHead(200,  { 
        'Content-Type': 'text/html'
       })
      fs.readFile(htmlPath, 'utf8', (err, html) => {
        const rootElem = '<div id="header">';
        const renderedApp = renderToString(<Navbar />);
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

server.listen(8087, () => {
  console.log('Header Fragment Server started at 8087')
})
