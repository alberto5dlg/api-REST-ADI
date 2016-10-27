var express = require('express');
var router = express.Router();
var controller = require('../controllers/noticia');

router.get('/', controller.list);
router.post('/nuevo', controller.create);


module.exports = router;