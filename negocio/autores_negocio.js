const autoresPersistencia = require('../persistencia/autores');

async function inserir(autores) {
    if (autores && autores.nome && autores.paisorigem) {
        const autoresInserido = await autoresPersistencia.inserir(autores);
        return autoresInserido;
    } else {
        throw {
            id:400, mensagem : "Informações insuficientes"
        };
    }
}

async function listar() {
    return await autoresPersistencia.listar();
}

async function buscarPorId(id) {
    if (! id) {
        throw {
            mensagem : "Digite a matricula do autores que quer buscar"
        };
    }
    return await autoresPersistencia.buscarPorId(id);
}

async function atualizar(id, autores) {
    const autoresAtualizar = await buscarPorId(id);
    if (autoresAtualizar) 
        return await autoresPersistencia.atualizar(autores, id);
}

async function deletar(id) {
    const autoresDeletar = await buscarPorId(id);
    if (autoresDeletar) 
        return await autoresPersistencia.deletar(id);
}

module.exports = {
    inserir,
    listar,
    buscarPorId,
    atualizar,
    deletar
};
