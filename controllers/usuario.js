var Usuario = require('../models/usuario');


//METODO GET devuelve todos los usuarios
exports.list = function(pet, res) {
	Usuario.find(function(err, usuario) {
		res.json(usuario);
	});
};


//METODO GET buscar un usuario por login 
exports.findByLogin = function(pet, res) {
	Usuario.findOne({login: pet.params.login}, function(err, usuario){
		if(err) {
			return res.send(500, err.message);
		}
		res.json(usuario);
	})
}

//METODO POST crear un nuevo usuario 
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


//METODO DELETE borra un usuario 
exports.deleteByLogin = function (pet, res) {
	Usuario.findOne({login: pet.params.login}, function(err, usuario){
		if(usuario == undefined){
			res.status(400);
			res.send("Usuario no existente.");	
		} else {
			usuario.remove(function(err){
				if (!err) {
					res.end();
				} else {
					resp.status(500);
					console.log("No se ha podido borrar: "+err);
				}
			});
		}
	});
}





