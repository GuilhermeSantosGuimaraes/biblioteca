const express = require('express');
const rota = express.Router();

const autoresController = require('../controller/autores_controller');

rota.get('/', autoresController.listar);
rota.post('/', autoresController.inserir);
rota.get('/:id', autoresController.buscarPorId);
rota.put('/:id', autoresController.atualizar);
rota.delete('/:id', autoresController.deletar);

module.exports = rota
