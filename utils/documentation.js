
/**
	 * @api {get} /comentarios/pag/:number Obtiene la información de todos los comentarios con paginacion HAL en la pagina indicada
	 * @apiVersion 1.0.0
	 * @apiName getComentsByPag
	 * @apiGroup Comentarios
	 *
	 *
	 * @apiSuccess {Number} 200  Código 200 se han devuelto los comentarios de la pagina correctamente.
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
				links: {
					self: "http://thawing-fjord-82104.herokuapp.com/api/comentarios/pag/0",
					first: "http://thawing-fjord-82104.herokuapp.com/api/comentarios",
					next: "http://thawing-fjord-82104.herokuapp.com/api/comentarios/pag/1"
				},
				data: [
					{
						_id: "581f1c15c409dc440d15ed5e",
						comentarioID: 0,
						usuarioLogin: "alberto5dlg",
						noticiaID: 0,
						hora: "13:3:33",
						fecha: "06/11/2016",
						texto: "Me parece una muy buena idea la de Nintendo con esta consola",
						__v: 0
					},
					{
						_id: "581f28e5b3ddde46aca6dfbf",
						comentarioID: 1,
						usuarioLogin: "taniapp",
						noticiaID: 0,
						hora: "13:58:13",
						fecha: "06/11/2016",
						texto: "A mi me parece mala idea ",
						__v: 0
					}
				]
			}
	 *		
	 *
	 * @apiError Error Interno Error interno del Servidor.
	 *
	 * @apiErrorExample Error-Response:
	 *     HTTP/1.1 500 Internal Server Error 
	 *     {
	 *       "The server encountered an internal error. Please retry the request."
	 *     }
	 */

	 
/**
	 * @api {get} /comentarios Obtiene la información de todos los comentarios con paginacion HAL
	 * @apiVersion 1.0.0
	 * @apiName getComents
	 * @apiGroup Comentarios
	 *
	 *
	 * @apiSuccess {Number} 200  Código 200 se han devuelto los comentarios correctamente.
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
				links: {
					next: "http://thawing-fjord-82104.herokuapp.com/api/comentarios/pag/1"
				},
				data: [
					{
						_id: "581f1c15c409dc440d15ed5e",
						comentarioID: 0,
						usuarioLogin: "alberto5dlg",
						noticiaID: 0,
						hora: "13:3:33",
						fecha: "06/11/2016",
						texto: "Me parece una muy buena idea la de Nintendo con esta consola",
						__v: 0
					},
					{
						_id: "581f28e5b3ddde46aca6dfbf",
						comentarioID: 1,
						usuarioLogin: "taniapp",
						noticiaID: 0,
						hora: "13:58:13",
						fecha: "06/11/2016",
						texto: "A mi me parece mala idea ",
						__v: 0
					}
				]
			}
	 *		
	 *
	 * @apiError Error Interno Error interno del Servidor.
	 *
	 * @apiErrorExample Error-Response:
	 *     HTTP/1.1 500 Internal Server Error 
	 *     {
	 *       "The server encountered an internal error. Please retry the request."
	 *     }
	 */

/**
	 * @api {get} /comentarios/:id Obtiene la información del comentario
	 * @apiVersion 1.0.0
	 * @apiName getComent
	 * @apiGroup Comentarios
	 *
	 *@apiParam {Number} id Comentario id por el que se identifican.
	 *
	 * @apiSuccess {Number} 200  Código 200 se han devuelto los comentarios correctamente.
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
				
				comentario: {
					_id: "581f1c15c409dc440d15ed5e",
					comentarioID: 0,
					usuarioLogin: "alberto5dlg",
					noticiaID: 0,
					hora: "13:3:33",
					fecha: "06/11/2016",
					texto: "Me parece una muy buena idea la de Nintendo con esta consola",
					__v: 0
				},
				links: {
					0: {
						rel: "self",
						href: "http://thawing-fjord-82104.herokuapp.com/api/comentario/0"
					},
					1: {
						rel: "noticias",
						href: "http://thawing-fjord-82104.herokuapp.com/api/noticias/0"
					},
					2: {
						rel: "usuarios",
						href: "http://thawing-fjord-82104.herokuapp.com/api/usuarios/alberto5dlg"
					}
				}
			}
	 *		
	 *
	 * @apiError Error Interno Error interno del Servidor.
	 *
	 * @apiErrorExample Error-Response:
	 *     HTTP/1.1 404 Not Found
	 *     {
	 *       "Comentario no encontrado"
	 *     }
	 */

/**
	 * @api {get} /usuarios/:login Obtiene la información del usuario y sus comentarios relacionados
	 * @apiVersion 1.0.0
	 * @apiName getUser
	 * @apiGroup Usuarios
	 *
	 *@apiParam {String} login Login por el que se identifica el usuario.
	 *
	 * @apiSuccess {Number} 200  Código 200 se ha devuelto el usuario correctamente.
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {

				usuario: {
					_id: "581e712393fa60000304b4c0",
					nombre: "Alberto",
					apellidos: "De Lucas",
					email: "alberto5dlg@gmail.com",
					login: "alberto5dlg",
					__v: 0,
					comentariosID: [
						0,
						2,
						3,
						4,
						5
					]
				},
				links: {
					0: {
						rel: "self",
						href: "http://thawing-fjord-82104.herokuapp.com/api/usuario/alberto5dlg"
					},
					1: {
						rel: "Comentario",
						href: "http://thawing-fjord-82104.herokuapp.com/api/comentarios/0"
					},
					2: {
						rel: "Comentario",
						href: "http://thawing-fjord-82104.herokuapp.com/api/comentarios/2"
					},
					3: {
						rel: "Comentario",
						href: "http://thawing-fjord-82104.herokuapp.com/api/comentarios/3"
					},
					4: {
						rel: "Comentario",
						href: "http://thawing-fjord-82104.herokuapp.com/api/comentarios/4"
					},
					5: {
						rel: "Comentario",
						href: "http://thawing-fjord-82104.herokuapp.com/api/comentarios/5"
					}
				}
			}
	 *		
	 *
	 * @apiError Not Found User Usuario no encontrado.
	 *
	 * @apiErrorExample Error-Response:
	 *     HTTP/1.1 404 Not Found
	 *     {
	 *       "Usuario no encontrado"
	 *     }
	 */

	 /**
	 * @api {get} /noticias/:id Obtiene la información de la noticia y los comentarios que contiene
	 * @apiVersion 1.0.0
	 * @apiName getNews
	 * @apiGroup Noticias
	 *
	 *@apiParam {Number} id ID por el que se identifica una noticia.
	 *
	 * @apiSuccess {Number} 200  Código 200 se ha devuelto la noticia correctamente.
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
				{
					_id: "581f18f6c409dc440d15ed5c",
					noticiaID: 1,
					fecha: "06/11/2016",
					titular: "El Barcelona jugara esta semana contra el Sevilla",
					cuerpoNoticia: "El FC Barcelona se jugara contra el Sevilla esta semana un partido muy importante para sus aspiraciones en La Liga. El barcelona viene de perder su partido de Champions ante el Manchester City de Guardiola, veremos si ese partido les pasa factura este domingo",
					autor: "Antonio Delfin",
					__v: 0,
					comentariosID: [
						2,
						4
					]
				},
				links: {
					0: {
						rel: "self",
						href: "http://thawing-fjord-82104.herokuapp.com/api/noticia/1"
					},
					1: {
						rel: "Comentario",
						href: "http://thawing-fjord-82104.herokuapp.com/api/comentarios/2"
					},
					2: {
						rel: "Comentario",
						href: "http://thawing-fjord-82104.herokuapp.com/api/comentarios/4"
					}
				}
			}
	 *		
	 *
	 * @apiError Not Found News Noticia no encontrado.
	 *
	 * @apiErrorExample Error-Response:
	 *     HTTP/1.1 404 Not Found
	 *     {
	 *       "Noticia no encontrado"
	 *     }
	 */

	  /**
	 * @api {get} /noticias Obtiene la información de todas las noticias con paginacion
	 * @apiVersion 1.0.0
	 * @apiName getNewsAll
	 * @apiGroup Noticias
	 *
	 *
	 * @apiSuccess {Number} 200  Código 200 se han devuelto las noticias correctamente.
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
				
				links: {
					next: "http://thawing-fjord-82104.herokuapp.com/api/noticias/pag/1"
				},
				data: [
					{
						_id: "581f187dc409dc440d15ed5b",
						noticiaID: 0,
						fecha: "06/11/2016",
						titular: "Nintendo presenta NX",
						cuerpoNoticia: "Nintendo ha presentado su nueva consola conocida Nintendo Switch, anteriormente conocida como NX, la novedad de esta consola es que es una consola hibrida tanto portatil como de sobremesa",
						autor: "Carlos Perez",
						__v: 0,
						comentariosID: [
							0,
							1,
							3
						]
					},
					{
						_id: "581f18f6c409dc440d15ed5c",
						noticiaID: 1,
						fecha: "06/11/2016",
						titular: "El Barcelona jugara esta semana contra el Sevilla",
						cuerpoNoticia: "El FC Barcelona se jugara contra el Sevilla esta semana un partido muy importante para sus aspiraciones en La Liga. El barcelona viene de perder su partido de Champions ante el Manchester City de Guardiola, veremos si ese partido les pasa factura este domingo",
						autor: "Antonio Delfin",
						__v: 0,
						comentariosID: [
							2,
							4
						]
					}
				]
			}
	 *		
	 *
	 * @apiError Error Interno Error interno del Servidor.
	 *
	 * @apiErrorExample Error-Response:
	 *     HTTP/1.1 500 Internal Server Error 
	 *     {
	 *       "The server encountered an internal error. Please retry the request."
	 *     }
	 */

	 /**
	 * @api {get} /usuarios Obtiene la información de todos los usuarios con paginacion
	 * @apiVersion 1.0.0
	 * @apiName getUsersAll
	 * @apiGroup Usuarios
	 *
	 *
	 * @apiSuccess {Number} 200  Código 200 se han devuelto los usuarios correctamente.
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {	
				links: {
					next: "http://thawing-fjord-82104.herokuapp.com/api/usuarios/pag/1"
				},
				data: [
					{
						_id: "581e712393fa60000304b4c0",
						nombre: "Alberto",
						apellidos: "De Lucas",
						email: "alberto5dlg@gmail.com",
						login: "alberto5dlg",
						__v: 0,
						comentariosID: [
							0,
							2,
							3,
							4,
							5
						]
					},
					{
						_id: "581e715093fa60000304b4c1",
						nombre: "Tania",
						apellidos: "Peces",
						email: "tania@gmail.com",
						login: "taniapp",
						__v: 0,
						comentariosID: [
							1
						]
					}
				]
			}
	 *		
	 *
	 * @apiError Error Interno Error interno del Servidor.
	 *
	 * @apiErrorExample Error-Response:
	 *     HTTP/1.1 500 Internal Server Error 
	 *     {
	 *       "The server encountered an internal error. Please retry the request."
	 *     }
	 */

	/**
	 * @api {delete} /usuarios/:login Elimina un usuario por su login
	 * @apiVersion 1.0.0
	 * @apiName DeleteUser
	 * @apiGroup Usuarios
	 *
	 * @apiParam {String} login Login por el que se identifica a un Usuario 
	 *
	 * @apiSuccess {Number} 204  Código 204 se ha borrado correctamente.
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 204 OK
	 *     {
	 *     }
	 *
	 * @apiError UserNotFound El login no es correcto no se puede borrar.
	 * @apiError Not Authentificated No te has autentificado para poder borrar.
	 *
	 * @apiErrorExample Error-Response:
	 *     HTTP/1.1 401 Unauthorizated
	 *     {
	 *       
	 *     }
	 * @apiErrorExample Error-Response:
	 *     HTTP/1.1 404 Unauthorizated
	 *     {
	 *       "Usuario no encontrado"
	 *     }
	 */

	 /**
	 * @api {delete} /noticias/:id Elimina una noticia por su ID
	 * @apiVersion 1.0.0
	 * @apiName DeleteNews
	 * @apiGroup Noticias
	 *
	 * @apiParam {String} id ID por el que se identifica la noticia 
	 *
	 * @apiSuccess {Number} 204  Código 204 se ha borrado correctamente.
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 204 OK
	 *     {
	 *     }
	 *
	 * @apiError NewsNotFound El id no es correcto no se puede borrar.
	 * @apiError Not Authentificated No te has autentificado para poder borrar.
	 *
	 * @apiErrorExample Error-Response:
	 *     HTTP/1.1 401 Unauthorizated
	 *     {
	 *       
	 *     }
	 * @apiErrorExample Error-Response:
	 *     HTTP/1.1 404 Unauthorizated
	 *     {
	 *       "Noticia no encontrada"
	 *     }
	 */

	 /**
	 * @api {post} /usuarios/nuevo Crea un usuario
	 * @apiVersion 1.0.0
	 * @apiName PostUser
	 * @apiGroup Usuarios
	 *
	 * @apiSuccess {Number} 201  Código 201 se ha creado correctamente.
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 201 Created
	 *     {
	 	{
		  "__v": 0,
		  "nombre": "Fernando",
		  "apellidos": "Sanchez",
		  "login": "ferSan",
		  "email": "ferSan@gmail.com",
		  "_id": "5821075cecdad95a25e8e547",
		  "comentariosID": []
		}
	 *        
	 *     }
	 *
	 * @apiError UserBadResponse El usuario no ha podido crearse
	 *
	 * @apiError BaD-Response:
	 *     HTTP/1.1 400 Bad Response
	 *     {
	 *       "El usuario no ha podido crearse, falta algun campo del formulario" 
	 *     }
	 */

	 /**
	 * @api {post} /noticias/nuevo Crea una noticia
	 * @apiVersion 1.0.0
	 * @apiName postNews
	 * @apiGroup Noticias
	 *
	 * @apiSuccess {Number} 201  Código 201 se ha creado correctamente.
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 201 Created
	 *     {
	 	{
		  "__v": 0,
		  "noticiaID": 7,
		  "fecha": "08/11/2016",
		  "titular": "El Barcelona jugara esta semana contra el Sevilla",
		  "cuerpoNoticia": "El FC Barcelona se jugara contra el Sevilla esta semana un partido muy importante para sus aspiraciones en La Liga. El barcelona viene de perder su partido de Champions ante el Manchester City de Guardiola, veremos si ese partido les pasa factura este domingo",
		  "autor": "Antonio Delfin",
		  "_id": "582107bd66e58b5a4d17186f",
		  "comentariosID": []
		}
	 *        
	 *     }
	 *
	 * @apiError UserBadResponse La noticia no ha podido crearse
	 *
	 * @apiError BaD-Response:
	 *     HTTP/1.1 400 Bad Response
	 *     {
	 *       "La noticia no ha podido crearse, falta algun campo del formulario" 
	 *     }
	 */

	 /**
	 * @api {post} /noticias/:id/comentar/:login Añade un comentario de un usuario en la noticia
	 * @apiVersion 1.0.0
	 * @apiName postComentNews
	 * @apiGroup Comentarios
	 *
	 * @apiSuccess {Number} 201  Código 201 se ha creado correctamente.
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 201 Created
	 *     {
	 	{
		  {
			  "__v": 0,
			  "comentarioID": 7,
			  "usuarioLogin": "taniapp",
			  "noticiaID": 1,
			  "hora": "0:2:57",
			  "fecha": "08/11/2016",
			  "texto": "el barcelona seguro que gana el partido. ",
			  "_id": "5821082159d17f5a5f12a293"
		}
	 *        
	 *     }
	 *
	 * @apiError UserBadResponse El comentario no ha podido crearse
	 *
	 * @apiError BaD-Response:
	 *     HTTP/1.1 400 Bad Response
	 *     {
	 *       "El comentario no ha podido crearse, falta algun campo del formulario" 
	 *     }
	 *@apiError Forbidden:
	 *     HTTP/1.1 403 Forbidden
	 *     {
	 *       "Usuario no existente no es posible publicar el comentario" 
	 *     }
	 *@apiError Forbidden:
	 *     HTTP/1.1 403 Forbidden
	 *     {
	 *       "La noticia no existe, no se puede publicar el comentario" 
	 *     }
	 */

/**
	 * @api {put} /usuarios/:login Actualiza la información de un usuario
	 * @apiVersion 1.0.0
	 * @apiName PutUser
	 * @apiGroup Usuarios
	 *
	 * @apiParam {Number} login Login por el que se identifica al usuario.
	 *
	 * @apiSuccess {Number} 204  Código 204 se ha modificado el usuario pero no se devuelve nada.
	 * 
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 204 No Content
	 *     {
	 *       
	 *     }
	 *
	 * @apiError UserNotFound El login no es correcto.
	 *
	 * @apiErrorExample Error-Response:
	 *     HTTP/1.1 404 Not Found
	 *     {
	 *       "El login no es correcto no se ha podido encontrar el usuario"
	 *     }
	 */



