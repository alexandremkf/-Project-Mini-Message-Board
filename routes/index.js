const express = require("express");
const router = express.Router();

// array de mensagens (como o enunciado pede)
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// rota index
router.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
});

// rota para o formulário
router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

module.exports = router;