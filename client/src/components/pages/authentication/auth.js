// AuthPage.js
import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box, Tabs, Tab, Alert } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import config from '../../../config/config';

function AuthPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [authMode, setAuthMode] = useState('login');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        // Check if token exists in localStorage on initial load
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsLoggedIn(true);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    }, []);

    const handleAuthModeChange = (event, newValue) => {
        setAuthMode(newValue);
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (authMode === 'register' && password !== confirmPassword) {
        setError("Passwords do not match");
        return;
        }

        if (authMode === 'login') {
        console.log("Logging in with", { email, password });
        try {
            const response = await axios.post(config.serverURL + '/api/auth/login', { email, password });
            const result = response.data;
            toast(result.message, { type: result.type });
            
            if (result.type) {
                localStorage.setItem('authToken', result.token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${result.token}`;
                setIsLoggedIn(true);  // Update login status
                localStorage.setItem('isLoggedIn', true);
                navigate('/');
            }
        } catch (err) {
            console.error(err);
            toast('Error', { type: 'error' });
        }
        } else {
        console.log("Registering with", { email, password });
        try {
            const response = await axios.post(config.serverURL + '/api/auth/register', { email, password });
            const result = response.data;
            toast(result.message, { type: result.type });
        } catch (err) {
            toast('Error', { type: 'error' });
        }
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        delete axios.defaults.headers.common['Authorization'];
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
        toast("Logged out successfully", { type: 'success' });
    };

    const goBack = () => {
        navigate("/");
    }

    return (
        <Container maxWidth="xs">
        <Box sx={{ mt: 5, textAlign: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom>
            {isLoggedIn ? 'Welcome!' : (authMode === 'login' ? 'Login' : 'Register')}
            </Typography>

            {isLoggedIn ? (
            <Button
                variant="contained"
                color="secondary"
                onClick={handleLogout}
                fullWidth
            >
                Log Out
            </Button>
            ) : (
            <>
                <Tabs
                value={authMode}
                onChange={handleAuthModeChange}
                centered
                variant="fullWidth"
                sx={{ mb: 2 }}
                >
                <Tab label="Login" value="login" />
                <Tab label="Register" value="register" />
                </Tabs>

                <form onSubmit={handleSubmit}>
                    {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                    
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    {authMode === 'register' && (
                        <TextField
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        sx={{ mb: 2 }}
                        />
                    )}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        {authMode === 'login' ? 'Login' : 'Register'}
                    </Button>
                </form>
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ 'marginTop': '10px' }}
                    onClick={() => goBack()}
                >
                    Back
                </Button>
            </>
            )}
        </Box>
        </Container>
    );
}

export default AuthPage;
