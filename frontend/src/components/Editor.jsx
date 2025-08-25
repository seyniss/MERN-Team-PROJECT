import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './BucketEditor.css'

const Editor = ({ onSubmit, initData }) => {
  const nav = useNavigate()
  const [input, setInput] = useState({
    title: "",
    text: "",
    startDate: "",
    endDate: "",
    img: "",
    category: ""
  })
  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        startDate: new Date(initData.startDate).toISOString().slice(0, 10),
        endDate: new Date(initData.endDate).toISOString().slice(0, 10)
      })
    }
  }, [initData])
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(input)
  }
  return (
    <form className='Editor' onSubmit={handleSubmit}>
      <div className="input-group">
        <label>제목</label>
        <input name="title" value={input.title} onChange={handleChange} required />
      </div>
      <div className="input-group">
        <label>내용</label>
        <textarea name="text" value={input.text} onChange={handleChange} required />
      </div>
      <div className="input-group">
        <label>시작일</label>
        <input name="startDate" type="date" value={input.startDate} onChange={handleChange} required />
      </div>
      <div className="input-group">
        <label>종료일</label>
        <input name="endDate" type="date" value={input.endDate} onChange={handleChange} required />
      </div>
      <div className="input-group">
        <label>이미지</label>
        <input name="img" value={input.img} onChange={handleChange} />
        <img src={input.img}/>
      </div>
      <div className="input-group">
        <label>카테고리 (선택)</label>
        <input name="category" value={input.category} onChange={handleChange} />
      </div>
      <div className="button-group">
        <button type="button" onClick={() => nav(-1)}>{'취소'}</button>
        <button type='submit'>{initData ? '수정 완료' : '추가'} </button>
      </div>
    </form>
  )
}

export default Editor