import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
           <Link to='/'><div className='header'>
               <img src="https://upload.wikimedia.org/wikipedia/en/0/02/DotBlog_domain_logo.png" alt="" />
            </div></Link> 
        </div>
    );
};

export default Header;