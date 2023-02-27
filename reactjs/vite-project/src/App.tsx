import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Accueil from './Pages/Accueil'
import NavBar from './Composant/NavBar'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './Composant/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <NavBar />
       <Outlet />
       <Footer />
       {/* <Accueil /> */}
      
    </div>
  )
}

export default App
