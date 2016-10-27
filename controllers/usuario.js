var Usuario = require('../models/usuario');

exports.list = function(pet, res) {
	Usuario.find(function(err, usuario) {
		res.json(usuario);
	});
};

exports.findByLogin = function(pet, res) {
	Usuario.findOne({login: pet.params.login}, function(err, usuario){
		if(err) {
			return res.send(500, err.message);
		}
		res.json(usuario);
	})
}

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