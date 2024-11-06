import { Box, Typography } from '@mui/material'
import React from 'react'

function Redbar() {
  return (
    <Box sx={{backgroundColor: '#f23123'}}>
        <Box sx={{ color: 'white', textAlign: 'center', margin: '0 0 0 300px', padding: '40px 0', letterSpacing: '3px' }}>
            <Typography variant='subtitle1' component={'div'} sx={{ fontSize: '22px', letterSpacing: '3px' }}>
                Talk Types gives us the insight we need to confidently say
            </Typography>
            <Typography variant='h5' component={'div'}>
                who we are, what we want, and where we want to go!
            </Typography>
        </Box>
        <Box sx={{position: 'absolute', top: '50px', left: '-300px'}}>
            <img src={"/image/cbd60e5d21a70e0bd0c5558d3e74c39e.png"} style={{postion: 'absolute'}} width={'70%'} />
        </Box>
        {/* <span style={{position: 'absolute', top: '570px', right: "0px", textAlign: 'right', width: '30%'}}> */}
            <img src={"/image/d263672f94734c68426ffc53000699d0.png"} style={{position: 'absolute', rotate: '30deg', width: '150px', top: '575px', right: '150px'}} />
        {/* </span> */}
    </Box>
  )
}

export default Redbar