import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalStyle } from './styles'
import Header from './Components/Header'

import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
