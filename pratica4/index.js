const express = require('express');

const app = express();

const PORT = 3000;

// Middleware de rota para responder ao método GET na URL /
app.get('/', (req, res) => {
  res.send('Você fez uma requisição GET');
});

// Middleware de rota para responder ao método POST na URL /
app.post('/', (req, res) => {
  res.status(201).send('Você fez uma requisição POST');
});

// Middleware de rota para responder ao método PUT na URL /
app.put('/', (req, res) => {
  res.send('Você fez uma requisição PUT');
});

// Middleware de rota para responder ao método DELETE na URL /
app.delete('/', (req, res) => {
  res.sendStatus(204);
});

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor Express em execução na porta ${PORT}`);
});

module.exports = app;
