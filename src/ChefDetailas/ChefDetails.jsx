import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ChefDetails = ({ chef }) => {
    console.log(chef);
    const { name, picture, years_of_experience, num_recipes, likes
    } = chef;
    return (
        <div className='mb-4 d-flex flex-col'>
            <Card className='col-3 gap-3' style={{ width: '22rem' }}>
                <Card.Img  variant="top" src={picture} style={{ height: '300px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h6>Experience : {years_of_experience
                        } </h6>
                        <h6>Numbers of recipes : {num_recipes}</h6>
                    </Card.Text>
                    <Card.Text>
                        <p className='text-end'>Like: {likes}</p>
                    </Card.Text>
                    <Button variant="primary">View Recipes</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefDetails;