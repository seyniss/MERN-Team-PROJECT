import React from 'react'
import About from './About'
import Header from '../components/Header'
import BucketList from '../components/BucketList'
import BucketEditor from '../components/BucketEditor'

const Home = () => {
    return (
        <div>
            <Header />
            <BucketEditor />
            <BucketList />
        </div>
    )
}

export default Home