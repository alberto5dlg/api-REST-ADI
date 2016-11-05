var express = require("express");
var bodyParser = require("body-parser");
var db = require('./db');
var app = express();
app.use(bodyParser.json());
module.exports = app;

//Declaracion de variables segun la ruta
var usuario = require('./routes/usuario');
var noticia = require('./routes/noticia');
var comentario = require('./routes/comentario');

//Rutas de los metodos, segun clase
app.use('/api/comentarios', comentario);
app.use('/api/usuarios', usuario);
app.use('/api/noticias', noticia);


//Ruta generica del Server
app.get('/',function(req, res) { 
	res.send("Api REST para ADI");
});

//Conectamos con la Base de Datos
db.start();

//Abrimo el puerto de Escucha para el servidor Node
app.listen(3000,function() {
	console.log("Servidor Node ejecutandose sobre http://localhost:3000");
})