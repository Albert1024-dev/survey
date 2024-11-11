import React, { useState } from 'react';
import { redirect as Redirect } from 'react-router-dom';

import Login from './subComponents/Login';
import Register from './subComponents/Register';

function Authenticatoin() {
    const [authType, setAuthType] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const authToken = localStorage.getItem('authToken');
    if (authToken && authToken.role === 'admin') {
        setIsAuthenticated(true);
    } else {
        setIsAuthenticated(false);
    }

    return (
        <div className='container'>
            {
                !isAuthenticated ? 
                    (authType ?
                        <Register /> :
                        <Login />
                    ) :
                    <Redirect to="/manage" />
            }
        </div>
    );
};

export default Authenticatoin;