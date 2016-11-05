var express = require('express');
var router = express.Router();
var controller = require('../controllers/noticia');

router.get('/', controller.listAll); //Coleccion de todas las noticias  con paginacion se devuelve la primera pagina 
router.get('/pag/:number', controller.listPage); //Coleccion de todas las noticias en paginacion se devuelve la pag indicada
router.post('/nuevo', controller.create); //Añadir una nueva noticia
router.get('/:id', controller.findById); //Buscar una noticia por su id 
router.delete('/:id', controller.deleteById); // borrar una noticia por su id 
router.post('/:id/comentar/:login', controller.commentNews); // Publicar un comentario en una noticia 


module.exports = router;