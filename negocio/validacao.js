function validarLivro(livro) {
    return livro && livro.isbn && livro.titulo && livro.editora && livro.autor && livro.anopubli && livro.disponibilidade && 
    typeof livro.titulo == 'string' && 
    typeof livro.isbn == 'number' &&
    typeof livro.editora == 'string' &&
    typeof livro.autor == 'string' &&
    typeof livro.anopubli == 'string' &&
    typeof livro.disponibilidade == 'boolean'
}

function validarClientes(clientes) {
    return clientes && clientes.matricula && clientes.nome && clientes.telefone && clientes.qtdlivros &&
            typeof clientes.matricula == 'number' && 
            typeof clientes.nome == 'string' &&
            typeof clientes.telefone == 'string' &&
            typeof clientes.qtdlivros == 'number'
}

function validarLocacao(locacao) {
    return locacao && locacao.locador && locacao.livro && locacao.datadevolucao &&
            typeof locacao.locador == 'string' && 
            typeof locacao.livro == 'string' &&
            typeof locacao.livro == 'string'
}


module.exports = {
    validarLivro, validarClientes, validarLocacao
}
