const express = require('express');
const rota = express.Router();

const clienteController = require('../controller/cliente_controller');

rota.get('/', clienteController.listar);
rota.post('/', clienteController.inserir);
rota.get('/:id', clienteController.buscarPorMatricula);
rota.put('/:id', clienteController.atualizar);
rota.delete('/:id', clienteController.deletar);

module.exports = rota