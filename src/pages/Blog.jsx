import React from 'react'
import PostCard from '../components/Blog/cards/PostCard'

const Blog = () => {
  return (
    <div className='blog-main'>
       <div className='blog-wrapper'>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
        <div className='blog-is-empty'>
            <h4>Check back Later, No available post</h4>
        </div>
    </div> 
    )
}

export default Blog