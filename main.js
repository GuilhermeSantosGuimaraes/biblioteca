const express = require('express');
const app = express();
const porta = 3000;
const autorRota = require('./rotas/autores_rotas');
const livroRota = require('./rotas/livros_rotas')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/autores', autorRota);
app.use('/api/livros', livroRota);

app.listen(porta, () => {
    console.log(`API na porta ${porta}`);
})