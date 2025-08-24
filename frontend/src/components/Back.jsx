import React from 'react'
import './BucketEditor.css'
import { useNavigate } from 'react-router-dom'
import './Back.css'

const Back = () => {
    const nav = useNavigate()
    return (
        <div>
            <button className='back-btn' onClick={() => nav(-1)}>{'이전'}</button>
        </div>
    )
}

export default Back