import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container className='bg-light'>
            <Row>
                <Col lg={6}>
                    <img src={'https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2022/07/29/vorta_platter.jpg'} alt="" className='p-3 rounded-5 w-100' />
                </Col>
                <Col lg={6} className='pe-lg-5 p-sm-4 pt-lg-4'>
                    <h2>Bangali Baburchi</h2>
                    <p>Bangali Baburchi Recipe Hunter is a popular food website in Bangladesh that specializes in sharing delicious and easy-to-follow recipes for home cooks of all skill levels. Founded in 2015 by a team of food enthusiasts, Bangali Baburchi Recipe Hunter has quickly gained a following for its diverse collection of recipes that showcase the flavors of Bangladesh and beyond.

                        On the website, users can browse through a wide variety of recipes, including appetizers, main dishes, desserts, and more. Each recipe includes detailed instructions, as well as information about the ingredients and cooking tools needed to make the dish.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;