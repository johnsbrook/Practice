var express = require('express');
var camino = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

var personajes = [
  {
    rutaNombre: "yoda",
    nombre: "Yoda",
    rol: "Jedi Master",
    edad: 900,
    forcePoints: 2000
  },
  {
    rutaNombre: 'darthmaul',
    nombre: 'Darth Maul',
    rol: 'Sith Lord',
    edad: 200,
    forcePoints: 1200
  },
  {
    rutaNombre: 'obiwankenobi',
    nombre: 'Obi Wan Kenobi',
    rol: 'Jedi Master',
    edad: 55,
    forcePoints: 1350
  }
];

app.get('/', function(sol, res){
  res.sendFile(camino.join(__dirname, 'view.html'));
});