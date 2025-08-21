import './App.css'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import About from './pages/About'
import { useEffect, useState } from 'react'
import axios from 'axios'
import BucketList from './components/BucketList'

function App() {
  const API = `${import.meta.env.VITE_API_URL}/api/buckets`
  const [buckets, setBuckets] = useState([])
  useEffect(() => {
    const bucketLoad = async () => {
      try {
        const res = await axios.get(API)
        const bucket = Array.isArray(res.data) ? res.data : res.data.buckets ?? []
        setBuckets(bucket)
        console.log(bucket)
      } catch (error) {
        console.log("가져오기 실패", error)
      }
    }
    bucketLoad()
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<BucketList buckets={buckets} />}  />
        <Route path='/About' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
