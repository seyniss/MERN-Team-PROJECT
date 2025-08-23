import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import BucketList from '../components/BucketList'

const Home = ({ buckets, deleteBucket, toggleBucket }) => {
  return (
    <div>
      <Header />
      <Link to="/new">추가</Link>
      <BucketList buckets={buckets} deleteBucket={deleteBucket} toggleBucket={toggleBucket} />
    </div>
  );
};

export default Home