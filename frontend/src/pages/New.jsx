import React from 'react'
import { useNavigate } from 'react-router-dom'
import Editor from '../components/Editor'
import Header from '../components/Header'
import Back from '../components/Back'

const New = ({ createBucket }) => {
  const nav = useNavigate()

  const handleSubmit = (data) => {
    createBucket(data)
    nav('/', { replace: true })
  }

  return (
    <div>
      <Header title="새 버킷 작성" />
      <Back />
      <Editor onSubmit={handleSubmit} />
    </div>
  )
}

export default New