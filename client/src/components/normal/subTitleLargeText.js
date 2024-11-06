import { Typography } from '@mui/material'
import React from 'react'

function SubTitleLargeText(props) {
    return (
        <Typography variant={ props.variant ? props.variant : 'h2'} sx={{ color: props['color'] || 'black', letterSpacing: '3px', textAlign: props.center ? 'center' : 'left', fontWeight: '600', padding: '20px 0' }}>
            { props.text }
        </Typography>
    )
}

export default SubTitleLargeText