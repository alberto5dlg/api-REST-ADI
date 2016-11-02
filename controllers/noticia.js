var Noticia = require('../models/noticia');

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

//METODO GET noticia por ID 
exports.findById = function(pet, res) {
	Noticia.findOne({noticiaID: pet.params.id}, function(err, noticia) {
		if(noticia == undefined){
			res.status(404);
			res.send("Noticia no encontrada");
		}
		else {
			res.status(200);
			res.send(noticia);
		}
	});
}

//METODO DELETE noticia por ID 
exports.deleteById = function(pet, res) {
	Noticia.findOne({noticiaID: pet.params.id}, function(err, noticia){ 
		if(noticia == undefined){
			res.status(204);
			res.send("No existe la noticia que desea Borrar");
		}
		else {
			noticia.remove(function(err) {
				if(!err){
					res.status(204);
					res.end();
				}
				else {
					res.status(500);
					console.log("No se ha podido borrar: "+err);
					res.send();
				}
			});
		}
	});
}

//Metodo GET todas las noticias
exports.listAll = function(pet, res) {
	var lista = Noticia.find().limit(2);

	lista.then(function(noticias) {
		var response = {
			links: {
				next: 'http://localhost:3000/api/noticias/pag/1',
			},
			data: noticias
		};
		res.status(200);
		res.send(response);
	});
	lista.catch(function (err){
		res.status(500);
		res.end();
	});
}

//Metodo GET por paginacion HAL 
exports.listPage = function(pet, res) {
	var pag = parseInt(pet.params.number);
	var indice = pag * 2; 
	var lista = Noticia.find().limit(2).skip(indice);
	var total = Noticia.count();
	console.log(total);

	var sigPag = pag + 1; 
	var antPag = pag - 1; 
	lista.then(function (noticias) {
		var response = {
			links: {
				next: 'http://localhost:3000/api/noticias/pag/' + sigPag,
				previous : 'http://localhost:3000/api/noticias/pag/' + antPag
			},
			data: noticias
		}
		if(pag === 0) {
			response.links.previous = undefined;
		}
		res.status(200);
		res.send(response);
	});
	lista.catch(function(err) {
		res.status(500);
		res.end();
	});
}

//Funcion Auxiliar para calcular la hora
function fechaDeHoy(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
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