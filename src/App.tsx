import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles'
import Header from './Components/Header'

import Rotas from './routes'
import Rodape from './Components/Rodape'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Rodape />
    </BrowserRouter>
  )
}

export default App
