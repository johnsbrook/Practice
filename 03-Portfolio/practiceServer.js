var http = require('http');
var PORT = 8080;
var server = http.createServer(handleRequest);
server.listen(PORT, function() {
    console.log("Servidor escuchando en http://localhost:" + PORT);
});

function handleRequest(solicitud, respuesta) {
    var camino = solicitud.url;
    
    switch(camino) {
        
        case "/":
            return ensenarRaiz(respuesta);

        case "/portfolio":
            return ensenarPerfil(respuesta);

        default:
            return ensensar404(camino, respuesta);
    }
}

function ensenarRaiz(respuesta) {
    var miHTML = 
    "<html>" +
    "<body>" +
    "<h1>Home Page</h1>" +
    "<a href='/portfolio'>Portfolio</a>" +
    "</body></html>";

    respuesta.writeHead(200, {"Content-Type": "text/html"});
    respuesta.end(miHTML);
}

function ensenarPerfil(respuesta) {
    var miHTML = 
    "<html>" +
    "<body>" + 
    "<h1>Este es mi perfil</h1>" + 
    "<a href='/'>Home</a>" +
    "</body></html>";

    respuesta.writeHead(200, {"Content-type": "text/html"});
    respuesta.end(miHTML);
}

function ensensar404(url, respuesta) {
    var miHTML = 
    "<html>" + 
    "<body>" + 
    "<h1>Disculpe, esta pagina no ha sido encontrada.</h1>" +
    "<p>La pagina que usted busca " + url + " no puede ser encontrada.</p>" +
    "</body></html>";

    respuesta.writeHead(404, {"Content-type": "text/html"});
    respuesta.end(miHTML);
}