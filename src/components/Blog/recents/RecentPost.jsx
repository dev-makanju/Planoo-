import React from 'react'
import RecentCard from '../recents/RecentCard'
import '../recents/recent.css'

const RecentPost = () => {
  return (
    <div className='recent-p'>
      <h2>RECENT POSTS</h2>
      <div className='recents'>
        <RecentCard/>
        <RecentCard/>
        <RecentCard/>
      </div>
    </div>
  )
}

export default RecentPost