var express = require('express');
var router = express.Router();
var controller = require('../controllers/usuario');

router.get('/', controller.listAllUsers); // Lista de Usuarios 
router.get('/pag/:number', controller.listPageUsers); //Lista de una pagina de la coleccion de Usuarios HAL 
router.post('/nuevo', controller.create); // Añadir un nuevo Usuario 
router.get('/:login', controller.findByLogin); // Usuario por Login 
router.delete('/:login', controller.deleteByLogin); // Borrar un usuario
router.put('/:login', controller.updateByLogin); //Actualiza los datos del usuario 

module.exports = router;