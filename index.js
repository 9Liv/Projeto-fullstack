const express = require("express");
const cors = require("cors");
const sequelize = require("./database/db");
const Livro = require("./model/livro");
const controller = require("./controller/livroController");

const app = express();
app.use(cors());
app.use(express.json());

// ROTAS
app.get("/livros", controller.buscarTodos);
app.get("/livros/:id", controller.buscarPorId);
app.post("/livros", controller.criar);
app.delete("/livros/:id", controller.deletar);

// CONEXÃO
sequelize.sync().then(() => {
  console.log("Banco conectado!");
  app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });
});