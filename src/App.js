import React from 'react'
import { useGlobalContext } from './context'
import Navbar from './Navbar'
import Home from './Home'
import Section from './Section'
import Footer from './Footer'

function App() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <Home />
      <Section />
      <Footer />
    </main>
  )
}

export default App
