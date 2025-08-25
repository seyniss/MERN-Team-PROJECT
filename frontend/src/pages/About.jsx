import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Back from '../components/Back'
import './About.css'

const About = ({ buckets, toggleBucket, deleteBucket }) => {
  const nav = useNavigate()
  const { id } = useParams();
  const current = buckets.find(i => String(i._id) === id)

  if (!current) {
    return <div className="Editor">존재하지 않는 페이지입니다.</div>
  }

  return (
    <>
      <Header title="버킷 상세 정보" />
      <Back />

      {/* 👉 여기서부터 Editor 박스 시작 */}
      <div className="Editor">
        <div className="input-group">
          <label>제목</label>
          <p>{current.title}</p>
        </div>

        <div className="input-group">
          <label>내용</label>
          <p>{current.text}</p>
        </div>

        <div className="input-group">
          <label>시작일</label>
          <p>{new Date(current.startDate).toLocaleDateString()}</p>
        </div>

        <div className="input-group">
          <label>종료일</label>
          <p>{new Date(current.endDate).toLocaleDateString()}</p>
        </div>

        <div className="input-group">
          <label>이미지</label>
        <img src={current.img}/>

        </div>

        <div className="input-group">
          <label>카테고리</label>
          <div className="category-box">{current.category}</div>
        </div>

        <div className="input-group">
          <label>완료 여부</label>
          <input
            type="checkbox"
            checked={current.isCompleted}
            onChange={() => toggleBucket(current._id, !current.isCompleted)}
          />
        </div>

        <div className="button-group">
          <Link to={`/edit/${current._id}`}>
            <button type="button">수정</button>
          </Link>
          <button
            type="submit"
            onClick={() => { deleteBucket(current._id); nav(-1) }}
          >
            삭제
          </button>
        </div>
      </div>
    </>
  )
}

export default About
