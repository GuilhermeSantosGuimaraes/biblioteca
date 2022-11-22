const {Client} = require('pg');
const {conexao} = require('./conexao.js')


async function inserir(autores) {
    const user = new Client(conexao);

    await user.connect();

    const sql = await user.query("INSERT INTO autores(nome, paisorigem) VALUES($1, $2) RETURNING", [autores.nome, autores.paisorigem]);

    await user.end();

    return sql.rows[0];
}

async function listar() {
    const user = new Client(conexao);

    await user.connect();

    const sql = await user.query("SELECT * FROM autores");

    await user.end();

    return sql.rows;
}

async function buscarPorId(id) {
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("SELECT * FROM autores WHERE id = $1", [id]);

    await cliente.end();

    return sql.rows;
}

async function atualizar(autores, id) {
    const user = new Client(conexao);

    await user.connect();

    const sql = await user.query("UPDATE autores SET nome = $1, paisorigem = $2 WHERE id = $3 RETURNING", [autores.nome, autores.paisorigem, id]);

    await user.end();

    return sql.rows[0];
}

async function deletar(id) {
    const user = new Client(conexao)

    await user.connect();

    const sql = await user.query('DELETE FROM autores WHERE id = $1 RETURNING', [id]);

    await user.end();

    return sql.rows[0];
}


module.exports = {
    inserir,
    listar,
    buscarPorId,
    deletar,
    atualizar
}
