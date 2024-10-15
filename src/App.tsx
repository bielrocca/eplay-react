import React from 'react'

import { GlobalStyle, Container } from './styles'
import Header from './Components/Header'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
    </>
  )
}

export default App
