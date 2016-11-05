var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComentarioSchema = new Schema({
	comentarioID: 		{type: Number},
	texto: 				{type: String},
	fecha: 				{type: String},
	hora: 				{type: String},
	noticiaID: 			{type: Number},
	usuarioLogin: 		{type: String}
});

module.exports = mongoose.model('Comentario', ComentarioSchema);