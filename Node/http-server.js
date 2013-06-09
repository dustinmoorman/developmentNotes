//Http create server with Hello World response.

var http = require('http');

http.createServer( function(request, response) {
	response.writeHead(200, { 'Content-Type': 'text/plain'});
	response.end('Hello World\n');
}).listen(1337, '127.0.0.1');

//A series of data collection and tests - - - - - - 

// -- Starting with Curl

//Command:
//curl -i http://localhost:1337

//Response:
//HTTP/1.1 200 OK
//Content-Type: text/plain
//Date: Sun, 09 Jun 2013 03:13:50 GMT
//Connection: keep-alive
//Transfer-Encoding: chunked


// -- Apache Benchmark

//Command:
//ab -n 100 -c 100 http://127.0.0.1:1337/

//Response: 
//This is ApacheBench, Version 2.3 <$Revision: 655654 $>
//Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
//Licensed to The Apache Software Foundation, http://www.apache.org/
//
//Benchmarking 127.0.0.1 (be patient).....done
//
//
//Server Software:        
//Server Hostname:        127.0.0.1
//Server Port:            1337
//
//Document Path:          /
//Document Length:        12 bytes
//
//Concurrency Level:      100
//Time taken for tests:   0.017 seconds
//Complete requests:      100
//Failed requests:        0
//Write errors:           0
//Total transferred:      11300 bytes
//HTML transferred:       1200 bytes
//Requests per second:    5797.77 [#/sec] (mean)
//Time per request:       17.248 [ms] (mean)
//Time per request:       0.172 [ms] (mean, across all concurrent requests)
//Transfer rate:          639.79 [Kbytes/sec] received
//
//Connection Times (ms)
//              min  mean[+/-sd] median   max
//Connect:        1    2   0.4      2       2
//Processing:     3    9   3.4      9      15
//Waiting:        3    9   3.4      9      15
//Total:          4   11   3.8     11      17
//
//Percentage of the requests served within a certain time (ms)
//  50%     11
//  66%     13
//  75%     14
//  80%     15
//  90%     16
//  95%     17
//  98%     17
//  99%     17
// 100%     17 (longest request)

