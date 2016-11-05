var express = require('express');
var router = express.Router();
var controller = require('../controllers/comentario');

router.get('/:id', controller.findById); //Comentario por id 
router.get('/', controller.findAll); //Obtenemos todos los comentarios
router.get('/pag/:number', controller.listPage); //Obtenemos la pagina con comentarios

module.exports = router;