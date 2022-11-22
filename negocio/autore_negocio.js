const autoresPersistencia = require('../persistencia/autores');

async function inserir(autores) {
    if (autores && autores.matricula && autores.nome && autores.telefone && autores.qtdlivros) {
        const autoresInserido = await autoresPersistencia.inserir(autores);
        return autoresInserido;
    } else {
        throw {
            mensagem : "Informações insuficientes"
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
    return await autoresPersistencia.buscarPorid(id);
}

async function atualizar(id, autores) {
    const autoresAtualizar = await buscarPorid(id);
    if (autoresAtualizar) 
        return await autoresPersistencia.atualizar(id, autores);
}

async function deletar(id) {
    const autoresDeletar = await buscarPorid(id);
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
