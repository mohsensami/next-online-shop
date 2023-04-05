import React from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <h2>FC Market</h2>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
