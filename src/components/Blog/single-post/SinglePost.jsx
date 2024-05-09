import React from 'react'
import '../single-post/SinglePost.css'

const SinglePost = () => {
  return (
    <div className='single-post-card'>
      <div className='image-container'>
         <img src={process.env.PUBLIC_URL + '/assets/post-image.jpg'} alt="post-image"/>
      </div>
        <div className='post-content'>
          <div className='author-info'>
             <ul>
               <li>AUTHOR</li>
               <p>Makanju Oluwafemi</p>
             </ul>
             <ul>
               <li>PUBLISH DATE</li>
               <small>06 july 2025</small>
             </ul>
          </div>
          <h1>Sporbee Creator Sportlight: Designers who photograph thier cuties</h1>
          <p>
          here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
      </div>
    </div>
  )
}

export default SinglePost