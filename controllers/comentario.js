var Comentario = require('../models/comentario');
var utils = require('../utils/utils');

//Metodo GET comentario por ID 
exports.findById = function(pet, res) {
	Comentario.findOne({comentarioID: pet.params.id}, function(err, comentario) {
		if(comentario == undefined){
			res.status(404);
			res.send("Comentario no encontrado");
		}
		else {
			var response = {
				comentario,
				links: {
					0: {
						rel: 'self',
						href: 'http://'+utils.getHostname(pet)+'/api/comentario/'+comentario.comentarioID,
					},
					1: {
						rel: 'noticias',
						href: 'http://'+utils.getHostname(pet)+'/api/noticias/'+comentario.noticiaID,
					},
					2: {
						rel: 'usuarios',
						href: 'http://'+utils.getHostname(pet)+'/api/usuarios/'+comentario.usuarioLogin,
					}
				}
			}
			res.status(200);
			res.send(response);
		}
	});
}


//Metodo GET todos las comentarios
exports.findAll = function(pet, res) {
	var lista = Comentario.find().limit(2);

	lista.then(function(comentarios) {
		var response = {
			links: {
				next: 'http://'+utils.getHostname(pet)+'/api/comentarios/pag/1',
			},
			data: comentarios
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
	var lista = Comentario.find().limit(2).skip(pag*2);

	var sigPag = pag + 1; 
	var antPag = pag - 1; 
	lista.then(function (comentarios) {
		var response = {
			links: {
				self: 'http://'+utils.getHostname(pet)+'/api/comentarios/pag/' + pag,
				first: 'http://'+utils.getHostname(pet)+'/api/comentarios',
				previous : 'http://'+utils.getHostname(pet)+'/api/comentarios/pag/' + antPag,
				next: 'http://'+utils.getHostname(pet)+'/api/comentarios/pag/' + sigPag,
			},
			data: comentarios
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