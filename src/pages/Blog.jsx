import React, { useEffect, useState } from 'react'
import PostCard from '../components/Blog/cards/PostCard'
import PageTitle from '../components/Nav/Meta/PageTitle'
import {supabase} from '../superbase';
import ReactLoading from "react-loading";

const Blog = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const getBlogData = async () => {  
        try {
            let { data: fetchedPosts, error } = await supabase.from('posts').select('*');
            if (error) {
                throw error;
            }
            if (fetchedPosts) {
                setPosts(fetchedPosts);
            }
        }catch(error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getBlogData();
    },[])

  return (
    <>
        <PageTitle title='Blog'/>
        <div className='blog-main'>
            {loading ? (
                <div className='loading-screen'>
                    <ReactLoading type="bars" color="#ffa500"
                height={300} width={50} />
                </div>
            ) : error ? (
                <div className='loading-screen'>
                    <h1>Oops!</h1>
                    <p>An error occured, this might be an issue with our internet</p>
                </div>
            ) : (
                <div className='blog-wrapper'>
                    {posts.map((post) => (
                        <PostCard key={post.id} content={post}/>
                    ))}
                </div>
            )}
        </div> 
    </>
    )
}

export default Blog