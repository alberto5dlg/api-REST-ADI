var express = require("express");
var bodyParser = require("body-parser");
var db = require('./db');
var app = express();
app.use(bodyParser.json());

var usuario = require('./routes/usuario');
var noticia = require('./routes/noticia');

app.use('/api/usuarios', usuario);
app.use('/api/noticias', noticia)

app.get('/',function(req, res) { 
	res.send("Api REST para ADI");
});

app.listen(3000,function() {
	console.log("Servidor Node ejecutandose sobre http://localhost:3000");
})

db.start();
module.exports = app;
