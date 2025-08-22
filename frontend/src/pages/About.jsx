import React from 'react'
import { useParams } from 'react-router-dom'

const About = ({ buckets }) => {
  const { id } = useParams()
  const current = buckets.find(i => String(i._id) === id)
  if (!current) {
    return console.log('존재하지 않는 페이지')
  }
  const stringDate = (dates) => {
    let year = dates.getFullYear()
    let month = dates.getMonth() + 1
    let date = dates.getDate()
    if (month < 10) {
      month = `0${month}`;
    }
    if (date < 10) {
      date = `0${date}`;
    }
    return `${year}-${month}-${date}`
  }
  return (
    <div>
      <h4>{current.title}</h4>
      <div>
        <input type="date" value={stringDate(new Date(current.date))} disabled />
        <p>{current.text}</p>
      </div>
    </div>
  )
}

export default About