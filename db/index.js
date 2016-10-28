var mongoose = require('mongoose');

exports.start = function() {
	mongoose.connect('mongodb://localhost/adi', function(err, res) {
		if(err) {
			console.log('ERROR: En la conexion con la Base de Datos. ' + err);
		}
		else 
			console.log('Conectado a la Base de Datos');
	});
}