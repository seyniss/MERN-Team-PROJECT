import './BucketList.css'
import BucketItem from './BucketItem'
import { Link } from 'react-router-dom';

const BucketList = ({ buckets }) => {

  return (
    <div className='TodoList'>
      <h4>Todo List ☑️</h4>
      <input type="text" placeholder='검색어 입력' />
      <div className="todos-wrapper">
        {buckets.map((bucket, i) => (
          <BucketItem key={i} bucke={buckets} />
        ))}
        <Link to="/about">about</Link>
      </div>
    </div>
  )
}

export default BucketList