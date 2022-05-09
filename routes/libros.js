var express = require('express');
var router = express.Router();
var librosController = express = require("../controllers/librosController");

//creación de libros
router.get("/crear", librosController.crear);
router.post("/crear", librosController.guardar);

//lectura de libros
router.get("/", librosController.listar);

module.exports = router;
