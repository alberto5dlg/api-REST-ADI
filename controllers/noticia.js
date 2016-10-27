var Noticia = require('../models/noticia');

//METODO GET
exports.list = function(pet, res) {
	Noticia.find(function(err, noticia) {
		res.json(noticia);
	});
};

//METODO POST 
exports.create = function(pet, res) {
	var noticia = new Noticia(pet.body);

	noticia.save(function(err, newNoticia) {
		if(err){
			res.json(400, err.noticia);
		} 
		else {
			res.json(newNoticia);
		}
	});
}