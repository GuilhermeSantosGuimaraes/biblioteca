let cadastroLivros = require('./persistencia/livros')
let cadastroClientes = require('./persistencia/clientes');
const data = require('./persistencia/clientes');

// cadastroClientes.locarLivro({qtdlivros: 1}, 12345, {disponibilidade: 'f'}, 1234567894565);

async function main() { // Livros
    /*
    try {
        const livroInserido = await cadastroLivros.inserir({
            isbn: 1234567891510,
            titulo: 'Flores para Algernon',
            anopubli: '2018-07-23',
            editora: 'Aleph',
            autor: 'Daniel',
            disponibilidade: 'true'
        })
        console.log(`Livro ${livroInserido.titulo} inserido com sucesso`)
    } catch (err) {
        console.log(err);
    }
*/
/*
    const buscarAutor = await cadastroLivros.buscarPorAutor('Daniel');
    console.log(`Títulos: ${buscarAutor.titulo}`)

    const buscarNome = await cadastroLivros.buscarPorNome('Flores para Algernon');
    console.log(`Títulos: ${buscarNome.titulo}`)

    const buscarDisponibilidade = await cadastroLivros.buscarPorDisponibilidade('t');
    console.log(`Títulos: ${buscarDisponibilidade.titulo}`)

    const atualizar = await cadastroLivros.atualizar({
        disponibilidade: 'f'
    }, 1234567891510);
    console.log(`Informações do livro ${atualizar.titulo} atualizadas`)

    const deletar = await cadastroLivros.deletar(1234567891510);
    console.log(`Livro ${deletar.titulo} deletado`)
*/
    // Clientes
/*
    try {
        const clienteInserido = await cadastroClientes.inserir({matricula: 12345, nome: "Guilherme Guimarães", telefone: "999-999-999", qtdlivros: 0});
        console.log(`Livro ${clienteInserido.nome} inserido com sucesso`)
    } catch (err) {
        console.log(err);
    }

    const buscar = await cadastroClientes.listar();
    console.log("Clientes:", buscar)

    const locar = await cadastroClientes.locarLivro({
        locador: "Daniel",
        livro: 'Flores para Algernon',
        datadevolucao: '01/12/2022',
        disponibilidade: 0,
        qtdLivros: 1
    }, 1234567891510, 12346)
*/
    const devolver = await cadastroClientes.devolucao('Daniel', 'Flores para Algernon')
    console.log(`Livro devolvido`)
}

main();
