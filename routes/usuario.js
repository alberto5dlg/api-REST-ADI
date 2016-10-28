var express = require('express');
var router = express.Router();
var controller = require('../controllers/usuario');

router.get('/', controller.list);
router.post('/nuevo', controller.create);
router.get('/:login', controller.findByLogin);
router.delete('/:login', controller.deleteByLogin);

module.exports = router;