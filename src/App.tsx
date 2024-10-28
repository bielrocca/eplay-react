import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles'
import Header from './Components/Header'

import Rotas from './routes'
import Rodape from './Components/Rodape'
import { store } from './Store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Rodape />
      </BrowserRouter>
    </Provider>
  )
}

export default App
