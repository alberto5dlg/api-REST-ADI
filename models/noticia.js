var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoticiaSchema = new Schema({
	titular: 			{type: String},
	cuerpoNoticia: 		{type: String},
	autor: 				{type: String}
});

module.exports = mongoose.model('Noticia', NoticiaSchema);