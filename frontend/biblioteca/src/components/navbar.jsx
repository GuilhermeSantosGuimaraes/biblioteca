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
                <Link to={`/autores`}>Autores</Link>
            </li>
            <li>
                <Link to={`/livros`} >Livros</Link>
            </li>
        </ul>
    </nav>
  )
}

export default navbar   