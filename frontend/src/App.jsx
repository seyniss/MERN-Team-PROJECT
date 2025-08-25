import './App.css'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import About from './pages/About'
import { useEffect, useState } from 'react'
import New from './pages/New'
import Edit from './pages/Edit'
import { api, ensureGuestAuth } from './context/AuthContext'

function App() {
  const API = `${import.meta.env.VITE_API_URL}/api/buckets`
  const [buckets, setBuckets] = useState([])
  useEffect(() => {
    const bucketLoad = async () => {
      try {
        await ensureGuestAuth()
        const res = await api.get(API)
        const bucket = Array.isArray(res.data) ? res.data : res.data.buckets ?? []
        setBuckets(bucket)
        console.log(bucket)
      } catch (error) {
        console.log("가져오기 실패", error)
      }
    }
    bucketLoad()
  }, [])

  const createBucket = async (bucketData) => {
    if (!bucketData.title?.trim() || !bucketData.text?.trim() || !bucketData.startDate || !bucketData.endDate
    ) {
      alert("제목, 내용, 시작일, 종료일은 필수 항목입니다.")
      return
    }
    const payload = {
      title: bucketData.title.trim(),
      text: bucketData.text.trim(),
      startDate: bucketData.startDate,
      endDate: bucketData.endDate,
      img: bucketData.img,
      category: bucketData.category
    }
    try {
      const res = await api.post(API, payload)
      const created = res.data?.bucket ?? res.data
      if (Array.isArray(res.data?.buckets)) {
        setBuckets(res.data.buckets)
      } else {
        setBuckets((p) => [created, ...p])
      }
    } catch (error) {
      console.log("실패", error)
    }
  }
  const updateBucket = async (id, data) => {
    try {
      const res = await api.patch(`${API}/${id}`, data)
      const updatedBucket = res.data?.bucket ?? res.data
      setBuckets(buckets.map((item) => String(item._id) === String(id) ? updatedBucket : item))
    } catch (error) {
      console.error("업데이트 실패:", error)
    }
  }
  const deleteBucket = async (_id) => {
    try {
      if (window.confirm("정말 삭제하시겠습니까?")) {
        await api.delete(`${API}/${_id}`)
        setBuckets(buckets.filter((item) => String(item._id) !== String(_id)))
      }
    } catch (error) {
      console.error("삭제 실패:", error)
    }
  }
  const toggleBucket = async (_id, isCompleted) => {
    try {
      await api.patch(`${API}/${_id}`, { isCompleted })
      setBuckets((prevBuckets) =>
        prevBuckets.map((item) =>
          String(item._id) === String(_id)
            ? { ...item, isCompleted: isCompleted }
            : item
        )
      )
    } catch (error) {
      console.error("토글 실패:", error)
    }
  }
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home buckets={buckets} deleteBucket={deleteBucket} toggleBucket={toggleBucket} />} />
        <Route path="/new" element={<New createBucket={createBucket} />} />
        <Route path="/edit/:id" element={<Edit buckets={buckets} updateBucket={updateBucket} />} />
        <Route path="/about/:id" element={<About buckets={buckets} toggleBucket={toggleBucket} deleteBucket={deleteBucket} />} />
      </Routes>
    </div>
  )
}

export default App
