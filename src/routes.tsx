import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Categorias from './Pages/Categorias'
import Produto from './Pages/Produto'
import Checkout from './Pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categorias />} />
    <Route path="/produto/:id" element={<Produto />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
