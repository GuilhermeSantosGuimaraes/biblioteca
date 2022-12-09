const autoresNegocio = require('../negocio/autores_negocio');

async function inserir(req, res) {
    const autores = req.body;

    try {
        const autorInserido = await autoresNegocio.inserir(autores);
        res.status(201).json(autorInserido)
    } catch (err) {
        if (err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        } else {
            res.status(500).json({Erro: "Erro na Aplicacao"});
        }
    }
}

module.exports = {
    inserir
}
