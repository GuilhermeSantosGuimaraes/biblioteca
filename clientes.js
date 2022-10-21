const { Client } = require('pg');

const conexao = {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "123456789",
    database: "biblioteca"
}

async function inserir(cliente){
    const user = new Client(conexao);

    await user.connect();

    const sql = await user.query("INSERT INTO clientes(matricula, nome, telefone) VALUES($1, $2, $3)", [cliente.matricula, cliente.nome, cliente.telefone]);
    console.log("Cliente cadastrado com sucesso");

    await user.end();
}

async function listar(){
    const user = new Client(conexao);

    await user.connect();

    const sql = await user.query("SELECT * FROM clientes");
    console.log(sql.rows);

    await user.end();
}

module.exports = {
    inserir, listar
}