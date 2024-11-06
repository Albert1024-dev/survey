import { Box, Grid2, Rating, Typography } from '@mui/material'
import React from 'react'
import NormalText from './normalText'

function ReviewBlock(props) {
    return (
        <Box sx={{...props.customStyle }}>
            <Rating
                value={props.rating}
                readOnly
            />
            <br />
            <NormalText text={props.text} fontStyle="italic" customStyle={{fontSize: 'medium'}} />
            <Typography variant='h5'>
                { props.name }
            </Typography>
        </Box>
    )
}

export default ReviewBlock