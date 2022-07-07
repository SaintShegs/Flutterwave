import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = (props) => {

    const Links = document.querySelectorAll('[role="link"]');

    for(let i = 0; i < Links.length; i++) {
  Links[i].addEventListener('click', navigateLink);
  Links[i].addEventListener('keydown', navigateLink);
}

//handles clicks and keydowns on the link
function navigateLink(e) {
    if (e.type === 'click' || e.key === 'Enter') {
        let ref = e.target != null ? e.target : e.srcElement;
        if (ref) {
          window.open(ref.getAttribute('to'), '_blank');
        }
    }
}


    
  return (
    <div className='blogs'>

    {/* A ternary operator. It is a shorthand for an if/else statement.
    If the data is not ready, display Loading.
    otherwise display the data */}
    
        {props.loading ? <h1>Loading... <i className="fas fa-cog fa-spin"></i></h1> : props.posts.map((post,index)=>{
            return(

                <div className='blog' key={index}>
                <div className="blog__image">
                    <img src={post.jetpack_featured_media_url} alt="logo" loading='lazy' />
                </div>

                <div className="blog__info">
                    <div className="blog__title">
                        <h3 dangerouslySetInnerHTML={{__html:post.title["rendered"]}}></h3>
                    </div>
                    <div className="blog__content">
                        <p className='blog__content__para' dangerouslySetInnerHTML={{__html:post.excerpt["rendered"]}}></p>
                    </div>
                </div>

                <div className="blog__footer">
                    <div className="blog__footer__date">
                        <p>{post.date}</p>
                    </div>
                    <div className="blog__footer__readmore">
                        <Link role="link" to={`/BlogDetail/${post.id}`} >Read Full  <i className="fa fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>

            
            )})}
    </div>
  )
}

export default BlogList