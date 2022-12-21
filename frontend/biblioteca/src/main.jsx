import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"

//Paginas
import Autores from "./routes/autores";
import Livros from "./routes/livros";
import Clientes from "./routes/clientes";
import Locacao from "./routes/locacao";

import './index.css'

//OBJETO DE ROTEAMENTO
const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Autores/>
      },
      {
        path: "/livros",
        element: <Livros/>
      },
      {
        path: "/clientes",
        element: <Clientes/>
      },
      {
        path: "/locacao",
        element: <Locacao/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
