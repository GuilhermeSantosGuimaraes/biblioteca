const {validarLivro} = require("./validacao");
const livroPresistencia = require("../persistencia/livros");

async function inserir(livro) {
    if (livro && livro.isbn && livro.titulo && livro.editora && livro.autor && livro.anopubli && livro.disponibilidade) {
        const livroInserido = await livroPresistencia.inserir(livro);
        return livroInserido;
    } else {
        throw {
            mensagem : "Informações insuficientes"
        };
    }
}

async function listar() {
    return await livroPresistencia.listar();
}

async function buscarPorAutor(autor) {
    if (! autor) {
        throw {
            mensagem : "Digite o autor que quer buscar"
        };
    }
    return await livroPresistencia.buscarPorAutor(autor);
}

async function buscarPorNome(nome) {
    if (! nome) {
        throw {
            mensagem : "Digite o nome do livro que quer buscar"
        };
    }
    return await livroPresistencia.buscarPorNome(nome);
}

async function buscarPorDisponibilidade(disp) {
    if (! disp) {
        throw {
            mensagem : "Digite a disponibilidade do livro que quer buscar"
        };
    }
    return await livroPresistencia.buscarPorDisponibilidade(disp);
}

async function buscarPorISBN(isbn) {
    if (! isbn) {
        throw {
            mensagem : "Digite o isbn do livro que quer buscar"
        };
    }
    return await livroPresistencia.buscarPorISBN(isbn);
}

async function atualizar(isbn, livro) {
    if (validarLivro(livro)) {
        const livroAtualizar = await buscarPorISBN(isbn);
        if (livroAtualizar) 
            return await livroPresistencia.atualizar(isbn, livro);  
    } else {
        throw {
            mensagem : "Parametros Invalidos"
        };
    }
}

async function deletar(isbn) {
    const livroDeletar = await buscarPorISBN(isbn);
    if(livroDeletar)
        return await livroPresistencia.deletar(isbn);
}

module.exports = {
    inserir,
    listar,
    buscarPorAutor,
    buscarPorNome,
    buscarPorDisponibilidade,
    atualizar,
    deletar
};
