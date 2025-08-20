import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
      <h1>버킷 리스트📝</h1>
      <h4>{new Date().toLocaleString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</h4>
    </header>
  )
}

export default Header