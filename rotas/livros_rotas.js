const express = require('express');
const rota = express.Router();

const livrosController = require('../controller/livros_controller');

rota.get('/', livrosController.listar);
rota.post('/', livrosController.inserir);

module.exports = rota