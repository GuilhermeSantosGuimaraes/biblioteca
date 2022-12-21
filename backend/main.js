const express = require('express');
const cors = require('cors');
const app = express();
const porta = 3000;
const autorRota = require('./rotas/autores_rotas');
const livroRota = require('./rotas/livros_rotas');
const locacaoRota = require('./rotas/locacao_rotas');
const clienteRota = require('./rotas/cliente_rotas');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/autores', autorRota);
app.use('/api/livros', livroRota);
app.use('/api/locacao', locacaoRota);
app.use('/api/clientes', clienteRota);

app.listen(porta, () => {
    console.log(`API na porta ${porta}`);
})