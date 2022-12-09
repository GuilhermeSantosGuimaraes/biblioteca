const autoresNegocio = require('../negocio/autores_negocio');

async function listar(req, res) {
    try {
        const listaAutores = await autoresNegocio.listar();
        res.json(listaAutores);
    } catch (err) {
        res.status(500).json({Erro: "Erro na API"});
    }
}

async function inserir(req, res) {
    const autores = req.body;

    try {
        const autorInserido = await autoresNegocio.inserir(autores);
        res.status(201).json(autorInserido)
    } catch (err) {
        if (err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        } else {
            res.status(500).json({Erro: "Erro na API"});
        }
    }
}

async function buscarPorId(req, res) {
    const id = req.params.id;

    try {
        const autor = await autoresNegocio.buscarPorId(id);
        res.json(autor);
    } catch (err) {
        if (err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        } else {
            res.status(500).json({Erro: "Erro na API"});
        }
    }
}

async function atualizar(req, res) {
    const id = req.params.id;
    const autor = req.body;

    try {
        const autorAtualizado = await autoresNegocio.atualizar(id, autor);
        res.json(autorAtualizado);
    } catch (err) {
        if (err && err.id) {
            res.status(err.id).json({Erro: err.mensagem});
        } else {
            res.status(500).json({Erro: "Erro na API"});
        }
    }
}

async function deletar(req, res) {
    const id = req.params.id;

    try {
        const autorDeletado = await autoresNegocio.deletar(id);
        res.json(`Autor ${autorDeletado.nome} deletado`);
    } catch (err) {
        if (err && err.id) {
            res.status(err.id).json({Erro: err.mensagem});
        } else {
            res.status(500).json({Erro: "Erro na API"});
        }
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}
