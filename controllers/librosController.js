let db = require("../database/models");

let librosController = {
    crear: function (req, res) {
        db.Genero.findAll()
            .then(function(generos) {
                db.Idioma.findAll()
                    .then(function(idiomas) {
                        db.Formato.findAll()
                            .then(function(formatos) {
                                db.Medio.findAll()
                                    .then(function(medios) {
                                        return res.render("creacionLibros", {idiomas, generos, formatos, medios});
                                    })
                            })
                    })
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
            generos_id: req.body.genero,
            idiomas_id: req.body.idioma,
            formatos_id: req.body.formato,
            medios_id: req.body.medio,
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