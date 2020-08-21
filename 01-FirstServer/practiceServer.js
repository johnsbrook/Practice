const http = require('http');
const PORT = 8080;

function handleRequest(request, response) {
    response.end('It works! Path Hit: ' + request.url);
}

const server = http.createServer(handleRequest);
    server.listen(PORT, function() {
        console.log("Server is listening on: http://localhost:" + PORT);
    });