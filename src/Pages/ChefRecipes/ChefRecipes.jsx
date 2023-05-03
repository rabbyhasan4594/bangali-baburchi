import React from 'react';
import NavigationBar from '../../NavigationBar/NavigationBar';
import Footer from '../../Footer/Footer';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefRecipeBanner from '../ChefRecipeBanner/ChefRecipeBanner';

const ChefRecipes = () => {
    const {id} = useParams();
    const ChefRecipes = useLoaderData();
    console.log(ChefRecipes)
    return (
        <div>
            <NavigationBar></NavigationBar>
            <ChefRecipeBanner 
             key={ChefRecipes.id}
             ChefRecipes={ChefRecipes} ></ChefRecipeBanner>
            <Footer></Footer>
        </div>
    );
};

export default ChefRecipes;