//a basic TCP server implementation

var net = require('net');

var server = net.createServer(function(socket){
	socket.write('howdy\n');
	socket.write('world!\n');

	socket.on('data', function(data) {
		socket.write(data);
	})
});

server.listen(1337);

//Notes and tests! - - - -


// -- Telnet

//Command:
//telnet localhost 1337

//Response:
//Trying ::1...
//telnet: connect to address ::1: Connection refused
//Trying 127.0.0.1...
//Connected to localhost.
//Escape character is '^]'.
//howdy
//world!
//Connection closed by foreign host.

// -- NetCat

//Command:
//nc localhost 1337

//Response:
//howdy
//world!

