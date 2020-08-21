var http = require('http');
var fs = require('fs');
var PORT = 8080;
var servidor = http.createServer(manejarSolicitud);

function manejarSolicitud(solicitud, respuesta) {

    fs.readFile(__dirname + "/index.html", function(err, data) {
        if(err) throw err;
        respuesta.writeHead(200, {"Content-type": "text/html"});
        respuesta.end(data);
    });
}

servidor.listen(PORT, function() {
    console.log("El servidor esta escuchando en el puerto: " + PORT + ". Acceda a traves de la siguente liguilla: http://localhost:" + PORT)
});