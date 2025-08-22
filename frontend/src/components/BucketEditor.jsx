import React, { useState } from 'react'
import './BucketEditor.css'
import { Link } from 'react-router-dom'

const BucketEditor = () => {
  return (
    <form className='TodoEditor'>
      <Link to='/new'>추가</Link>
    </form>
  )
}

export default BucketEditor