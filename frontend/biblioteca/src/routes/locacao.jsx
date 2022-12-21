import { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"

import "./locacao.css";

const locacao = () => {

  const [locacao, setLocacao] = useState([])

  //Chama os dados da API
  const getLocacao = async()=> {

    try {
      const res = await axios.get("http://localhost:3000/api/locacao");
      const data = res.data;

      setLocacao(data);
    } catch (err) {
      console.log(err)
    }

  }

  useEffect(()=> {

    getLocacao();

  }, [])

  return (
    <div className='locacao'>
      <h1>Lista de locacao</h1>
      <table>
        <tr>
          <th>Nome</th>
          <th>Titulo do livro</th>
          <th>Data de devolução</th>
        </tr>
        {locacao.length === 0 ? <p>Carregando....</p> : (
        locacao.map((locar) => (
          <tr className="locar" key={locar.id}>           
            <td>{locar.nome}</td>
            <td>{locar.titulo}</td>
            <td>{locar.datadevolucao}</td>
          </tr>
        ))
      )}
      </table>
    </div>
  )
}

export default locacao