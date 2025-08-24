import React from 'react'
import { Link, } from 'react-router-dom'
import Header from '../components/Header'
import BucketList from '../components/BucketList'
import './Home.css'


const Home = ({ buckets, deleteBucket, toggleBucket }) => {
  return (
    <div className='bucket-wrapper'>
      <Header />
      <Link to="/new" className="bucket-btn">bucketlist➕</Link>
      <BucketList buckets={buckets} deleteBucket={deleteBucket} toggleBucket={toggleBucket} />
    </div>
  );
};

export default Home