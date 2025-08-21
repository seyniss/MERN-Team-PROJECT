import React, { useState } from 'react'
import './BucketItem.css'
import { Link } from 'react-router-dom'

const BucketItem = ({ bucket }) => {

  return (
    <div className='BucketItem'>
      <div className="content">
        <div>
          <Link to="/about" className="title">{bucket.title}</Link>
        </div>
        <input type="checkbox" className="check" />
        <div className="btn-wrap">
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
    </div>
  )
}

export default BucketItem