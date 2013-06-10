//Multi process example

setInterval(function() {
	console.log("hello world!");
}, 5000);

console.log("Interval time!");

var http = require('http');

setInterval( function() {
	console.log("fetching google.com");
	
	http.get({ host: 'google.com' }, function (response) {
		console.log(response.headers);
	});
}, 2000);

console.log("do your thing!");
