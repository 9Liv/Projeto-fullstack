const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Livro = sequelize.define("Livro", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT
  },
  imagem: {
    type: DataTypes.STRING
  },
  preco: {
    type: DataTypes.FLOAT
  }
});

module.exports = Livro;