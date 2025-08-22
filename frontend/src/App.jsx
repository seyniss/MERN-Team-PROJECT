import './App.css'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import About from './pages/About'
import { useEffect, useState } from 'react'
import axios from 'axios'
import BucketList from './components/BucketList'
import Editor from './pages/Editor'
import New from './pages/New'

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

  const createBucket = async (title) => {
    if (!title.trim()) return
    try {
      const res = await axios.post(API, { title: title.trim() })
      const created = res.data?.bucket ?? res.data
      if (Array.isArray(res.data?.buckets)) {
        setBuckets(res.data.buckets)
      } else {
        setBuckets(p => [created, ...p])
      }
    } catch (error) {
      console.log('실패', error)
    }
  }

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home buckets={buckets} />} />
        <Route path="/list" element={<BucketList />} />
        <Route path='/About/:id' element={<About buckets={buckets} />} />
        <Route path='/new' element={<New />} createBucket={createBucket} />
      </Routes>
    </div>
  )
}

export default App
