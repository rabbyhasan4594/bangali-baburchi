import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefRecipeBanner from '../ChefRecipeBanner/ChefRecipeBanner';
import ChefRecipeBody from '../ChefRecipeBody/ChefRecipeBody';

const ChefRecipes = () => {
    const {id} = useParams();
    const ChefRecipes = useLoaderData();
    console.log(ChefRecipes)
    const recipes=ChefRecipes.recipes;

    
    return (
        <div>
            <NavigationBar></NavigationBar>
            <ChefRecipeBanner 
             key={ChefRecipes.id}
             ChefRecipes={ChefRecipes} ></ChefRecipeBanner>
             {
                recipes.map(recipes => <ChefRecipeBody
                    key={recipes.id}
                    recipes={recipes}></ChefRecipeBody>)

             }
             
            <Footer></Footer>
        </div>
    );
};

export default ChefRecipes;