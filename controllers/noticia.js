var Noticia = require('../models/noticia');
var auth = require('../utils/auth');
var utils = require('../utils/utils');

//METODO POST 
exports.create = function(pet, res) {
	if(auth.isAdmin(pet, res)){
		var noticia = new Noticia(pet.body);
		if (noticia.titular == undefined || noticia.cuerpoNoticia == undefined || noticia.autor == undefined) {
			res.status(400);
			res.send("Faltan campos por insertar");
		} 
		else {
			noticia.fecha = utils.fechaDeHoy();
			Noticia.count({}, function(err,count){
				noticia.noticiaID = count;
				noticia.save(function(err, newNoticia) {
					if(err){
						res.status(500);
						res.end();
					} 
					else {
						res.status(201);
						res.header('Location','http://localhost:3000/api/noticias/'+ noticia.noticiaID);
						res.send(newNoticia);
					}
				});
			});
		}
	}
	else if(!pet.get('authorization')) { 
		res.status(401);
        res.header('WWW-Authenticate', 'Basic realm="myRealm"');
        res.end();
    } 
	else { 
		res.status(403);
		res.send('No tiene permisos para realizar esta accion');
		res.end();
	}
}

//METODO GET noticia por ID 
exports.findById = function(pet, res) {
	Noticia.findOne({noticiaID: pet.params.id}, function(err, noticia) {
		if(noticia == undefined){
			res.status(404);
			res.send("Noticia no encontrada");
		}
		else {
			res.status(200);
			res.send(noticia);
		}
	});
}

//METODO DELETE noticia por ID 
exports.deleteById = function(pet, res) {
	if(auth.isAdmin(pet, res)){
		Noticia.findOne({noticiaID: pet.params.id}, function(err, noticia){ 
			if(noticia == undefined){
				res.status(404);
				res.send("No existe la noticia que desea Borrar");
			}
			else {
				noticia.remove(function(err) {
					if(!err){
						res.status(204);
						res.end();
					}
					else {
						res.status(500);
						console.log("No se ha podido borrar: "+err);
						res.send();
					}
				});
			}
		});
	}
	else if(!pet.get('authorization')) { 
		res.status(401);
        res.header('WWW-Authenticate', 'Basic realm="myRealm"');
        res.end();
    } 
	else {
		res.status(403);
		res.send('No tiene permisos para realizar esta accion');
		res.end();
	}
}

//Metodo GET todas las noticias
exports.listAll = function(pet, res) {
	var lista = Noticia.find().limit(2);

	lista.then(function(noticias) {
		var response = {
			links: {
				next: 'http://localhost:3000/api/noticias/pag/1',
			},
			data: noticias
		};
		res.status(200);
		res.send(response);
	});
	lista.catch(function (err){
		res.status(500);
		res.end();
	});
}

//Metodo GET por paginacion HAL 
exports.listPage = function(pet, res) {
	var pag = parseInt(pet.params.number);
	var lista = Noticia.find().limit(2).skip(pag*2);

	var sigPag = pag + 1; 
	var antPag = pag - 1; 
	lista.then(function (noticias) {
		var response = {
			links: {
				self: 'http://localhost:3000/api/noticias/pag/' + pag,
				first: 'http://localhost:3000/api/noticias',
				previous : 'http://localhost:3000/api/noticias/pag/' + antPag,
				next: 'http://localhost:3000/api/noticias/pag/' + sigPag,
			},
			data: noticias
		}
		if(pag === 0) {
			response.links.previous = undefined;
		}
		res.status(200);
		res.send(response);
	});
	lista.catch(function(err) {
		res.status(500);
		res.end();
	});
}