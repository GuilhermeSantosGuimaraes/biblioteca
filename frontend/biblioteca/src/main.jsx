import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"

//Paginas
import Autores from "./routes/autores";
import Livros from "./routes/livros";

import './index.css'

//OBJETO DE ROTEAMENTO
const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/autores",
        element: <Autores/>
      },
      {
        path: "/livros",
        element: <Livros/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
