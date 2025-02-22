import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Dashboard from './components/dashborad'
import landpage

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      WELCOME TO ARGN WHERE DREAMS COMES TRUE 
    </>
  )
}

export default App
