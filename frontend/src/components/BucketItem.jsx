import React, { useState } from 'react'
import './BucketItem.css'
import { Link, useNavigate } from 'react-router-dom'

const BucketItem = ({ bucket, deleteBucket, toggleBucket }) => {
  const nav = useNavigate()
  return (
    <div className='BucketItem'>
      <div className="content">
        <div>
          <Link to={`/about/${bucket._id}`} className="title">{bucket.title}</Link>
        </div>
        <div className="btn-wrap">
        <input type="checkbox" className="check" checked={bucket.isCompleted} onChange={() => toggleBucket(bucket._id, !bucket.isCompleted)} />
        
          <Link to={`/edit/${bucket._id}`}>
            <button>수정</button>
          </Link>
          <button onClick={() => deleteBucket(bucket._id)}>삭제</button>
        </div>
      </div>
    </div>
  )
}

export default BucketItem