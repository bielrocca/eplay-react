import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalStyle } from './styles'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Produto from './Components/Produto'
import ListaDProdutos from './Components/ListaDProdutos'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ListaDProdutos title="Promoções" background="grey" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
