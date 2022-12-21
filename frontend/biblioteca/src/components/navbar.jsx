import { Link } from "react-router-dom"
import './navbar.css'

const navbar = () => {
  return (
    <nav className="navBar">
        <h2>
            Biblioteca
        </h2>
        <ul>
            <li>
                <Link to={`/`}>Autores</Link>
            </li>
            <li>
                <Link to={`/livros`} >Livros</Link>
            </li>
            <li>
                <Link to={`/clientes`}>Clientes</Link>
            </li>
            <li>
                <Link to={`/locacao`}>Locacao</Link>
            </li>
        </ul>
    </nav>
  )
}

export default navbar   