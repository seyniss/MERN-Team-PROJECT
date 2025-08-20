import React, { useState } from 'react'
import './BucketItem.css'

const BucketItem = () => {

  return (
    <div className='BucketItem'>
      <div className="content">
        <p>버킷리스트 / 카테고리 / 체크박스</p>
        <div className="btn-wrap">
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
    </div>
  )
}

export default BucketItem