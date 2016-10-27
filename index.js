//Creamos las variables para usar las dependencias 
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var router = express.Router();

app.use(bodyParser.json());
app.use(router);

router.get('/',function(req, res) { 
	res.send("Api REST para ADI");
});

app.listen(3000,function() {
	console.log("Servidor Node ejecutandose sobre http://localhost:3000");
})
