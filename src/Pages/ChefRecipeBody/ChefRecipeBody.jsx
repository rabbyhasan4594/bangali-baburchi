import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const ChefRecipeBody = ({ recipes }) => {
    console.log(recipes)
    const { name, cooking_method, ingredients, rating } = recipes;
    return (
        <div>
            <Container className='p-5'>
                <Card className='gap-3 mx-lg-5'>
                    <Card.Header as="h5" className='text-center'>Bangali Baburchi</Card.Header>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Ingredients : {ingredients}
                        </Card.Text>
                        <Card.Text>
                            cooking_method : {cooking_method}
                        </Card.Text>
                        <Card.Text>
                            Rating : {rating}
                        </Card.Text>
                        <Button variant="primary">Favorite button</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default ChefRecipeBody;