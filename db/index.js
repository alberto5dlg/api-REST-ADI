var mongoose = require('mongoose');

exports.start = function() {
	mongoose.connect('mongodb://api-rest-adi-1871:Fe9(t4)L@db-api-rest-adi-1871.nodechef.com:5377/api-rest-adi', function(err, res) {
		if(err) {
			console.log('ERROR: En la conexion con la Base de Datos. ' + err);
		}
		else 
			console.log('Conectado a la Base de Datos...');
	});
}