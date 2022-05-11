const res = require("express/lib/response");
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
            autor:req.body.autor,
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
    },
    detalle: function(req, res) {
        // console.log(req.params.id);
        db.Libro.findByPk(req.params.id, {
            include: [{association: "genero"}, {association: "formato"},
                      {association: "idioma"}, {association: "medio"}]
        })
            .then(function(libro) {
                res.render("detalleLibro", {libro});
            })
    
    },
    editar: function(req, res) {
        let pedidoLibro = db.Libro.findByPk(req.params.id);
        let pedidoGenero = db.Genero.findAll();
        let pedidoIdioma = db.Idioma.findAll();
        let pedidoFormato = db.Formato.findAll();
        let pedidoMedio = db.Medio.findAll();

        Promise.all([pedidoLibro, pedidoGenero, pedidoIdioma, pedidoFormato, pedidoMedio])
            .then(function([libro, generos, idiomas, formatos, medios]){
                res.render("editarLibro", 
                {libro, generos, idiomas, formatos, medios});
            })
    }

}


module.exports = librosController;