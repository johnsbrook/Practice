const http = require('http');
const fs = require('fs');
const PORT = 8080;
const servidor = http.createServer(manejadorSolicitud);
    servidor.listen(PORT, () => {
        console.log('El servidor esta escuchando en el puerto ' + PORT + '. Se puede acceder a traves de la pagina http://localhost:' + PORT);
    })

function manejadorSolicitud(solicitud, respuesta) {
    const camino = solicitud.url; 

    switch(camino) {
    case "/": 
        fs.readFile(__dirname + '/index.html', 'utf8', function(err, data){
            if(err) throw err;

            respuesta.writeHead(200, {"Content-Type": "text/html"});
            respuesta.end(data);
        });
    
    case "/food":
        fs.readFile(__dirname + '/food.html', function(err, data){
            if(err) throw err;

            respuesta.writeHead(200, {'Content-Type': 'text/html'});
            respuesta.end(data);
        })

    case "/frameworks":
        fs.readFile(__dirname, '/framework.html', function(err, data){
            if (err) throw err;

            respuesta.writeHead(200, {'Content-Type': 'text/html'});
            respuesta.end(data);
        })
    
    case "/movies":
        fs.readFile(__dirname, '/movies.html', function(err, data){
            if (err) throw err;

            respuesta.writeHead(200, {'Content-Type': 'text/html'});
            respuesta.end(data);
        })
    }
}

    
