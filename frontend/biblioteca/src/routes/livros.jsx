import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

import "./livros.css"

const livros = () => {

  const [livros, setLivros] = useState([])

  //Chama os dados da API
  const getLivros = async()=> {

    try {
      const res = await axios.get("http://localhost:3000/api/livros");
      const data = res.data;

      setLivros(data);
    } catch (err) {
      console.log(err)
    }

  }

  useEffect(()=> {

    getLivros();

  }, [])

  return (
    <div className='livros'>
      <h1>Lista de Livros</h1>
      <table>
        <tr>
          <th>Titulo</th>
          <th>Editora</th>
          <th>anopubli</th>
          <th>disponibilidade</th>
          <th>Autor</th>
        </tr>
        {livros.length === 0 ? <p>Carregando....</p> : (
        livros.map((livro) => (
          <tr className="livros" key={livro.isbn}>           
            <td>{livro.titulo}</td>
            <td>{livro.editora}</td>
            <td>{livro.anopubli}</td>
            <td>{livro.disponibilidade}</td>
            <td>{livro.autor}</td>
          </tr>
        ))
      )}
      </table>
    </div>
  )
}

export default livros