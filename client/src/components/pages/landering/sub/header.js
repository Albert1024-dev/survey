import React from 'react';

import { Grid2, Paper, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from '../../../normal/customButton';

import config from '../../../../config/config';

const menuList = [
    { label: 'Home', to: '/'},
    { label: 'About', to: ''},
    { label: 'My Story', to: ''},
    { label: 'Talk Types Examples', to: ''},
    { label: 'Talk Type Test', to: ''},
];

function Header() {
    const navigate = useNavigate();
    const onHomeClick = () => {
        navigate(config.serverURL);
    }
    return (
        <Box>
            <Paper elevation={3} square={true}  >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', padding: '15px 0' }}>
                    {
                        menuList.map((item, index) =>
                            <span key={`${item.label}+${index}`} style={{ fontSize: '15px', display: 'block', padding: '20px' }}>
                                <Link to={item.to}>
                                    {item.label}
                                </Link>
                            </span>
                        )
                    }
                    <CustomButton text="Buy Now!" />
                </Box>
            </Paper>
        </Box>
    );
}

export default Header