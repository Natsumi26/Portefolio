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
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      
        <AnimatedBackground className="absolute inset-0 z-0" darkMode={darkMode}/>
          <div className='relative z-10'>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <MonProfil/>
            <Space/>
            <Portefolio/>
            <Space/>
            <Cv/>
            <Space/>
            <Footer/>
          </div>
        
      </div>
  );

}

export default App
