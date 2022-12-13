const locacaoPersistencia = require("../persistencia/locacao");

async function locarLivro(locacao) {
    if (locacao && locacao.matriculalocador && locacao.isbnlivro && locacao.datadevolucao) {
        const locacaoInserido = await locacaoPersistencia.locarLivro(locacao);
        return locacaoInserido;
    } else {
        throw {
            id:400, mensagem : "Informações insuficientes"
        };
    }
}

async function listar() {
    return await locacaoPersistencia.listar();
}

async function devolucao(isbn) {
    const livro = await buscarPorId(isbn);
    if (livro) 
        return await autoresPersistencia.deletar(isbn);
}

module.exports = {
    locarLivro, 
    listar,
    devolucao
}
