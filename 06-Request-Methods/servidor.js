var http = require('http');
var PORT = 8080;
var servidor = http.createServer(manejarSolicitud);

function manejarSolicitud(solicitud, respuesta) {
    var solicitarData = "";
    solicitud.on('data', function(data) {
        solicitarData += data;
    });
    solicitud.on('fin', function() {
        console.log('Usted hizo una', solicitud.method, 'con una data: \n', solicitarData);
        respuesta.end();
    })
}

servidor.listen(PORT, function() {
    console.log('Usted esta escuchando en http://localhost:' + PORT);
})