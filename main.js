let cadastroLivros = require('./persistencia/livros')
let cadastroClientes = require('./persistencia/clientes')

//cadastroClientes.locarLivro({qtdlivros: 1}, 12345, {disponibilidade: 'f'}, 1234567894565);

async function main(){
    //Livros
    try{
        const livroInserido = await cadastroLivros.inserir({isbn: 1234567891510, titulo: 'Flores para Algernon', anopubli: '2018-07-23', editora: 'Aleph', autor: 'Daniel'})
        console.log(`Livro {$livroInserido.nome} inserido com sucesso`)
    }catch(err){
        console.log(err);
    }

    const buscarAutor = await cadastroLivros.buscarPorAutor('Daniel');
    console.log(`Títulos: {$buscarAutor}`)

    const buscarNome = await cadastroLivros.buscarPorNome('Flores para Algernon');
    console.log(`Títulos: {$buscarNome}`)

    const buscarDisponibilidade = await cadastroLivros.buscarPorDisponibilidade('t');
    console.log(`Títulos: {$buscarDisponibilidade}`)

    const atualizar = await cadastroLivros.atualizar({disponibilidade: 't'}, 1234567894565);
    console.log(`Informações do livro {$atualizar.nome} atualizadas`)

    const deletar = await cadastroLivros.deletar(1234567894565);
    console.log(`Informações do livro {$deletar.nome} atualizadas`)

    //Clientes
    try{
        const clienteInserido = await cadastroClientes.inserir({matricula: 12345, nome: "Guilherme Guimarães", telefone: "999-999-999"});
        console.log(`Livro {$clienteInserido.nome} inserido com sucesso`)
    }catch(err){
        console.log(err);
    }

    const buscar = await cadastroClientes.listar();
    console.log(`Clientes: {$buscar}`)
}

main();