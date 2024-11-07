import React, { useState, useEffect } from 'react';

import Header from './sub/header';
import ViewResult from './sub/ViewResult';
import QuestionList from './sub/QuestionList';
import Create from './sub/Create';

const Manage = (props) => {
    const [userStatus, setUserStatus] = useState(false);
    const authToken = localStorage.getItem('authToken');
    const decoded = JSON.parse(authToken);
    useEffect(() => {
        if (decoded && decoded.role === 'admin') {
            setUserStatus(true);
        }
    }, [decoded]);

    return (
        <>
            {
                userStatus === true &&
                    <div>
                        <Header />
                        <ViewResult />
                        <QuestionList />
                        <Create />
                    </div>
            }
        </>
    );
};

export default Manage;