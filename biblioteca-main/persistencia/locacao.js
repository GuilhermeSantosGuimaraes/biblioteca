const {Client} = require('pg');
const {conexao} = require('./conexao.js')

async function locarLivro(locacao) {
    const user = new Client(conexao);

    await user.connect();

    const sql = await user.query("INSERT INTO locacao(matriculalocador, isbnlivro, datadevolucao) VALUES($1, $2, $3) RETURNING*", [locacao.matriculalocador, locacao.isbnlivro, locacao.datadevolucao]);

    await user.end();

    return sql.rows[0];
}

async function listar() {
    const user = new Client(conexao);

    await user.connect();

    const sql = `SELECT clientes.nome, livros.titulo, locacao.datadevolucao
                FROM locacao
                JOIN clientes
                ON clientes.matricula = locacao.matriculalocador
                JOIN livros
                ON livros.isbn = locacao.isbnlivro`;
        
    const res = await user.query(sql);
    let listaLocacao = res.rows.map(function (dados) {
        return {
            nome: dados.nome,
            titulo: dados.titulo,
            datadevolucao: dados.datadevolucao
        };
    })

    await user.end();

    return listaLocacao;
}

async function devolucao(isbn) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const sql = await cliente.query('DELETE FROM locacao WHERE isbnlivro = $1 RETURNING *', [isbn]);

    await cliente.end();

    return sql.rows[0];
}

module.exports = {
    locarLivro,
    devolucao, 
    listar
}