import React from 'react'
import '../single-post/SinglePost.css'
import {formatTime} from '../../../utils/utils'

const SinglePost = ({post}) => {
  return (
    <div className='single-post-card'>
      <div className='image-container'>
         <img src={process.env.PUBLIC_URL + '/assets/post-image.jpg'} alt="post-image"/>
      </div>
        <div className='post-content'>
          <div className='author-info'>
             <ul>
               <li>AUTHOR</li>
               <p>{post.users.username}</p>
             </ul>
             <ul>
               <li>PUBLISH DATE</li>
               <small>{formatTime(post.timestamp)}</small>
             </ul>
          </div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
      </div>
    </div>
  )
}

export default SinglePost