import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BlogList from './BlogList';

const BlogDetail = () => {

    let {info} = useParams();

    const [moreInfo, setMoreinfo] = useState(null);

    const [moreArticles, setmoreArticles] = useState([]);

    const [loading, setLoading] = useState(true);

 /**
  * It fetches data from the WordPress API and sets the data to the state.
  * Display an error message if the data is not fetched.
  */
    const articles = async () => {
      try {
        const response = await fetch(
          `https://techcrunch.com/wp-json/wp/v2/posts`
        );
        const data = await response.json();
        setmoreArticles(data);
        console.log(data);
      } catch (error) {
        console.log(error);
                    alert("Your request cannot be completed, Please check your connection and again.")

      }
    };

/**
 * It fetches data from the API and sets the data to the state.
 * display an error message if data is not fetched.
 */
    const data = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://techcrunch.com/wp-json/wp/v2/posts/${info}`
        );
        const data = await response.json();
        setMoreinfo(data);
        console.log(data);

        setTimeout(() => {
          setLoading(false);
        }, 100);
      } catch (error) {
        console.log(error);
        alert("Your request cannot be completed, Please check your connection and again.")

      }
    };


    /* Slicing the array of articles to only 3 articles. */
    const slicedArticle=moreArticles.slice(0,3);

/* A hook that is used to fetch data from the API. */
    useEffect(() => {
        data();
        articles();
        window.scrollTo({ behavior: 'smooth', top: '0px' })
    }
        , [info]);

    
  
  return (
      <div className='blog__details'>

     {/*A ternary operator. It is used to check if the loading is true or false. If it is true, it will
     display the loading icon. If it is false, it will display the blog details. */ }

      {loading ? <h1>Please wait... <i className="fas fa-cog fa-spin"></i></h1> :
        <div className='blog__detail'>
            <div className="blog__detail__author">
                <h3>By: {Object.values(moreInfo.parsely.meta.author)[0].name}</h3>
            </div>
            <div className="blog__detail__title">
                <h2 dangerouslySetInnerHTML={{__html:moreInfo.title["rendered"]}}></h2>
            </div>
            <div className='blog__detail__image'>
                <img src={moreInfo.jetpack_featured_media_url} alt="logo"/>
            </div>
            <div className="blog__detail__content" dangerouslySetInnerHTML={{__html:moreInfo.content["rendered"]}}>
               
            </div>

            <div>
                <Link role="link" to="/"><i className="fa fa-arrow-left"></i> Back to Blogs</Link>
            </div>
        </div>
        }

        {loading ? <h1></h1> :
        <div className="more__article">
            <h2>More Articles</h2>


            <BlogList posts={slicedArticle}/>
        </div>

    }



       



    </div>
  )
}

export default BlogDetail