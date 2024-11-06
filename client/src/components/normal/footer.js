import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const menuList = [
    {label: "HOME", to: ""},
    {label: "ABOUT", to: ""},
    {label: "BOOK", to: ""},
    {label: "SPEAKING", to: ""},
    {label: "CONTACT", to: ""},
    {label: "PRIVACY POLICY", to: ""},
    {label: "TERMS & CONDITIONS", to: ""}
]

function Footer(props) {
    var darkMode = props.darkMode;
    return (
        <Box sx={{backgroundColor: darkMode ? 'white' : '#0e0e0e', padding: '10px'}}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0'}}>
                <span style={{display: 'inline-block', padding: '10px'}}>
                    <Link to={"aa"}>
                        <img src={ darkMode ? "/image/red_icon.png" : "/image/icon0.png"} />
                    </Link>
                </span>
                <span style={{display: 'inline-block', padding: '10px'}}>
                    <Link to={"bb"}>
                        <img src={ darkMode ? "/image/red_icon1.png" : "/image/icon1.png"} />
                    </Link>
                </span>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '15px', color: 'white', fontSize: '11px', color: (darkMode ? '#111' : '#aaa'), letterSpacing: '2px'}}>
                {
                    menuList.map((item, index) => 
                        <span key={`${item['label']}_${index}`} style={{ display: 'inline-block', padding: '0 30px'}}>
                            <Link to={item.to}>{ item.label }</Link>
                        </span>
                    )
                }
            </Box>
            <Box sx={{ margin: '15px', height: 1, backgroundColor: '#d5d5d4' }}>
                { darkMode && <img src="/image/line.png" />} 
            </Box>
            <Box sx={{ padding: '20px 0 30px 0'}}>
                <Typography variant='captain' component={'p'} sx={{ textAlign: 'center', color: 'white', textTransform: 'uppercase', fontSize: 'x-small', color: (darkMode ? '#111' : '#aaa'), letterSpacing: '2px' }}>
                    © amanda kenderes 2024. All rights reserved. website design and development by kremena designs. 
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer