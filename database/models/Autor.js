module.exports = function (sequelize, dataTypes) {
    let alias = "Autor";
    let cols = {
        id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
        },
        nombres: {
                type: dataTypes.STRING
        },
        apellidos: {
                type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "autores",
        timestamps: false
    }
    
    let Autor = sequelize.define(alias, cols, config);
    return Autor;
}