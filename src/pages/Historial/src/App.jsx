import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Historial from "./pages/Historial/Historial";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Historial />
    </>
  )
}

export default App
