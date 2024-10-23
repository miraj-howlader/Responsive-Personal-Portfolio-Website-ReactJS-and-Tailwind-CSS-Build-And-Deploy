import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Services from './components/Services'
import Footer from './components/Footer'

const App = () => {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Services/>
      <Footer/>
      
    </div>
  )
}

export default App
