'use strict'

const http = require('http')
const Tailor = require('node-tailor')
const tailor = new Tailor({
    templatesPath: __dirname + '/templates',
    amdLoaderUrl: ''
});

http
    .createServer((req, res) => {
        if (req.url === '/favicon.ico') {
            res.writeHead(200, {'Content-Type': 'image/x-icon'});
            return res.end('');
        }

        req.headers['x-request-uri'] = req.url;
        req.url = '/index';

        tailor.requestHandler(req, res);
    })
    .listen(8085, function () {
        console.log('Layout server listening on port 8085')
    });
