var Comentario = require('../models/comentario');

//Metodo GET comentario por ID 
exports.findById = function(pet, res) {
	Comentario.findOne({comentarioID: pet.params.id}, function(err, comentario) {
		if(comentario == undefined){
			res.status(404);
			res.send("Comentario no encontrado");
		}
		else {
			res.status(200);
			res.send(comentario);
		}
	});
}

//Metodo GET todos las comentarios
exports.findAll = function(pet, res) {
	var lista = Comentario.find().limit(2);

	lista.then(function(comentarios) {
		var response = {
			links: {
				next: 'http://localhost:3000/api/comentarios/pag/1',
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
				self: 'http://localhost:3000/api/comentarios/pag/' + pag,
				first: 'http://localhost:3000/api/comentarios',
				previous : 'http://localhost:3000/api/comentarios/pag/' + antPag,
				next: 'http://localhost:3000/api/comentarios/pag/' + sigPag,
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