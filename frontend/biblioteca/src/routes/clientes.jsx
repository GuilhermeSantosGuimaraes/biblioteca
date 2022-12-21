import { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"

import "./clientes.css";

const clientes = () => {

  const [clientes, setClientes] = useState([])

  //Chama os dados da API
  const getClientes = async()=> {

    try {
      const res = await axios.get("http://localhost:3000/api/clientes");
      const data = res.data;

      setClientes(data);
    } catch (err) {
      console.log(err)
    }

  }

  useEffect(()=> {

    getClientes();

  }, [])

  return (
    <div className='clientes'>
      <h1>Lista de clientes</h1>
      <table>
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
        </tr>
        {clientes.length === 0 ? <p>Carregando....</p> : (
        clientes.map((cliente) => (
          <tr className="cliente" key={cliente.matricula}>           
            <td>{cliente.nome}</td>
            <td>{cliente.telefone}</td>
          </tr>
        ))
      )}
      </table>
    </div>
  )
}

export default clientes