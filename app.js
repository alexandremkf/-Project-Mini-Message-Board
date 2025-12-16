const express = require("express");
const app = express();
const indexRouter = require("./routes/index");

// configurar EJS
app.set("view engine", "ejs");

// middleware para ler dados do formulário
app.use(express.urlencoded({ extended: true }));

// rotas
app.use("/", indexRouter);

// servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});