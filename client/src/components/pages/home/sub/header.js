import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import SubTitleName from '../../../normal/subTitleName'
import { Link } from 'react-router-dom'

import config from '../../../../config/config';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CustomButton from '../../../normal/customButton';

function Header() {
    const [loginText, setLoginText] = useState('Log In');
    const [userStatus, setUserStatus] = useState(false);
    const token = localStorage.getItem('authToken');
    useEffect(() => {
        let text = token ? 'Log Out' : 'Log In';
        if (token) {
            var decoded = JSON.parse(token);
            
            if (decoded.role === 'admin') {
                setUserStatus(true);
            }
            else {
                setUserStatus(false);
            }
        }
        else {
            setUserStatus(false);
        }
        setLoginText(text);
    }, [token]);

    var menuList = [
        { label: 'Home', to: '' },
        { label: 'About', to: '/about' },
        { label: 'Contact', to: '/contact' },
        { label: loginText, to: '/auth' }
    ]
    return (
        <Box sx={{ padding: '0 0', borderBottom: '1px solid #aaa', display: 'flex', justifyContent: 'space-between', flex: 1, backgroundColor: '#f0eeeb' }}>
            <Box sx={{ padding: '0 0 0 50px' }}>
                <SubTitleName text="TALK TYPES" color="red" variant="h4" />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', paddingRight: '30px' }}>
                {
                    userStatus && (
                        <Link to="/manage" style={{ padding: '0px 20px' }}>
                            Manage
                        </Link>
                    )
                }
                {
                    menuList.map((item, index) => {
                        if (item.dropDown) {
                            return <span key={`${item.label}_${index}_`} style={{ padding: '0px 20px' }}>
                                <Link to={item.to}>
                                    {item.label} <KeyboardArrowDownOutlinedIcon />
                                </Link>
                            </span>
                        }
                        return <span key={`${item.label}_${index}_`} style={{ padding: '0px 30px' }}>
                            <Link to={item.to}>
                                {item.label}
                            </Link>
                        </span>
                    })
                }
                <Link to="/survey">
                    <CustomButton text="Take the test!" />
                </Link>
            </Box>
        </Box>
    )
}

export default Header