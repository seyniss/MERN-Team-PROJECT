import './App.css'
import Home from './pages/Home'

function App() {
  const API = `${import.meta.env.VITE_API_URL}/api/todos`

  return (
    <div className='App'>
      <Home />
    </div>
  )
}

export default App
