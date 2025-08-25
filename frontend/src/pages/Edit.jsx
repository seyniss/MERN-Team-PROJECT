import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Editor from '../components/Editor'
import Header from '../components/Header'

const Edit = ({ buckets, updateBucket }) => {
  const { id } = useParams()
  const nav = useNavigate()
  const currentBucket = buckets.find(item => String(item._id) === id)
  const handleSubmit = (data) => {
    if (window.confirm("정말 수정할까요?")) {
      updateBucket(id, data)
      nav('/', { replace: true })
    }
  }
  if (!currentBucket) {
    return <div>존재하지 않는 페이지입니다.</div>
  }
  return (
    <div>
      <Header title="버킷 수정" />
      <Editor onSubmit={handleSubmit} initData={currentBucket} />
    </div>
  )
}

export default Edit