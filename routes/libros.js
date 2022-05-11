var express = require('express');
var router = express.Router();
var librosController = express = require("../controllers/librosController");

//creación de libros
router.get("/crear", librosController.crear);
router.post("/crear", librosController.guardar);

//lectura de libros
router.get("/", librosController.listar);

//Detalle de libros
router.get("/:id", librosController.detalle);

//Actualización de libros
router.get("/editar/:id", librosController.editar);
router.post("/editar/:id", librosController.actualizar);


module.exports = router;

