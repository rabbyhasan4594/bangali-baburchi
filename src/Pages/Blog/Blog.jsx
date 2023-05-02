import React from 'react';
import NavigationBar from '../../NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';

const Blog = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h3>Blog</h3>
            
            <Footer></Footer>

        </div>
    );
};

export default Blog;