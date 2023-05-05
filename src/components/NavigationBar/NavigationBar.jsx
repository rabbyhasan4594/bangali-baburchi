import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

const NavigationBar = () => {


    const { user, logOut } = useContext(AuthContext);
    const handleMouseOver = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user.displayName}
        </Tooltip>
    );

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Bangali Baburchi</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto gap-2">
                        <NavLink className='text-black text-decoration-none' to={"/"}
                        style={({ isActive, isPending }) => {
                            return {
                              fontWeight: isActive ? "bold" : "",
                              color: isPending ? "red" : "black",
                            }}} >Home</NavLink>
                        <NavLink className='text-black text-decoration-none' to={"/blog"}
                        style={({ isActive, isPending }) => {
                            return {
                              fontWeight: isActive ? "bold" : "",
                              color: isPending ? "red" : "black",
                            }}}>Blog</NavLink>

                    </Nav>

                    <Nav>
                        {user ?
                            <Nav className='pt-2 gap-2 w-25 '>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={handleMouseOver}
                                >
                                   <img style={{ height: "40px", weight: "40px " }} src={user.photoURL} alt="" className='rounded-circle' /> 
                                </OverlayTrigger>
                                
                                <Button className='' onClick={handleLogOut} variant="secondary">Logout</Button>
                            </Nav> :
                            <Nav className='gap-2'>
                                <NavLink className='text-black text-decoration-none' to={"/login"}
                                style={({ isActive, isPending }) => {
                                    return {
                                      fontWeight: isActive ? "bold" : "",
                                      color: isPending ? "red" : "black",
                                    }}}>Login</NavLink>
                                <NavLink className='text-black text-decoration-none' to={"/registration"}
                                style={({ isActive, isPending }) => {
                                    return {
                                      fontWeight: isActive ? "bold" : "",
                                      color: isPending ? "red" : "black",
                                    }}}>
                                    Register
                                </NavLink>
                            </Nav>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;