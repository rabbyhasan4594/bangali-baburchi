import React from 'react';
import NavigationBar from '../../NavigationBar/NavigationBar';
import Footer from '../../Footer/Footer';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipes = () => {
    const {id} = useParams();
    const ChefRecipes = useLoaderData();
    console.log(ChefRecipes)
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Footer></Footer>
        </div>
    );
};

export default ChefRecipes;