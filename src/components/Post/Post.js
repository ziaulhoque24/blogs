import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Post.css'
const Post = ({pp}) => {
    const {id, title , body }  = pp;

    return (
        <div className='container'>
          <div className="title">{title}</div>
          <div className="body">{body.slice(0,50)}..<br /><Link to={`post/${id}`}><b>Read More</b></Link></div>
        </div>
    );
};

export default Post;