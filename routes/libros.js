var express = require('express');
var router = express.Router();
var librosController = express = require("../controllers/librosController");

//creación de libros
router.get("/crear", librosController.crear);

module.exports = router;
