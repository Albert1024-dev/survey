import { Box, Typography } from '@mui/material';
import React from 'react';


const TextBlock = (props) => {
  return (
    <Box sx={{ flexFlow: 1, textAlign: 'center', padding: '30px', color: 'white', backgroundColor: 'black', display: 'flex', justifyContent: 'center', flexDirection: 'column', fontSize: 'xx-large' }}>
      <Typography variant='p' component="div">
        <i>I’m here to help us <b>know we’re okay</b> and <b>find our way</b></i>
      </Typography>
      <Typography variant='p' component="div">
        <i>Let’s see what we can do when we know <b>who we are, what we want</b>, and <b>where we want to go!</b></i>
      </Typography>
    </Box>
  )
};

export default TextBlock;