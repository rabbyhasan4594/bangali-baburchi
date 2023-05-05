import React, { useContext, useState } from 'react';

import { Button, Container, Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import NavigationBar from '../../NavigationBar/NavigationBar';


const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {user,createUser,setProfile,loading} =useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        setSuccess('');
        setError('');
        
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                setProfile(name,photo,createUser)
                if (password.length < 6) {
                    setError('Please add at least 6 characters in your password')
                    return;
                    
                }
                setSuccess('User has been created successfully');
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })
    }

    if (loading) {
        return  <Spinner animation="border" variant="success" />
    }


    
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div>

   

        <Container className='w-50 mx-auto bg-light p-4 rounded-4 mt-5'>
            <h3 className='text-primary text-center mb-3'>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    <div className='mt-2'>
                    Already Have an Account? <Link to="/login">Login</Link>
                    </div>
                </Form.Text>
                <Form.Text className="text-success">
                <p>{success}</p>
                </Form.Text>
                <Form.Text className="text-danger">
                 <p>{error}</p>
                </Form.Text>
                
            </Form>
        </Container>
      
            </div>
        </div>
    );
};

export default Register;