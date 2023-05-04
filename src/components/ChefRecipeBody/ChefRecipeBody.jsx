import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toast';


const ChefRecipeBody = ({ recipes }) => {
    const { name, cooking_method, ingredients, rating } = recipes;
    const wave = () => toast('the recipe is your favorite 👋')
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
                        <div><Button onClick={wave} variant="primary">Favorite button</Button>
                        <ToastContainer /></div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default ChefRecipeBody;