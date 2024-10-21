import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Categorias from './Pages/Categorias'
import Produto from './Pages/Produto'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categorias />} />
    <Route path="/produto/:id" element={<Produto />} />
  </Routes>
)

export default Rotas
