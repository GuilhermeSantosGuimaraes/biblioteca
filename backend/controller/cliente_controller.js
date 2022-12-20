const clienteNegocio = require('../negocio/cliente_negocio');

async function listar(req, res){
    try {
        const listaclientes = await clienteNegocio.listar();
        res.json(listaclientes);
    } catch (err) {
        res.status(500).json({Erro: "Erro na API"});
    }
}

async function inserir(req, res){
    const cliente = req.body;

    try {
        const clienteInserido = await clienteNegocio.inserir(cliente);
        res.status(201).json(clienteInserido);
    } catch (err) {
        if(err && err.id){
            res.status(err.id).json({Erro: err.mensagem})
        }else{
            res.status(500).json({Erro: "Erro na API"});
        }
    }
}

async function buscarPorMatricula(req, res){
    const cliente = req.params.cliente;

    try {
        const buscarCliente = await clienteNegocio.buscarPorMatricula(cliente);
        res.json(buscarCliente);
    } catch (err) {
        if (err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        } else {
            res.status(500).json({Erro: "Erro na API"});
        }
    }
}
   
async function atualizar(req, res) {
    const matricula = req.params.matricula;
    const cliente = req.body;

    try {
        const clienteAtualizado = await clienteNegocio.atualizar(matricula, cliente);
        res.json(clienteAtualizado);
    } catch (err) {
        if (err && err.id) {
            res.status(err.id).json({Erro: err.mensagem});
        } else {
            res.status(500).json({Erro: "Erro na API"});
        }
    }
}

async function deletar(req, res) {
    const matricula = req.params.matricula;

    try {
        const clienteDeletado = await clienteNegocio.deletar(matricula);
        res.json(`Cliente ${clienteDeletado.nome} deletado`);
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
    buscarPorMatricula,
    atualizar,
    deletar
}