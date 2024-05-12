import React, { useEffect, useState } from 'react';
import SinglePost from '../components/Blog/single-post/SinglePost';
import RecentPost from '../components/Blog/recents/RecentPost';
import { useParams } from 'react-router-dom';
import { supabase } from '../superbase';
import PageTitle from '../components/Nav/Meta/PageTitle';
import ReactLoading from "react-loading";

const SingleBlog = () => {
  const [post, setPost] = useState(null);
  const [recentPost, setRecentPost] = useState(null) 
  const [loading, setLoading] = useState(true);
  const [loadRecent, setLoadRecent] = useState(true);
  const [recentError, setRecentError] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();
  const id = params.id;

  const getSingleBlog = async() => {
    try {
      let { data, error } = await supabase.from('posts').select('id, title, content, timestamp, image, slug, users(username)').eq('slug', id).single();
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

  const getRecentPost = async () => {
    try {
      let { data, error } = await supabase.from('posts').select('id, title, content, timestamp, slug').order('timestamp', { ascending: false }).range(0, 2);
      if(data){
        setRecentPost(data)
      }else{
        throw new Error('Post not found')
      }
    }catch(error){
      setRecentError(error.message)
    }finally{
      setLoadRecent(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    getSingleBlog();
  }, [id]); 

  useEffect(() => {
    getRecentPost();
  }, []); 

  return (
    <>
      <PageTitle title={params.id}/>
      <div className='single-post'>
        <div className='item-main'>
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
        </div>    
        <div className='item-recent'>
            {loadRecent ? (
              <div className='loading-screen'>
                <ReactLoading type="bars" color="#ffa500" height={300} width={50} />
              </div>
            ) : recentError ? (
              <div className='loading-screen'>
                  <h1>Oops!</h1>
                  <p>An error occured while fetching recent posts!</p>
              </div>
            ) : recentPost ? (
              <RecentPost recent={recentPost}/>
            ) : null}
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
