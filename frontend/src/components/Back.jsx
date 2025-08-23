import React from 'react'
import './BucketEditor.css'
import { useNavigate } from 'react-router-dom'

const Back = () => {
    const nav = useNavigate()
    return (
        <div>
            <button onClick={() => nav(-1)}>{'<'}</button>
        </div>
    )
}

export default Back