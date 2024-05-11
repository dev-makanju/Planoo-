import React, { useEffect, useState } from 'react';
import SinglePost from '../components/Blog/single-post/SinglePost';
import RecentPost from '../components/Blog/recents/RecentPost';
import { useParams } from 'react-router-dom';
import { supabase } from '../superbase';
import PageTitle from '../components/Nav/Meta/PageTitle';
import ReactLoading from "react-loading";

const SingleBlog = () => {
  const [post, setPost] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  
  const getSingleBlog = async() => {
    const id = params.id;
    try {
      let { data, error } = await supabase.from('posts').select('id, content, timestamp, image, slug, users(username)').eq('slug', id).single();
      if(data){
        setPost(data); 
      } else {
        throw new Error('Post not found');
      }
    } catch(error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleBlog();
  }, []); 

  return (
    <>
      <PageTitle title={params.id}/>
      <div className='single-post'>
        {loading ? (
          <div className='loading-screen'>
            <ReactLoading type="bars" color="#ffa500" height={300} width={50} />
          </div>
        ) : error ? (
          <div className='loading-screen'>
              <h1>Oops!</h1>
              <p>An error occured, this might be an issue with our internet</p>
          </div>
        ) : post ? (
          <SinglePost post={post}/> 
        ) : null}
        <div>
          <RecentPost/>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
