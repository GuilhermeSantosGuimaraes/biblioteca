
const { Client } = require('pg');

const conexao = {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "123456789",
    database: "biblioteca"
}

async function inserir(livro){
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("INSERT INTO livros(isbn, nome, editora, autor, anopubli) VALUES($1, $2, $3, $4, $5)", [livro.isbn, livro.nome, livro.editora, livro.autor, livro.anopubli]);
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

module.exports = {
    inserir,  buscarPorAutor, buscarPorNome
}


