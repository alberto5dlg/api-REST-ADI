var index = require('../index');
var supertest = require("supertest");


describe('Prueba de los metodos de noticias', function() {

	it('/noticias devuelve el contenido adecuado', function (done) {
		supertest(index)
			.get('/api/noticias')
			.expect(200,done);
	});

	it('Borraremos una noticia con credenciales correctos', function(done) {
		supertest(index)
			.delete('/api/noticias/2')
			.auth('admin', '123456')
			.expect(204, done);
	});

	it('Borraremos una noticia con credenciales incorrectos', function(done) {
		supertest(index)
			.delete('/api/noticias/2')
			.auth('alberto', '123456')
			.expect(403, done);
	});

	it('Buscamos una noticia por ID', function(done) {
		supertest(index)
			.get('/api/noticias/0')
			.expect(200, done);
	});

	it('Buscamos una noticia por ID que no existe', function(done) {
		supertest(index)
			.get('/api/noticias/34853')
			.expect(404, done);
	});

	it('Crear una Noticia', function(done) {
		supertest(index)
			.post('/api/noticias/nuevo')
			.auth('admin', '123456')
			.set('Content-Type', 'application/json')
    		.send({"titular":"Noticias Test",
    				"cuerpoNoticia":"Prueba de nueva noticia, Prueba de nueva noticia, Prueba de nueva noticia",
    				"autor":"Supertest"})
    		.expect(201, done);
	});

});