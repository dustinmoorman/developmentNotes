//a simple sauce chat server made of node!

net = require('net');

var sockets = [];

var server = net.Server(function(socket){
	socket.write("::ChatServer:: ~ it is made of node\n");
	sockets.push(socket);
	socket.on('data', function(data){
		for (var i = 0; i < sockets.length; i++) {
			sockets[i].write(data);
		}
	});
});

server.listen(1337);


