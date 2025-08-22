import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const New = ({ createBucket }) => {
  const nav = useNavigate()
  const [title, setTitle] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) {
      alert("내용을 입력해주세요.")
      return
    }
    createBucket(title.trim())
    nav('/', { replace: true })
  }
  return (
    <div>
      <form className='TodoEditor' onSubmit={handleSubmit}>
        <input type="text" placeholder='새로운 버킷을 입력하세요' value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="button" onClick={() => nav(-1)}>{'<'}</button>
        <button type='submit' disabled={!title.trim()}>추가</button>
      </form>
    </div>
  )
}

export default New