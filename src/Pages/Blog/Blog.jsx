import React from 'react';
import NavigationBar from '../../NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h3>Blog</h3>
            <Outlet></Outlet>

        </div>
    );
};

export default Blog;