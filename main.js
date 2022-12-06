let cadastroLivros = require('./negocio/livro_negocio')
let cadastroClientes = require('./negocio/cliente_negocio')
let cadastroLocacao = require('./persistencia/clientes')
let cadastroAutores = require('./negocio/autores_negocio')

async function main() { // Livros
    try {
        const livroInserido = await cadastroLivros.inserir({
            isbn: 1234567891654545,
            titulo: 'Flores para Algernon',
            anopubli: '2018-07-23',
            editora: 'Aleph',
            disponibilidade: 'true',
            idautor: 2
        })
        console.log(`Livro ${
            livroInserido.titulo
        } inserido com sucesso`)
    } catch (err) {
        console.log("Erro", err);
    }
    /*
    try{
        const buscarAutor = await cadastroLivros.buscarPorAutor('Daniel');
        console.log("Títulos:", buscarAutor)
    }catch(err){
        console.log("Erro", err);
    }
    
    try{
        const buscarNome = await cadastroLivros.buscarPorNome('Flores para Algernon');
        console.log("Títulos:", buscarNome)
    }catch(err){
        console.log("Erro", err);
    }

    try{
        const buscarDisponibilidade = await cadastroLivros.buscarPorDisponibilidade('true');
        console.log("Títulos:", buscarDisponibilidade)
    }catch(err){
        console.log("Erro", err);
    }
 
    try {
        const atualizar = await cadastroLivros.atualizar({
            isbn: 1234567891510,
            titulo: 'Flores para Algernon',
            anopubli: '2018-07-23',
            editora: 'Aleph',
            autor: 'Daniel',
            disponibilidade: 'false'
        }, 1234567891510);
        console.log("Informações do livro atualizadas")
    } catch (err) {
        console.log("Erro", err);
    }

    try {
        const deletar = await cadastroLivros.deletar(1234567891510);
        console.log("Livro", deletar.titulo + " deletado")
    } catch (err) {
        console.log("Erro", err);
    }
    
    // Clientes
    try {
        const clienteInserido = await cadastroClientes.inserir({matricula: 12341, nome: "Renato Guimarães", telefone: "999-999-999", qtdlivros: 0});
        console.log(`Livro ${
            clienteInserido.nome
        } inserido com sucesso`)
    } catch (err) {
        console.log(err);
    }

    const buscar = await cadastroClientes.listar();
    console.log("Clientes:", buscar)
    
    const locar = await cadastroLocacao.locarLivro({
        locador: "Daniel",
        livro: 'Flores para Algernon',
        datadevolucao: '02/12/2022',
        disponibilidade: 0,
        qtdLivros: 1
    }, 1234567891510, 12346)

    const devolver = await cadastroLocacao.devolucao('Daniel', 'Flores para Algernon')
    console.log(`Livro devolvido`)

    try {
        const atualizar = await cadastroClientes.atualizar({
            matricula: 12345,
            nome: "Guilherme Guimarães",
            telefone: "999-999-888"
        }, 12345);
        console.log("Informações do Cliente atualizadas")
    } catch (err) {
        console.log("Erro", err);
    }

    try {
        const deletar = await cadastroClientes.deletar(12345);
        console.log("Livro", deletar.titulo + " deletado")
    } catch (err) {
        console.log("Erro", err);
    }

    //Autores
    try {
        const autorInserido = await cadastroAutores.inserir({nome: "Fernando", paisorigem: "Brasil"});
        console.log(`Autor ${
            autorInserido.nome
        } inserido com sucesso`)
    } catch (err) {
        console.log(err);
    }

    const buscarAutores = await cadastroAutores.listar();
    console.log("Autores:", buscarAutores)

    try {
        const atualizar = await cadastroAutores.atualizar(1,{
            nome: "Guilherme Guimarães",
            paisorigem: "Eua"
        });
        console.log("Informações do Autor atualizadas")
    } catch (err) {
        console.log("Erro", err);
    }

    try {
        const deletar = await cadastroAutores.deletar(1);
        console.log("Autor deletado")
    } catch (err) {
        console.log("Erro", err);
    }
*/
}

main();
