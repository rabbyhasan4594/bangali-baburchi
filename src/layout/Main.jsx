import React from 'react';

import { Outlet } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../RightNav/RightNav';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav/LeftNav';
const Main = () => {

    return (
        <div>
            <NavigationBar></NavigationBar>
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