var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
	nombre: 		{type: String},
	apellidos: 		{type: String},
	email: 			{type: String},
	login: 			{type: String},
	comentariosID:	[Number]
});

module.exports = mongoose.model('Usuario', UsuarioSchema);