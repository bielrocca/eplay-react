import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Categorias from './Pages/Categorias'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categorias />} />
  </Routes>
)

export default Rotas
