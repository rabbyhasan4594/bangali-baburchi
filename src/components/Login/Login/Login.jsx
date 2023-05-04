import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle,FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import NavigationBar from '../../NavigationBar/NavigationBar';


const Login = () => {
    const { signIn,signInWithGoogle,signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('');
    const handleGoogleSignIn = (event) =>{
        event.preventDefault();
        signInWithGoogle()
        .then(result =>{
            const googleUser =result.user;
        })
        .catch( error =>{
            console.log(error.message);
        });
        navigate(from, { replace: true })


    }
    const handleGithubSignIn =(event)=>{
        signInWithGithub()
        .then(result =>{
            const githubUser =result.user;
        })
        .catch( error =>{
            console.log(error.message);
        });
        navigate(from, { replace: true })
    }
    

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })
    }

    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container className='mt-5 w-25 mx-lg-auto'>
                <h3>Please Login</h3>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <br />
                    <Button className='mb-2 mt-3 w-100' variant="outline-primary" onClick={handleGoogleSignIn}><FaGoogle />  Login with Google</Button>
                    <br />
                    <Button onClick={handleGithubSignIn} className='mb-2 w-100' variant="outline-secondary"><FaGithub />  Login with Github</Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Don't Have an Account? <Link to="/registration">Register</Link>
                    </Form.Text>
                    <Form.Text className="text-success">

                    </Form.Text>
                    <Form.Text className="text-danger">
                        <p>{error}</p>
                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Login;