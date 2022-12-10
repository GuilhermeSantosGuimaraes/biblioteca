const livroNegocio = require('../negocio/livro_negocio');

async function listar(req, res){
    try {
        const listaLivros = await livroNegocio.listar();
        res.json(listaLivros);
    } catch (err) {
        res.status(500).json({Erro: "Erro na API"});
    }
}

async function inserir(req, res){
    const livro = req.body;

    try {
        const livroInserido = await livroNegocio.inserir(livro);
        res.status(201).json(livroInserido);
    } catch (err) {
        if(err && err.id){
            res.status(err.id).json({Erro: err.mensagem})
        }else{
            res.status(500).json({Erro: "Erro na API"});
        }
    }
}

module.exports = {
    listar,
    inserir
}