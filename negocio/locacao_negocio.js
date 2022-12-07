const locacaoPersistencia = require("../persistencia/locacao");

async function locarLivro(locacao) {
    const user = new Client(conexao);

    await user.connect();

    const sql = await user.query("INSERT INTO locacao(matriculalocador, isbnlivro, datadevolucao) VALUES($1, $2, $3) RETURNING*", [locacao.matriculalocador, locacao.isbnlivro, locacao.datadevolucao]);

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

module.exports = {
    locarLivro
}
