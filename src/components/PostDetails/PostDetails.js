import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const {postId} =  useParams()
  const [postDetails, setPostDetails] = useState({});
  const [comment, setComment] = useState([]);

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(data => setPostDetails(data));
    
},[postId]);

useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => response.json())
    .then(data => setComment(data));
    
},[postId]);

 const {title, body} = postDetails;


    return (
        <div className='container'>
            <h1> {title}</h1>
            <div className="body">{body}</div>
            {
               comment.map(com => <div className='container'> 
                  <span>{com.name}</span> 
                   <div >{com.body}</div>
                </div>) 
            }



        </div>
    );
};

export default PostDetails;