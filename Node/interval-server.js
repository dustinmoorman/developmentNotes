//Multi process example

//Say hello every 5 seconds
setInterval(function() {
	console.log("hello world!");
}, 5000);

console.log("Interval time!");

var http = require('http');

//Fetch google response headers every 2 s
setInterval( function() {
	console.log("fetching google.com");
	
	http.get({ host: 'google.com' }, function (response) {
		console.log(response.headers);
	});

	console.log("fetch complete");
}, 2000);

console.log("do your thing!");

http.Server( function (request, response) {
	response.writeHead(200);
	setTimeout(function(){
		response.end("Hellur Wurld");
	}, 1000);
}).listen(1337);


//Now if I curl it (curl -i http://localhost:1337)
//It'll wait a second and send back a hellur werld!
