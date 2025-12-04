import { useState } from 'react'
import NavBar from './components/NavBar'
import MonProfil from './components/MonProfil'
import AnimatedBackground from './components/AnimatedBackground'
import Space from './components/space'
import Portefolio from './components/Portefolio'
import Cv from './components/Cv'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
    <AnimatedBackground className="absolute inset-0 z-0"/>
      <NavBar/>
      <Space className="relative z-10"/>
      <MonProfil className="relative z-10"/>

      <Space className="relative z-10"/>
      <Portefolio className="relative z-10"/>
      <Space className="relative z-10"/>
      <Cv className="relative z-10"/>
      <Space className="relative z-10"/>
      <Footer className="relative z-10"/>
    </>
  )
}

export default App
