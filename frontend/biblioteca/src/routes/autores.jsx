import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom"

import "./autores.css"

const autores = () => {

  const [autores, setAutores] = useState([])

  //Chama os dados da API
  const getAutores = async()=> {

    const api = "http://localhost:3000/api/autores"

    try {
      const res = await axios.get(api);
      const data = res.data;

      console.log(data)
      setAutores(data);
    } catch (err) {
      console.log(err)
    }

  }

  useEffect(()=> {

    getAutores();

  }, [])

  return (
    <div>
      <h1>Lista de autores</h1>
      <table>
        <tr>
          <th>Nome</th>
          <th>País de Origem</th>
        </tr>
        {autores.length === 0 ? <p>Carregando....</p> : (
        autores.map((autor) => (
          <tr className="autor" key={autor.id}>           
            <td>{autor.nome}</td>
            <td>{autor.paisorigem}</td>
          </tr>
        ))
      )}
      </table>
    </div>
  )
}

export default autores