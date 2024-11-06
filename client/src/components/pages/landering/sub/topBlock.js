import React from 'react'
import { Grid2, Typography } from '@mui/material'
import Header from './header'
import IntroBook from './introBook'

function TopBlock() {
    return (
        <Grid2 container columns={16}>
            <Grid2 size={7} sx={{ backgroundImage: 'url(./image/dd7f67e180bba701abbc0c5cffa91b3d.png)' }}>
                <Typography variant='h5' component={'p'} sx={{ textTransform: 'uppercase', color: 'white', padding: '20px', fontWeight: 'bold' }}>
                    Amanda Kenderes
                </Typography>
            </Grid2>
            <Grid2 size={9}>
                <Header />
                <IntroBook />
            </Grid2>
        </Grid2>
    )
}

export default TopBlock