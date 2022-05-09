let db = require("../database/models");

let librosController = {
    crear: function (req, res) {
        db.Genero.findAll()
            .then(function(generos) {
                return res.render("creacionLibros", {generos:generos});
            })
    }
}


module.exports = librosController;