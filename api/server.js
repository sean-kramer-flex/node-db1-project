const express = require("express");
const accountsRouter = require('./accounts/accounts-router')

const server = express();

server.use(express.json());
server.use('/accounts', accountsRouter);

server.get('/welcome', (req, res) => {
  res.send("welcome to accounts api")
})

module.exports = server;
