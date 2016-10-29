var express = require('express');
var router = express.Router();
var controller = require('../controllers/noticia');

router.get('/', controller.list);
router.post('/nuevo', controller.create);
router.get('/:id', controller.findById);


module.exports = router;