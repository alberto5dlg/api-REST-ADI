var Usuario = require('../models/usuario');
var auth = require('../utils/auth');
var express = require('express');
var app = express();
var utils = require('../utils/utils');

//METODO GET buscar un usuario por login 
exports.findByLogin = function(pet, res) {
	Usuario.findOne({login: pet.params.login}, function(err, usuario){
		if(usuario == undefined){
			res.status(404);
			res.send("Usuario no existente.");
		} else  {
			var links = utils.getComentUsers(usuario,pet);
			var response = {
				usuario,
				links					
			}
			res.status(200);
			res.json(response);
		}	
	})
}

//METODO POST crear un nuevo usuario 
exports.create = function(pet, res) {
	var usuario = new Usuario(pet.body);

	if(usuario.login == undefined || usuario.nombre == undefined 
	|| usuario.apellidos == undefined || usuario.email == undefined){
		res.status(400);
		res.send("Faltan campos para poder crear el usuario.");
	} 
	else {	
		usuario.save(function(err, newUsuario) {
			if(err){
				res.status(400);
				res.send("No se puede crear el usuario, algun campo es incorrecto");
			} else {
				res.status(201);
	        	res.header('Location','http://'+utils.getHostname(pet)+'/api/usuarios/'+ newUsuario.login);
				res.send(newUsuario);
			}
		});
	}
}


//METODO DELETE borra un usuario 
exports.deleteByLogin = function (pet, res) {
	if(auth.isAdmin(pet, res)){
		Usuario.findOne({login: pet.params.login}, function(err, usuario){
			if(usuario == undefined){
				res.status(404);
				res.send("Usuario no existente.");	
			} else {
				usuario.remove(function(err){
					if (!err) {
						res.status(204);
						res.end();
					} else {
						res.status(500);
						console.log("No se ha podido borrar: "+err);
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

//METODO PUT actualiza los datos de un usuario
exports.updateByLogin = function (pet,res) {
	if(auth.isAdmin(pet, res)){
		var newUsuario = new Usuario(pet.body);

		if(newUsuario.login == undefined || newUsuario.nombre == undefined 
		|| newUsuario.apellidos == undefined || newUsuario.email == undefined){
			res.status(400);
			res.send("Faltan campos para poder editar el usuario.");
		} 
		else {
			Usuario.findOne({login: pet.params.login}, function(err, usuario){
				if(usuario == undefined){
					res.status(404);
					res.send("El usuario a modificar no existe.");
				} else {
					usuario.nombre = newUsuario.nombre;
					usuario.apellidos = newUsuario.apellidos;
					usuario.email = newUsuario.email;
					usuario.login = newUsuario.login;
					Usuario.update({_id: usuario._id}, usuario, function(err) {
						if(err) {
							console.log(err);
							res.status(500);
							res.end();
						} else {
							res.status(204);
							res.send(usuario);
							res.end();
						}
					});
				}
			});
		}
	}
	else if(!pet.get('authorization')) { 
		res.status(401);
        res.header('WWW-Authenticate', 'Basic realm="myRealm"');
        res.end();
    } else {
		res.status(403);
		res.send('No tiene permisos para realizar esta accion');
		res.end();
	}
}

//Metodo GET todos los usuarios con paginacion 
exports.listAllUsers = function(pet, res) {
	var lista = Usuario.find().limit(2);

	lista.then(function(usuarios) {
		var response = {
			links: {
				next: 'http://'+utils.getHostname(pet)+'/api/usuarios/pag/1',
			},
			data: usuarios
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
exports.listPageUsers = function(pet, res) {
	var pag = parseInt(pet.params.number);
	var lista = Usuario.find().limit(2).skip(pag*2);

	var sigPag = pag + 1; 
	var antPag = pag - 1; 
	lista.then(function (usuarios) {
		var response = {
			links: {
				self: 'http://'+utils.getHostname(pet)+'/api/usuarios/pag/' + pag,
				first: 'http://'+utils.getHostname(pet)+'/api/usuarios',
				previous : 'http://'+utils.getHostname(pet)+'/api/usuarios/pag/' + antPag,
				next: 'http://'+utils.getHostname(pet)+'/api/usuarios/pag/' + sigPag,
			},
			data: usuarios
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





