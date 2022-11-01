const { Client } = require('pg');
const { conexao } = require('./conexao.js')


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

async function locarLivro(qtdlivros, matricula, disp, isbn){
    const user = new Client(conexao);

    await user.connect();
    //NÃO ESTA COMPLETO
    const sql = await user.query("INSERT INTO locacao(locador, livro, fk_matricula, fk_isbn) VALUES(SELECT clientes.matricula, livros.isbn FROM clientes, livros JOIN locacao ON locacao.locador = clientes.nome JOIN locacao on locaco.livro = livros.titulo)", 
                                    [matricula, isbn]);
    const livro = await user.query("UPDATE livros SET disponibilidade = $1 WHERE isbn = $2", [disp.disponibilidade, isbn]);
    const cliente = await user.query("UPDATE clientes SET qtdlivros = $1 WHERE matricula = $2", [qtdlivros.qtdlivros, matricula]);//eSTE COMANDO ESTÁ DANDO ERRO
    //CRIAR UM COMANDO PARA MANDAR A DATA DE LOCAÇÃO PARA A TABELA LOCACAO PEGANDO O DIA DE HJ USANDO A FUNÇÃO NEW DATE(), PRECISA CRIAR A COLUNA DATA DE DEVOLUÇÃO;
    
    const date = new Date();
    date.setDate(date.getDate() + 10)
    console.log(`Livro locado, devolução na data: ${date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    })}`)
    
    await user.end();
}

module.exports = {
    inserir, listar, locarLivro
}
