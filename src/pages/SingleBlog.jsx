import React from 'react'
import SinglePost from '../components/Blog/single-post/SinglePost'
import RecentPost from '../components/Blog/recents/RecentPost'

const SingleBlog = () => {
  return (
    <>
      <title>My Site: Contact Us</title>
      <div className='single-post'>
        <div>
          <SinglePost/>
        </div>
        <div>
          <RecentPost/>
        </div>
      </div>
    </>
  )
}

export default SingleBlog