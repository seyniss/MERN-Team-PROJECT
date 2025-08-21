import React from 'react'
import About from './About'
import Header from '../components/Header'
import BucketList from '../components/BucketList'
import BucketEditor from '../components/BucketEditor'

const Home = ({ buckets }) => {
    return (
        <div>
            <Header />
            <BucketEditor />
            <BucketList buckets={buckets} />
        </div>
    )
}

export default Home