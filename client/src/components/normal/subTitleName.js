import { Typography } from '@mui/material'
import React from 'react'

function SubTitleName(props) {
    return (
        <Typography variant={ props.variant ? props.variant : 'h3'} sx={{ color: props['color'] || 'black', fontWeight: '600', padding: '20px 0', textAlign: (props.center ? 'center' : (props.right ? 'right' : 'left')), ...props.customStyle }}>
            { props.text }
        </Typography>
    )
}

export default SubTitleName