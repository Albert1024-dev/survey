import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import line from './line.png';
import CustomButton from '../../../normal/customButton';

function FullPhoto() {
  return (
    <Box sx={{ flexGrow: 1, backgroundImage: 'url(./image/bc8f7c686942c8d11cc9a4dec0983333.png)', height: '32vw', backgroundSize: 'cover', padding: '6vw 0 0 10vw', display: { sm: 'block', xs: 'none' } }}>
        <Typography variant="h1" component="h2" sx={{ color: 'white', fontSize: '5vw' }}>
            We got this.
        </Typography>
        <Typography variant="h1" component="h2" sx={{ color: 'white', fontSize: '5vw' }}>
            Now let’s go do it!
        </Typography>
        <img src={ line } style={{ width: '11vw', margin: '3px 0 20px 10vw' }} alt="Img" />
        <CustomButton text="Learn More" />
    </Box>
  )
}

export default FullPhoto