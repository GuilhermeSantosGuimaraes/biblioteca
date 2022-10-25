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

async function locarLivro(qtdlivros, matricula, disp, isbn){
    const user = new Client(conexao);

    await user.connect();
    //VER COM O PROFESSOR SE ÉSTA É A MELHOR SOLUÇÃO 
    const sql = await user.query("INSERT INTO locacao(SELECT nome, titulo FROM clientes, livros WHERE clientes.matricula = $1 and livros.isbn = $2)", [matricula, isbn]);
    const livro = await user.query("UPDATE livros SET disponibilidade = $1 WHERE isbn = $2", [disp.disponibilidade, isbn]);
    const cliente = await user.query("UPDATE clientes SET qtdlivros = $1 WHERE matricula = $2", [qtdlivros.qtdlivros, matricula]);//eSTE COMANDO ESTÁ DANDO ERRO
    //CRIAR UM COMANDO PARA MANDAR A DATA DE LOCAÇÃO PARA A TABELA LOCACAO PEGANDO O DIA DE HJ USANDO A FUNÇÃO NEW DATE(), PRECISA CRIAR A COLUNA DATA DE DEVOLUÇÃO;
    const date = new Date();
    const data = date.getDate();
    const mes = date.getMonth();// este método retorna os meses com a contagem de 0 a 11, então precisamos somar 1 ao resultado
    console.log(`Livro locado, devolução na data: ${data+7}/${mes+1}`)
    

    await user.end();
}

module.exports = {
    inserir, listar, locarLivro
}
