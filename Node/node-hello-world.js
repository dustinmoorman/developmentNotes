//Http create server with Hello World response.

var http = require('http');

http.createServer( function(request, response) {
	response.writeHead(200, { 'Content-Type': 'text/plain'});
	response.end('Hello World\n');
}).listen(1337, '127.0.0.1');


//curling!
//curl -i http://localhost:1337
//HTTP/1.1 200 OK
//Content-Type: text/plain
//Date: Sun, 09 Jun 2013 03:13:50 GMT
//Connection: keep-alive
//Transfer-Encoding: chunked
