import './BucketList.css'
import BucketItem from './BucketItem'
import { useState } from 'react'

const BucketList = ({ buckets, deleteBucket, toggleBucket }) => {
  const [search, setSearch] = useState("")
  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }
  const getFilteredData = () => {
    if (search === "") {
      return buckets
    }
    return buckets.filter((bucket) =>
      bucket.title.toLowerCase().includes(search.toLowerCase())
    )
  };
  const filteredBuckets = getFilteredData()
  return (
    <div className='TodoList'>
      <h4>Bucket List ☑️</h4>
      <input value={search} onChange={onChangeSearch} type="text" placeholder='검색어 입력하세요!' />
      <div className="todos-wrapper">
        {filteredBuckets.map((bucket) => (<BucketItem key={bucket._id} bucket={bucket} deleteBucket={deleteBucket} toggleBucket={toggleBucket} />))}
      </div>
    </div>
  )
}

export default BucketList