import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// import { en } from '../text';
import CustomButton from '../../../normal/customButton';

function Header(props) {
    const { onAboutClick, onBookClick, onSpeakingClick, onGetInTouchClick } = props;

    const navigate = useNavigate();
    const onHomeClick = () => {
        navigate('/');
    }

    const pages = [
        { value:'Home', onClick: onHomeClick },
        { value: 'About', onClick: onAboutClick },
        { value: 'Book', onClick: onBookClick }
    ];
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar className='bg-white' style = { style.headerStyle }>
                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        {pages.map((page) => (
                            <Link 
                                key={page.value}
                                sx={{ my: 2, color: 'black', display: 'block' ,fontSize: 18, paddingRight: 4, paddingLeft: 4, textDecorationLine: 'none', cursor: 'pointer' }}
                                variant="text"
                                onClick={page.onClick}
                            >
                                {page.value}
                            </Link>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'black', textAlign: 'center', letterSpacing: '7px' }}>
                            AMANDA KENDERES
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1}}>
                        {/* <Button
                            variant='contained'
                            sx={{ padding: '10px 35px 10px 35px', borderRadius: '100px', backgroundColor: '#F23132', float: 'right' }}
                        >
                            Get In Touch
                        </Button> */}
                        <CustomButton text="Get In Touch" customStyle={{float: "right"}} onClick={onGetInTouchClick} />
                        <Button
                            color='string'
                            sx={{ color: 'black', padding: '12px 35px 12px 35px', borderRadius: '100px', float: 'right'}}
                            size='large'
                            onClick={onSpeakingClick}
                        >
                            Speaking
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

const style = {
    headerStyle: {
        height: '110px',
    }
}

export default Header