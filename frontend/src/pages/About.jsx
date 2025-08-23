import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Back from '../components/Back'

const About = ({ buckets, toggleBucket, deleteBucket }) => {
  const nav = useNavigate()
  const { id } = useParams();
  const current = buckets.find(i => String(i._id) === id)
  if (!current) {
    return <div>존재하지 않는 페이지입니다.</div>
  }
  return (
    <div>
      <Header title="버킷 상세 정보" />
      <Back />
      <h4>{current.title}</h4>
      <p>내용: {current.text}</p>
      <p>시작일: {new Date(current.startDate).toLocaleDateString()}</p>
      <p>종료일: {new Date(current.endDate).toLocaleDateString()}</p>
      <p>종료일: {new Date(current.endDate).toLocaleDateString()}</p>
      <p>{current.img}</p>
      <p>{current.category}</p>
      <input type="checkbox" className="check" checked={current.isCompleted} onChange={() => toggleBucket(current._id, !current.isCompleted)} />
      <Link to={`/edit/${current._id}`}>수정</Link>
      <button onClick={() => { deleteBucket(current._id); nav(-1) }}>삭제</button>
    </div >
  )
}

export default About