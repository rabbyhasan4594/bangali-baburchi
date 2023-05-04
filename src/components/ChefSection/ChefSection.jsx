import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefDetails from '../ChefDetails/ChefDetails';


const ChefSection = () => {
    const chefs = useLoaderData();
    return (
       
        <div>
            {
              chefs.map(chef => <ChefDetails
                key={chef.id}
                chef={chef}></ChefDetails>)
            }
        </div>
    );
};

export default ChefSection;