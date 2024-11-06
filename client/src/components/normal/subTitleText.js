import { Typography } from '@mui/material'
import React from 'react'

function SubTitleText(props) {
    return (
        <Typography variant={ props.variant ? props.variant : 'h6'} sx={{ color: props['color'] || 'red', textTransform: 'uppercase', textAlign: props.center ? 'center' : 'left', ...props.customStyle }}>
            { props.text }
        </Typography>
    )
}

export default SubTitleText