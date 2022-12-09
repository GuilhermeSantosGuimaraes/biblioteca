const express = require('express');
const rota = express.Router();

const autoresController = require('../controller/autores_controller');

rota.post('/', autoresController.inserir);

module.exports = rota
