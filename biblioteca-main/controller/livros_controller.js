const livroNegocio = require('../negocio/livro_negocio');

async function listar(req, res){
    try {
        const listaLivros = await livroNegocio.listar();
        res.json(listaLivros);
    } catch (err) {
        res.status(500).json({Erro: "Erro na API"});
    }
}

async function inserir(req, res){
    const livro = req.body;

    try {
        const livroInserido = await livroNegocio.inserir(livro);
        res.status(201).json(livroInserido);
    } catch (err) {
        if(err && err.id){
            res.status(err.id).json({Erro: err.mensagem})
        }else{
            res.status(500).json({Erro: "Erro na API"});
        }
    }
}

async function buscarPorAutor(req, res){
    const livro = req.params.autor;

    try {
        const livroAutor = await livroNegocio.buscarPorAutor(livro);
        res.json(livroAutor);
    } catch (err) {
        if (err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        } else {
            res.status(500).json({Erro: "Erro na API"});
        }
    }
}


async function buscarPorNome(req, res){
    const titulo = req.params.nome;

    try {
        const livroTitulo = await livroNegocio.buscarPorNome(titulo);
        res.json(livroTitulo);
    } catch (err) {
        if (err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        } else {
            res.status(500).json({Erro: "Erro na API"});
        }
    }
}


async function buscarPorDisponibilidade(req, res){
    const disp = req.params.disponibilidade;

    try {
        const livroDisp = await livroNegocio.buscarPorDisponibilidade(disp);
        res.json(livroDisp);
    } catch (err) {
        if (err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        } else {
            res.status(500).json({Erro: "Erro na API"});
        }
    }
}


async function buscarPorISBN(req, res){
    const isbn = req.params.isbn;

    try {
        const livroISBN = await livroNegocio.buscarPorISBN(isbn);
        res.json(livroISBN);
    } catch (err) {
        if (err && err.id) {
            res.status(err.id).json({Erro: err.mensagem})
        } else {
            res.status(500).json({Erro: "Erro na API"});
        }
    }
}

async function atualizar(req, res){
    const isbn = req.params.isbn;
    const livro = req.body;

    try {
        const livroAtualizado = await livroNegocio.atualizar(livro, isbn);
        res.status(200).res.json(livroAtualizado)
    } catch (err) {
        if (err && err.id) {
            res.status(err.id).json({Erro: err.mensagem});
        } else {
            console.log(err)
            res.status(500).json({Erro: "Erro na API"});
        }
    }
}

async function deletar(req, res){
    const isbn = req.params.isbn;
    
    try {
        const livroDeletado = await livroNegocio.deletar(isbn);
        res.json(`Livro ${livroDeletado.titulo} deletado`);
    } catch (err) {
        if (err && err.id) {
            res.status(err.id).json({Erro: err.mensagem});
        } else {
            res.status(500).json({Erro: "Erro na API"});
        }
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorAutor,
    buscarPorNome,
    buscarPorDisponibilidade,
    buscarPorISBN,
    atualizar,
    deletar
}