const express = require('express');
const rota = express.Router();

const locacaoController = require('../controller/locacao_controller');

rota.post('/', locacaoController.locarLivro);
rota.get('/', locacaoController.listar);
rota.delete('/:isbn', locacaoController.devolucao);

module.exports = rota