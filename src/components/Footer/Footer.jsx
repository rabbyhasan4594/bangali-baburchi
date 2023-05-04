import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div >
            <Container className='mt-5 bg-dark'>
                <Row>
                    <Col lg={3}>
                        <div className='text-primary ms-5 mt-5 mb-5 '>
                            <div className='pt-5'>
                                <h4>Use Full Link : </h4>

                                <h6 className=' ms-lg-5 mt-lg-2'>
                                    <Link className=' text-white text-decoration-none' to={"/"}>Home</Link>
                                </h6>
                                <h6 className='text-white ms-lg-5 mt-lg-2'>
                                    <Link className='text-white text-decoration-none' to={"/blog"}>Blog</Link>
                                </h6>
                            </div>
                        </div>

                    </Col>
                    <Col lg={6}>
                        <div className='text-white mt-5 mb-5 me-5 '>
                            <h4 className='text-primary text-center'>
                                Details About us :
                            </h4>
                            <p>
                                Bangali Baburchi Recipe Hunter is a popular food website in Bangladesh that specializes in sharing delicious and easy-to-follow recipes for home cooks of all skill levels. Founded in 2015 by a team of food enthusiasts, Bangali Baburchi Recipe Hunter has quickly gained a following for its diverse collection of recipes that showcase the flavors of Bangladesh and beyond. On the website, users can browse through a wide variety of recipes, including appetizers, main dishes, desserts, and more.
                            </p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='text-primary me-5 mt-5 mb-5 '>
                            <div className='pt-5'>
                                <h4>Contact With Us</h4>
                                <div className='text-white'>

                                    <p>Email:rabbyHasan@gmail.com</p>
                                    <p>Phone:01749049999999 </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;