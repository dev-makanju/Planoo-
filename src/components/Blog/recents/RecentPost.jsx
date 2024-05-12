import React from 'react'
import RecentCard from '../recents/RecentCard'
import '../recents/recent.css'

const RecentPost = ({recent}) => {
  return (
    <div className='recent-p'>
      <h2>RECENT POSTS</h2>
      <div className='recents'>
        {  recent.map( (item) => {
          return <RecentCard post={item}/>
        })}
      </div>
    </div>
  )
}

export default RecentPost