import './App.css'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import About from './pages/About'

function App() {
  const API = `${import.meta.env.VITE_API_URL}/api/todos`

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='../pages/About' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
