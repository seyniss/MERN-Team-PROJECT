import React, { useMemo, useState } from 'react'
import './BucketList.css'
import BucketItem from './BucketItem'

const BucketList = () => {

  return (
    <div className='TodoList'>
      <h4>Todo List ☑️</h4>
      <input type="text" placeholder='검색어 입력' />
      <div className="todos-wrapper">
        <BucketItem />
        <BucketItem />
        <BucketItem />
      </div>
    </div>
  )
}

export default BucketList