var Usuario = require('../models/usuario');

exports.list = function(pet, res) {
	Usuario.find(function(err, usuario) {
		res.json(usuario);
	});
};

exports.create = function(pet, res) {
	var usuario = new Usuario(pet.body);
	usuario.save(function(err, newUsuario) {
		if(err){
			res.json(400, err.usuario);
		} 
		else {
			res.json(newUsuario);
		}
	});
}