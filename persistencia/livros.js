const {Client} = require('pg');
const {conexao} = require('./conexao.js')

async function inserir(livro) {
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("INSERT INTO livros(isbn, titulo, editora, autor, anopubli, disponibilidade) VALUES($1, $2, $3, $4, $5, $6) RETURNING*", [
        livro.isbn,
        livro.titulo,
        livro.editora,
        livro.autor,
        livro.anopubli,
        livro.disponibilidade
    ]);

    await cliente.end();
    return sql.rows[0];
}

async function listar() {
    const user = new Client(conexao);

    await user.connect();

    const sql = `SELECT livros.isbn, livros.titulo, livros.editora, livros.anopubli, livros.disponibilidade, autores.nome   
                FROM livros
                JOIN autores
                ON livros.idautor = autores.id`;

    await user.end();
}

async function buscarPorAutor(autor) {
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("SELECT * FROM livros WHERE autor = $1", [autor]);

    await cliente.end();

    return sql.rows;
}

async function buscarPorNome(livro) {
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("SELECT * FROM livros WHERE titulo = $1", [livro]);

    await cliente.end();

    return sql.rows;
}

async function buscarPorDisponibilidade(livro) {
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("SELECT * FROM livros WHERE disponibilidade = $1", [livro]);

    await cliente.end();

    return sql.rows;
}

async function buscarPorISBN(livro) {
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("SELECT * FROM livros WHERE isbn = $1", [livro]);

    await cliente.end();

    return sql.rows;
}

async function atualizar(livro, isbn) {
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("UPDATE livros SET isbn = $1, titulo = $2, editora = $3, autor = $4, anopubli = $5, disponibilidade = $6 WHERE isbn = $7 RETURNING*", [
        livro.isbn,
        livro.titulo,
        livro.editora,
        livro.autor,
        livro.anopubli,
        livro.disponibilidade,
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
