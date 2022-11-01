
const { Client } = require('pg');
const { conexao } = require('./conexao.js')

async function inserir(livro){
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("INSERT INTO livros(isbn, titulo, editora, autor, anopubli) VALUES($1, $2, $3, $4, $5)", [livro.isbn, livro.titulo, livro.editora, livro.autor, livro.anopubli]);
    console.log("Livro cadastrado com sucesso");

    await cliente.end();
}

async function buscarPorAutor(autor){
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("SELECT * FROM livros WHERE autor = $1", [autor]);
    console.log(sql.rows);

    await cliente.end();
}

async function buscarPorNome(livro){
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("SELECT * FROM livros WHERE nome = $1", [livro]);
    console.log(sql.rows);

    await cliente.end();
}

async function buscarPorDisponibilidade(livro){
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("SELECT * FROM livros WHERE disponibilidade = $1", [livro]);
    console.log(sql.rows);

    await cliente.end();
}

async function atualizar(livro, disp){
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("UPDATE livros SET disponibilidade = $1 WHERE isbn = $2", [livro.disponibilidade, disp]);
    console.log('Livro atualizado!');

    await cliente.end();
}

module.exports = {
    inserir,  buscarPorAutor, buscarPorNome, atualizar, buscarPorDisponibilidade
}


