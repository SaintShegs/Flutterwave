import React, { useState,useEffect } from 'react'
import BlogList from './BlogList';

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    const [loading, setLoading] = useState(true);



    const data=async ()=>{
        setLoading(true);
        const response = await fetch('https://techcrunch.com/wp-json/wp/v2/posts');
        const data = await response.json();
        setBlogs(data);
        console.log(data);

        setTimeout(() => {
        setLoading(false);
        }, 1000);

    }
    


    useEffect(()=>{

        
        data();

    }
    ,[]);



  return (
    <div>
        <BlogList posts={blogs} loading={loading}/>

        
        {/* <BlogList posts={blogs}/> */}

    </div>
  )
}

export default Blog