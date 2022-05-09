let db = require("../database/models");

let librosController = {
    crear: function (req, res) {
        db.Genero.findAll()
            .then(function(generos) {
                return res.render("creacionLibros", {generos:generos});
            })
    },
    guardar: function(req, res) {
        db.Libro.create({
            titulo: req.body.titulo,
            editorial: req.body.editorial,
            precio_unitario: req.body.preciounitario,
            descuento: req.body.descuento,
            bestSeller: req.body.bestseller,
            resenia: req.body.resenia,
            paginas: req.body.paginas,
            peso: req.body.peso,
            edicion: req.body.edicion,
            isbn: req.body.isbn,
            cantidad: req.body.cantidad,
            imagen: req.body.imagen,
            generos_id: req.body.genero
        });

        res.redirect("/libros");
    },
    listar: function(req, res) {
        db.Libro.findAll()
            .then(function(libros){
                res.render("listadoLibros", {libros:libros})
            })
    }

}


module.exports = librosController;