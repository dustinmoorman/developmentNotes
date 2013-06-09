//a basic TCP server implementation

var net = require('net');

var server = net.createServer(function(socket){
	socket.write('howdy\n');
	socket.end('world!\n');
});

server.listen(1337);
