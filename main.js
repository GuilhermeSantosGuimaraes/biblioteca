let cadastroLivros = require('./livros')
let cadastroClientes = require('./clientes')

//cadastroLivros.inserir({isbn: 1234567891510, nome: 'Flores para Algernon', anopubli: '2018-07-23', editora: 'Aleph', autor: 'Daniel'})
//cadastroLivros.buscarPorAutor('Daniel');
//cadastroLivros.buscarPorNome('Flores para Algernon');
//cadastroLivros.buscarPorDisponibilidade('t');
//cadastroLivros.atualizar({disponibilidade: 't'}, 1234567894565);

//cadastroClientes.inserir({matricula: 12345, nome: "Guilherme Guimarães", telefone: "999-999-999"});
//cadastroClientes.listar();
cadastroClientes.locarLivro(1, 12345, {disponibilidade: 'f'}, 1234567894565);
