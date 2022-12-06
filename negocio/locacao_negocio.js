const locacaoPersistencia = require("../persistencia/locacao");

async function locarLivro(locacao) {
    if (locacao.matriculalocador && locacao.isbnlivro && locacao.datadevolucao) {
        if (locacao.matriculalocador == cliente.matricula) {
            if (locacao.isbnlivro == livro.isbn) {
                const livroLocado = await locacaoPersistencia.locarLivro(locacao);
                return livroLocado;
            } else {
                throw {
                    mensagem : "ISBN não encontrado"
                }
            };
        } else {
            throw {
                mensagem : "Matricula não encontrada"
            }
        };
    } else {
        throw {
            mensagem : "Informações insuficientes"
        }
    };

}
module.exports = {
    locarLivro
}
