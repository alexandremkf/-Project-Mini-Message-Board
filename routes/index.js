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

// rota para receber o formulário
router.post("/new", (req, res) => {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });

  res.redirect("/");
});

// rota para detalhes da mensagem
router.get("/message/:id", (req, res) => {
  const id = req.params.id;
  const message = messages[id];

  res.render("message", {
    title: "Message Details",
    message: message,
  });
});

module.exports = router;