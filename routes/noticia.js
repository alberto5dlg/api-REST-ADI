var express = require('express');
var router = express.Router();
var controller = require('../controllers/noticia');

router.get('/', controller.list); //Coleccion de todas las noticias 
router.post('/nuevo', controller.create); //Añadir una nueva noticia
router.get('/:id', controller.findById); //Buscar una noticia por su id 
router.delete('/:id', controller.deleteById); // borrar una noticia por su id 

module.exports = router;