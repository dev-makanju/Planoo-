import React from 'react';
import '../single-post/SinglePost.css';
import { formatTime } from '../../../utils/utils';
import MarkDown from '../markdown/MarkDown';

const SinglePost = ({ post }) => {
  return (
    <div className='single-post-card'>
      <div className='image-container'>
        <img src={post.image} alt='post-image' />
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
        <MarkDown content={post.content}/>
      </div>
    </div>
  );
};

export default SinglePost;
