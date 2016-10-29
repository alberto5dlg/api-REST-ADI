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
	if (noticia.titular == undefined || noticia.cuerpoNoticia == undefined || noticia.autor == undefined) {
		res.status(400);
		res.send("Faltan campos por insertar");
	} 
	else {
		noticia.fecha = fechaDeHoy();
		Noticia.count({}, function(err,count){
			noticia.noticiaID = count;
			noticia.save(function(err, newNoticia) {
				if(err){
					res.status(500);
					res.end();
				} 
				else {
					res.status(201);
					res.header('Location','http://localhost:3000/api/noticias/'+ noticia.noticiaID);
					res.send(newNoticia);
				}
			});
		});
	}
}

function fechaDeHoy(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd;
    } 

    if(mm<10) {
        mm='0'+mm;
    } 

    today = dd+'/'+mm+'/'+yyyy;
    return today; 
}