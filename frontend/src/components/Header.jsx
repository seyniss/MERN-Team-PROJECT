import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='empty-box'>
      <h1>BUCKET LIST</h1>
      <h3>Have a nice day:D</h3>
      </div>
      <h4>{new Date().toLocaleString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</h4>
    </header>
  )
}

export default Header