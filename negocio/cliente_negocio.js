const clientePersistencia = require('../persistencia/clientes');

async function inserir(cliente) {
    if (cliente && cliente.matricula && cliente.nome && cliente.telefone && cliente.qtdlivros) {
        const clienteInserido = await clientePersistencia.inserir(cliente);
        return clienteInserido;
    } else {
        throw {
            mensagem : "Informações insuficientes"
        };
    }
}

async function listar() {
    return await clientePersistencia.listar();
}

async function buscarPorMatricula(matricula) {
    if (! matricula) {
        throw {
            mensagem : "Digite a matricula do cliente que quer buscar"
        };
    }
    return await clientePersistencia.buscarPorMatricula(matricula);
}

async function atualizar(matricula, cliente) {
    const clienteAtualizar = await buscarPorMatricula(matricula);
    if (clienteAtualizar) 
        return await clientePersistencia.atualizar(matricula, cliente);
}

async function deletar(matricula) {
    const clienteDeletar = await buscarPorMatricula(matricula);
    if (clienteDeletar) 
        return await clientePersistencia.deletar(matricula);
}

module.exports = {
    inserir,
    listar,
    buscarPorMatricula,
    atualizar,
    deletar
};
