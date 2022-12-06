const livroPersistencia = require("../persistencia/livros");
const autorPersistencia = require("../persistencia/autores")

async function inserir(livro) {
    if (livro && livro.isbn && livro.titulo && livro.editora && livro.idautor && livro.anopubli && livro.disponibilidade) {
        const id = await autorPersistencia.buscarPorId(livro.idautor);
        if (id == livro.idautor) {
            const livroInserido = await livroPersistencia.inserir(livro);
            return livroInserido;
        } else {
            throw {
                mensagem : "Id autor não encontrado"
            }
        };
    } else {
        throw {
            mensagem : "Informações insuficientes"
        };
    }
}

async function listar() {
    return await livroPersistencia.listar();
}

async function buscarPorAutor(autor) {
    if (! autor) {
        throw {
            mensagem : "Digite o autor que quer buscar"
        };
    }
    return await livroPersistencia.buscarPorAutor(autor);
}

async function buscarPorNome(nome) {
    if (! nome) {
        throw {
            mensagem : "Digite o nome do livro que quer buscar"
        };
    }
    return await livroPersistencia.buscarPorNome(nome);
}

async function buscarPorDisponibilidade(disp) {
    if (! disp) {
        throw {
            mensagem : "Digite a disponibilidade do livro que quer buscar"
        };
    }
    return await livroPersistencia.buscarPorDisponibilidade(disp);
}

async function buscarPorISBN(isbn) {
    if (! isbn) {
        throw {
            mensagem : "Digite o isbn do livro que quer buscar"
        };
    }
    return await livroPersistencia.buscarPorISBN(isbn);
}

async function atualizar(livro, isbn) {
    const livroAtualizar = await buscarPorISBN(isbn);
    if (livroAtualizar) 
        return await livroPersistencia.atualizar(livro, isbn);
    

}

async function deletar(isbn) {
    const livroDeletar = await buscarPorISBN(isbn);
    if (livroDeletar) 
        return await livroPersistencia.deletar(isbn);
    
}

module.exports = {
    inserir,
    listar,
    buscarPorAutor,
    buscarPorNome,
    buscarPorDisponibilidade,
    buscarPorISBN,
    atualizar,
    deletar
};
