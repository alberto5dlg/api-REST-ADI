var index = require('../index');
var supertest = require("supertest");


describe('Prueba de los metodos de Usuarios', function() {

	it('/usuarios devuelve el contenido adecuado', function (done) {
		supertest(index)
			.get('/api/usuarios')
			.expect(200,done);
	});

	it('Crear un nuevo usuario', function(done) {
		supertest(index)
			.post('/api/usuarios/nuevo')
			.set('Content-Type', 'application/json')
    		.send({"nombre":"Alberto",
    				"apellidos":"De Lucas Gomez",
    				"login":"alberto5dlg",
    				"email":"adlg@alu.ua.es"})
    		.expect(201,done);
	});

	it('Buscar un usuario por Login', function(done) {
		supertest(index)
			.get('/api/usuarios/alberto5dlg')
			.expect(200,done);
	});

	it('Buscar usuario no existente por Login', function(done){
		supertest(index)
			.get('/api/usuarios/aecjhbe')
			.expect(404,done);
	});

	it('Crear un Usuario de manera erronea', function(done) {
		supertest(index)
			.post('/api/usuarios/nuevo')
			.set('Content-Type', 'application/json')
    		.send({"nombre":"Alberto",
    				"apellidos":"De Lucas Gomez",
    				"login":"alberto5dlg"})
    		.expect(400,done);
	});

	it('Actualizamos un usuario con credenciales correctas', function(done) {
		supertest(index)
			.put('/api/usuarios/alberto5dlg')
			.auth('admin', '123456')
			.set('Content-Type', 'application/json')
    		.send({"nombre":"Alberto",
    				"apellidos":"Gomez",
    				"login":"alberto5gomez",
    				"email":"alberto5dlg@gmail.com"})
			.expect(204, done);
	});

	it('Actualizamos un usuario, sin credeciales', function(done) {
		supertest(index)
			.put('/api/usuarios/alberto5dlg')
			.set('Content-Type', 'application/json')
    		.send({"nombre":"Alberto",
    				"apellidos":"Gomez",
    				"login":"alberto5gomez",
    				"email":"alberto5dlg@gmail.com"})
			.expect(401, done);
	});
	
});