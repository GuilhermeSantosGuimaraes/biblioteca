const express = require('express');
const rota = express.Router();

const livrosController = require('../controller/livros_controller');

rota.get('/', livrosController.listar);
rota.post('/', livrosController.inserir);
rota.get('/autor/:autor', livrosController.buscarPorAutor);
rota.get('/titulo/:nome', livrosController.buscarPorNome);
rota.get('/disponibilidade/:disponibilidade', livrosController.buscarPorDisponibilidade);
rota.get('/isbn/:isbn', livrosController.buscarPorISBN);
rota.put('/:isbn', livrosController.atualizar);
rota.delete('/:isbn', livrosController.deletar);

module.exports = rota