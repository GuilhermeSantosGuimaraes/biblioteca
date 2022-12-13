const locacaoNegocio = require('../negocio/locacao_negocio');


async function locarLivro(req, res) {
    try{    
        const locarLivros = await locacaoNegocio.locarLivro();
        res.json(locarLivros);
    } catch (err) {
        if (err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        } else {
            res.status(500).json({Erro: "Erro na API"});
        }
    }
}

async function listar(req, res) {
    try {
        const listalocacao = await locacaoNegocio.listar();
        res.json(listalocacao);
    } catch (err) {
        res.status(500).json({Erro: "Erro na API"});
    }
}

async function devolucao(req, res) {
    const isbn = req.params.isbn;

    try {
        const locacaoDeletado = await locacaoNegocio.deletar(isbn);
        res.json(`locacao ${locacaoDeletado.isbn} deletado`);
    } catch (err) {
        if (err && err.id) {
            res.status(err.id).json({Erro: err.mensagem});
        } else {
            res.status(500).json({Erro: "Erro na API"});
        }
    }
}

module.exports = {
    locarLivro,
    listar,
    devolucao
}