import { useState } from 'react'
import NavBar from './components/NavBar'
import MonProfil from './components/MonProfil'
import AnimatedBackground from './components/AnimatedBackground'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AnimatedBackground/>
      <NavBar/>
      <MonProfil/>
    </>
  )
}

export default App
