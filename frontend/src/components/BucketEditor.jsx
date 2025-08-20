import React, { useState } from 'react'
import './BucketEditor.css'

const BucketEditor = () => {
  
  return (
    <form className='TodoEditor'>
      <input type="text" placeholder='new Todo' />
      <button type='submit' >추가</button>
    </form>
  )
}

export default BucketEditor