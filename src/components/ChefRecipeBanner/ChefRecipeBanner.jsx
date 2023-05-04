import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import LazyLoad from 'react-lazy-load';

const ChefRecipeBanner = ({ ChefRecipes }) => {
    const { picture, name, bio, years_of_experience, num_recipes, likes } = ChefRecipes;
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={6} className='bg-light'>
                            <LazyLoad height={310}>
                            <img className='w-50 py-2 rounded rounded-circle ' src={picture} alt="" style={{ height: '300px' }} />
                            </LazyLoad>

                       

                    </Col>
                    <Col lg={6} className='bg-light pe-lg-5 pt-lg-3 gap-2 '>
                        <div >
                            <h1>{name}</h1>
                            <p>{bio}</p>
                        </div>
                        <div>
                            <h6>Experience : {years_of_experience} Years</h6>
                            <h6>Number of Recipes : {num_recipes}</h6>
                            <p>Likes : {likes}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ChefRecipeBanner;