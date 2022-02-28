import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Post from '../Post/Post';
import './Posts.css';
const Posts = () => {
    let [posts , setPost] = useState([]);
    posts = posts.slice(0, 10);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPost(data));
        
    },[setPost]);
    console.log(posts)
    return (
        <div >
            <div className="container1">
                
            { posts.map(pp => <Post pp={pp}/>)}
            </div>
        </div>
    );
};

export default Posts;