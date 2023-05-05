import React, { useState } from 'react';
import { Button, Card, Container, Toast } from 'react-bootstrap';
// import { ToastContainer, toast } from 'react-toast';


const ChefRecipeBody = ({ recipes }) => {
    const { name, cooking_method, ingredients, rating } = recipes;
    const [showA, setShow] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const disableButton = () => {
        setDisabled(true);
    };

    const tostClose = () => setShow(!showA);
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
                        <div>


                            <Button disabled={disabled} onClick={() => {
                                tostClose();
                                disableButton();
                            }} className="primary">Favorite button</Button>

                            <Toast show={showA} onClose={tostClose}>
                                <Toast.Header>
                                    <img
                                        src=""
                                        className="rounded me-2"
                                        alt=""
                                    />
                                    <strong className="me-auto">Bangali Baburchi</strong>
                                    <small>Just Now</small>
                                </Toast.Header>
                                <Toast.Body>The recipe is your favorite</Toast.Body>
                            </Toast>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default ChefRecipeBody;