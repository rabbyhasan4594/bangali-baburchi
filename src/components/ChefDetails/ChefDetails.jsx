import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ChefDetails = ({ chef }) => {
    
    const { name, picture, years_of_experience, num_recipes, likes,id
    } = chef;
    return (
        <div className='mb-4 '>
            <Card className='lg:mx-auto' >
                <Card.Img  variant="top" src={picture} style={{ height: '350px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div>
                        <h6>Experience : {years_of_experience
                        } 
                        </h6>
                        
                    </div>
                    <div>
                    <h6>Numbers of recipes : {num_recipes}</h6>
                    </div>
                    <div>
                       <h6> Likes: {likes}</h6>
                    </div>
                    <Link to={`/chefRecipes/${id}`}><Button variant="primary">View Recipes</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefDetails;