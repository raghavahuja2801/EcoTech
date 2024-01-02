// LoginPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { auth } from './firebase';
import firebase from 'firebase/compat/app';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f4f4f4;
    font-family: 'Arial', sans-serif;
`;

const Form = styled.form`
    background-color: #fff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    width: 300px;
`;

const Input = styled.input`
    margin-bottom: 20px;
    padding: 15px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
`;

const Button = styled.button`
    padding: 15px;
    width: 100%;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.2s;

    &:hover {
        background-color: #0056b3;
    }
`;

const GoogleButton = styled.button`
    margin-top: 20px;
    padding: 15px;
    width: 100%;
    border: none;
    background-color: #db4437;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.2s;

    &:hover {
        background-color: #c23121;
    }
`;

const ToggleMode = styled.button`
    margin-top: 20px;
    background: none;
    border: none;
    color: #007bff;
    cursor: pointer;
`;

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginMode, setIsLoginMode] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLoginMode) {
                await auth.signInWithEmailAndPassword(email, password);
                alert('Logged in successfully');
                navigate('/user');
            } else {
                await auth.createUserWithEmailAndPassword(email, password);
                alert('Signed up successfully');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await auth.signInWithPopup(provider);
            alert('Logged in with Google');
            navigate('/user');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <Navbar />
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">{isLoginMode ? 'Login' : 'Sign Up'}</Button>
                <GoogleButton type="button" onClick={handleGoogleSignIn}>
                    Sign in with Google
                </GoogleButton>
                <ToggleMode onClick={() => setIsLoginMode(!isLoginMode)}>
                    {isLoginMode ? 'Switch to Sign Up' : 'Switch to Login'}
                </ToggleMode>
            </Form>
        </Container>
        <Footer />
        </div>
    );
};

export default LoginPage;
