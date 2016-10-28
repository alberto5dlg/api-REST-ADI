var express = require('express');
var router = express.Router();
var controller = require('../controllers/usuario');

router.get('/', controller.list); // Lista de Usuarios 
router.post('/nuevo', controller.create); // Añadir un nuevo Usuario 
router.get('/:login', controller.findByLogin); // Usuario por Login 
router.delete('/:login', controller.deleteByLogin); // Borrar un usuario
router.put('/:login', controller.updateByLogin); //Actualiza los datos del usuario 

module.exports = router;