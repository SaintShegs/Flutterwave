import React, { useState,useEffect } from 'react'
import BlogList from './BlogList';

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    const [loading, setLoading] = useState(true);



   /**
    * It fetches data from the API and sets the data to the state.
    */
    const data=async ()=>{
        try {
            setLoading(true);
            const response = await fetch('https://techcrunch.com/wp-json/wp/v2/posts');
            const data = await response.json();
            setBlogs(data);
            console.log(data);
    
            setTimeout(() => {
            setLoading(false);
            }, 1000);
        }
        catch(error){
            console.log(error);
            alert("Your request cannot be completed, Please check your connection and try again.")
        }
    }
    

/* A hook that is used to fetch data from an API. */
    useEffect(()=>{  
        data();
    }
    ,[]);



  return (
    <div>
        {/* Passing the data to the BlogList component. which is a reuseable component */}
        <BlogList posts={blogs} loading={loading}/>
    </div>
  )
}

export default Blog