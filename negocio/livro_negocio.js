const livroPersistencia = require("../persistencia/livros");
const autorPersistencia = require("../persistencia/autores")

async function inserir(livro) {
    if (livro && livro.isbn && livro.titulo && livro.editora && livro.anopubli && livro.disponibilidade && livro.idautor) {
        const id = await autorPersistencia.buscarPorId(livro.idautor);
        if (id) {
            const isbn = await livroPersistencia.buscarPorISBN(livro.isbn);
            if (! isbn) {
                const livroInserido = await livroPersistencia.inserir(livro);
                return livroInserido;
            } else {
                throw {
                    id: 400,
                    mensagem : "ISBN ja cadastrado"
                }
            }
        } else {
            throw {
                id: 404,
                mensagem : "Id autor não cadastrado"
            }
        };
    } else {
        throw {
            id : 400,
            mensagem : "Informações insuficientes"
        };
    }
}

async function listar() {
    return await livroPersistencia.listar();
}

async function buscarPorAutor(autor) {
    const livro = await livroPersistencia.buscarPorAutor(autor);
    if (! autor) {
        throw {
            id : 404,
            mensagem : "Autor não cadastrado"
        };
    }
    return livro;
}

async function buscarPorNome(nome) {
    const livro = await livroPersistencia.buscarPorNome(nome);
    if (! nome) {
        throw {
            id : 404,
            mensagem : "Livro não cadastrado"
        };
    }
    return livro;
}

async function buscarPorDisponibilidade(disp) {
    const livro = await livroPersistencia.buscarPorDisponibilidade(disp);
    if (! disp) {
        throw {
            id : 404,
            mensagem : `Nenhum livro com disponibilidade igual a ${disp}`
        };
    }
    return livro;
}

async function buscarPorISBN(isbn) {
    const livro = await livroPersistencia.buscarPorISBN(isbn);
    if (! isbn) {
        throw {
            id : 404,
            mensagem : "Livro não cadastrado"
        };
    }
    return livro;
}

async function atualizar(livro, isbn) {
    if (livro && livro.isbn && livro.titulo && livro.editora && livro.anopubli && livro.disponibilidade && livro.idautor) {
        const livroAtualizar = await livroPersistencia.buscarPorISBN(isbn);
        if (livroAtualizar) {
            return await livroPersistencia.atualizar(livro, isbn);
        } else {
            throw {
                id : 404,
                mensagem : "Livro não cadastrado"
            };
        }
    } else {
        throw {
            id : 400,
            mensagem : "Informações insuficientes"
        }
    }
}

async function deletar(isbn) {
    const livroDeletar = await buscarPorISBN(isbn);
    if (livroDeletar) {
        return await livroPersistencia.deletar(isbn);
    }else{
        throw{
            id:404,
            mensagem: "Livro não cadastrado ou ja deletado"
        }
    }

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
