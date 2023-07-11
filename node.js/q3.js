var http = require('http');

http.createServer(function (req, res) {
    res.end('hello world');
    console.log(req);
}).listen(8000);
