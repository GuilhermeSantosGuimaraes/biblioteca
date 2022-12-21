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
      {autores.length === 0 ? <p>Carregando....</p> : (
        autores.map((autor) => (
          <div className="autor" key={autor.id}>
            <h2>{autor.nome}</h2>
            <p>{autor.paisorigem}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default autores