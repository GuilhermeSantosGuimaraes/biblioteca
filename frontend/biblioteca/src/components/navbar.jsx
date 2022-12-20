import { Link } from "react-router-dom"
import './navbar.css'

const navbar = () => {
  return (
    <nav className="navBar">
        <h2>
            <Link to={`/`}>Biblioteca</Link>
        </h2>
        <ul>
            <li>
                <Link to={`/`}>Autores</Link>
            </li>
            <li>
                <Link to={`/livros`} className="newBtn">Livros</Link>
            </li>
        </ul>
    </nav>
  )
}

export default navbar   