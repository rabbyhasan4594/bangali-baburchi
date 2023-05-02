import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const NavigationBar = () => {
    
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Bangali Baburchi</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto gap-2">
                        <Link className='text-black text-decoration-none' to={"/"}>Home</Link>
                        <Link className='text-black text-decoration-none' to={"/blog"}>Blog</Link>

                    </Nav>

                    <Nav>

                    <Nav className='gap-2'>
                                <Link className='text-black text-decoration-none' to={"/login"}>Login</Link>
                                <Link className='text-black text-decoration-none' to={"/registration"}>
                                    Register
                                </Link>
                            </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;