const express = require('express');
const rota = express.Router();

const clienteController = require('../controller/cliente_controller');

rota.get('/', clienteController.listar);
rota.post('/', clienteController.inserir);
rota.get('/:cliente', clienteController.buscarPorMatricula);
rota.put('/:matricula', clienteController.atualizar);
rota.delete('/:matricula', clienteController.deletar);

module.exports = rota