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

async function atualizar(livro, disp) {
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("UPDATE livros SET disponibilidade = $1 WHERE isbn = $2 RETURNING*", [livro.disponibilidade, disp]);

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
    buscarPorAutor,
    buscarPorNome,
    atualizar,
    buscarPorDisponibilidade,
    deletar
}
