const {Client} = require('pg');
const {conexao} = require('./conexao.js')

async function inserir(livro) {
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("INSERT INTO livros(isbn, titulo, editora, anopubli, disponibilidade, idautor) VALUES($1, $2, $3, $4, $5, $6) RETURNING*", [
        livro.isbn,
        livro.titulo,
        livro.editora,
        livro.anopubli,
        livro.disponibilidade,
        livro.idautor
    ]);

    await cliente.end();
    return sql.rows[0];
}

async function listar() {
    const user = new Client(conexao);

    await user.connect();

    const sql = `SELECT livros.isbn, livros.titulo, livros.editora, livros.anopubli, livros.disponibilidade, autores.nome as autores_nome   
                FROM livros
                JOIN autores
                ON livros.idautor = autores.id`;

    const res = await user.query(sql);
    let listaLivros = res.rows.map(function (dados) {
        return {
            id: dados.isbn,
            titulo: dados.titulo,
            editora: dados.editora,
            anopubli: dados.anopubli,
            disponibilidade: dados.disponibilidade,
            autor: dados.autores_nome
        };
    })
    await user.end();

    return listaLivros;
}

async function buscarPorAutor(autor) {
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("SELECT livros.isbn, livros.titulo, livros.editora, autores.nome FROM livros JOIN autores ON livros.idautor = autores.id WHERE autores.nome = $1", [autor]);

    await cliente.end();

    return sql.rows[0];
}

async function buscarPorNome(livro) {
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("SELECT livros.isbn, livros.titulo, livros.editora, autores.nome FROM livros JOIN autores ON livros.idautor = autores.id WHERE livros.titulo = $1", [livro]);

    await cliente.end();

    return sql.rows[0];
}

async function buscarPorDisponibilidade(livro) {
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("SELECT livros.isbn, livros.titulo, livros.editora, autores.nome FROM livros JOIN autores ON livros.idautor = autores.id WHERE livros.disponibilidade = $1", [livro]);

    await cliente.end();

    return sql.rows[0];
}

async function buscarPorISBN(livro) {
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("SELECT livros.isbn, livros.titulo, livros.editora, livros.disponibilidade, autores.nome FROM livros JOIN autores ON livros.idautor = autores.id WHERE livros.isbn = $1", [livro]);

    await cliente.end();

    return sql.rows[0];
}

async function atualizar(livro, isbn) {
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("UPDATE livros SET isbn = $1, titulo = $2, editora = $3, idautor = $4, anopubli = $5, disponibilidade = $6 WHERE isbn = $7 RETURNING*", [
        livro.isbn,
        livro.titulo,
        livro.editora,
        livro.anopubli,
        livro.disponibilidade,
        livro.idautor,
        isbn
    ]);

    await cliente.end();

    return sql.rows[0];
}

async function deletar(isbn) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const sql = await cliente.query('DELETE FROM livros WHERE isbn=$1 RETURNING *', [isbn]);

    await cliente.end();

    return sql.rows[0];
}

module.exports = {
    inserir,
    listar,
    buscarPorAutor,
    buscarPorNome,
    atualizar,
    buscarPorDisponibilidade,
    buscarPorISBN,
    deletar
}
