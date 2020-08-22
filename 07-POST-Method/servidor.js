var http = require("http");
var fs = require("fs");
var PORT = 8080;
var servidor = http.createServer(manejarSolicitud);

function manejarSolicitud(sol, res) {
    var camino = sol.url;
    switch (camino) {
        case '/thankyou': 
            return reproducirThankYou(sol, res);
        default:
            return reproducirWelcome(sol,res);
    }
}


function reproducirWelcome(sol, res) {
    fs.readFile(__dirname + '/index.html', function(err, data){
        if (err) {
            res.writeHead(500, {"Content-Type": "text/html"});
            res.end("<html><head><title>Pagina Incorrecta</title></head><body><h1>Lo sentimos, hubo un error.</h1></body></html>")
        }
        else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        }
    })
}

function reproducirThankYou(sol, res) {

    var solicitudData = "";
    var miHTML = "<html><head><title>Saludos, Noder!</title></head><body><h1>Lo sentimos, no recibimos ninguna data.</h1></body></html>";

    sol.on("data", function(data) {
        solicitudData += data;
        console.log("Usted ha entrado datos al servidor: \n" + solicitudData);

        miHTML = 
                "<html><head><title>Saludos, Noder!</title></head><body>" +
                "<h1>Muchas gracias por su data: </h1><code>" +
                solicitudData +
                "</code>" +
                "</body></html>";
    });

    sol.on("end", function() {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(miHTML);
    })
}

servidor.listen(PORT, function() {
    console.log("El servidor esta escuchando en: http://localhost:" + PORT);
});