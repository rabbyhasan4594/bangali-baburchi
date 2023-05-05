import React from 'react';

import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../components/RightNav/RightNav';
import Footer from '../components/Footer/Footer';
import LeftNav from '../components/Banner/LeftNav/LeftNav';
import Banner from '../components/Banner/Banner';
const Main = () => {

    return (
        <div>
            
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Container className='mt-5'>
                <Row>
                <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;