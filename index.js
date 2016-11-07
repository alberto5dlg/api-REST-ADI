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
app.get('/',function(pet, res) { 
	res.send("Api REST para ADI: ");
});

//Conexion
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Aplicacion Node.js ejecutandose en el puerto: '+ app.get('port'));
});

//Conectamos con la Base de Datos
db.start();







