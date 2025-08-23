import './BucketList.css'
import BucketItem from './BucketItem'

const BucketList = ({ buckets, deleteBucket, toggleBucket }) => {

  return (
    <div className='TodoList'>
      <h4>Todo List ☑️</h4>
      <input type="text" placeholder='검색어 입력' />
      <div className="todos-wrapper">
        {buckets.map((bucket, i) => (
          <BucketItem key={i} bucket={bucket} deleteBucket={deleteBucket} toggleBucket={toggleBucket} />
        ))}
      </div>
    </div>
  )
}

export default BucketList