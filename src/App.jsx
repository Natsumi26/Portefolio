import { useState } from 'react'
import NavBar from './components/NavBar'
import MonProfil from './components/MonProfil'
import AnimatedBackground from './components/AnimatedBackground'
import Space from './components/space'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AnimatedBackground className="absolute inset-0 z-0"/>
      <NavBar className="relative z-20"/>
      <Space className="relative z-10"/>
      <MonProfil className="relative z-10"/>
      <Space className="relative z-10"/>
    </>
  )
}

export default App
