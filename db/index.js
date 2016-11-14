var mongoose = require('mongoose');

exports.start = function() {
	mongoose.connect('mongodb://heroku_apirest:apirestADI@ds153637.mlab.com:53637/heroku_07t93sc8', function(err, res) {
		if(err) {
			console.log('ERROR: En la conexion con la Base de Datos. ' + err);
		}
		else 
			console.log('Conectado a la Base de Datos...');
	});
}