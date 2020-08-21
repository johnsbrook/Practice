var http = require('http');

var port1 = 7000;
var port2 = 7500;

var quotesArray = [
    "The world is one",
    "We are the world",
    "Life is beautiful",
    "We can do this!",
    "Today is a wonderful day!"
]
var quote1 = quotesArray[Math.floor(Math.random() * quotesArray.length)];
var quote2 = quotesArray[Math.floor(Math.random() * quotesArray.length)];

function handleRequest1(request, response) {
    response.end(quote1);
};

function handleRequest2(request, response) {
    response.end(quote2);
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(port1, function() {
    console.log('Server is listening on: http://localhost:' + port1);
});

server2.listen(port2, function() {
    console.log('Server is listening on: http://localhost:' + port2);
});