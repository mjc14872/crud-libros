module.exports = function (sequelize, dataTypes) {
    let alias = "Libro";
    let cols = {
        id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
        },
        titulo: {
                type: dataTypes.STRING
        },
        editorial: {
            type: dataTypes.STRING
        },
        precio_unitario: {
            type: dataTypes.FLOAT
        },
        descuento: {
            type: dataTypes.TINYINT
        },
        bestSeller: {
            type: dataTypes.TINYINT
        },
        resenia: {
            type: dataTypes.TEXT
        },
        paginas: {
            type: dataTypes.INTEGER
        },
        peso: {
            type: dataTypes.INTEGER
        },
        edicion: {
            type: dataTypes.INTEGER
        },
        isbn: {
            type: dataTypes.INTEGER
        },
        cantidad: {
            type: dataTypes.INTEGER
        },
        imagen: {
            type: dataTypes.STRING
        },
        generos_id: {
            type: dataTypes.INTEGER
        },
        idiomas_id: {
            type: dataTypes.INTEGER
        },
        formatos_id: {
            type: dataTypes.INTEGER 
        },
        autores_id: {
            type: dataTypes.INTEGER
        },
        medios_id: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: "libros",
        timestamps: false
    }
    
    let Libro = sequelize.define(alias, cols, config);
    return Libro;
}