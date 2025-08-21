import './BucketList.css'
import BucketItem from './BucketItem'
import { Link } from 'react-router-dom';
import About from '../pages/About'

const BucketList = () => {

  return (
    <div className='TodoList'>
      <h4>Todo List ☑️</h4>
      <input type="text" placeholder='검색어 입력' />
      <div className="todos-wrapper">
        <BucketItem />
        <BucketItem />
        <BucketItem />
        <Link to="/about"></Link>
      </div>
    </div>
  )
}

export default BucketList