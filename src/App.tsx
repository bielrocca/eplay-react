import React from 'react'

import { GlobalStyle } from './styles'
import Header from './Components/Header'
import Banner from './Components/Banner'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <Banner />
    </>
  )
}

export default App
