const {Client} = require('pg');
const {conexao} = require('./conexao.js')


async function inserir(cliente) {
    const user = new Client(conexao);

    await user.connect();

    const sql = await user.query("INSERT INTO clientes(matricula, nome, telefone, qtdlivros) VALUES($1, $2, $3, $4) RETURNING*", [cliente.matricula, cliente.nome, cliente.telefone, cliente.qtdlivros]);

    await user.end();

    return sql.rows[0];
}

async function listar() {
    const user = new Client(conexao);

    await user.connect();

    const sql = await user.query("SELECT * FROM clientes");

    await user.end();

    return sql.rows;
}

async function buscarPorMatricula(matricula) {
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("SELECT * FROM clientes WHERE matricula = $1", [matricula]);

    await cliente.end();

    return sql.rows;
}

async function locarLivro(locacao, isbn, matricula) {
    const user = new Client(conexao);

    await user.connect();

    const sql = await user.query("INSERT INTO locacao(locador, livro, datadevolucao) VALUES($1, $2, $3) RETURNING*", [locacao.locador, locacao.livro, locacao.datadevolucao]);
    const livro = await user.query("UPDATE livros SET disponibilidade = $1 WHERE isbn = $2 RETURNING*", [locacao.disponibilidade, isbn]);
    const cliente = await user.query("UPDATE clientes SET qtdLivros = $1 WHERE matricula = $2 RETURNING*", [locacao.qtdLivros, matricula]);

    const date = new Date();
    date.setDate(date.getDate() + 10)
    console.log(`Livro locado, devolução na data: ${
        date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
    }`)
    await user.end();
}

async function devolucao(nome, titulo){
    const cliente = new Client(conexao)

    await cliente.connect();

    const sql = await cliente.query('DELETE FROM locacao WHERE locador=$1 AND livro=$2 RETURNING *', [nome, titulo]);

    await cliente.end();

    return sql.rows[0];
}

async function atualizar(matricula, cliente) {
    const user = new Client(conexao);

    await user.connect();

    const sql = await cliente.query("UPDATE clientes SET nome = $1, telefone = $2 WHERE matricula = $3 RETURNING*", [cliente.nome, cliente.telefone, matricula]);

    await user.end();

    return sql.rows[0];
}

async function deletar(matricula) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const sql = await cliente.query('DELETE FROM clientes WHERE matricula=$1 RETURNING *', [matricula]);

    await cliente.end();

    return sql.rows[0];
}


module.exports = {
    inserir,
    listar,
    buscarPorMatricula,
    atualizar,
    deletar,
    locarLivro,
    devolucao
}
