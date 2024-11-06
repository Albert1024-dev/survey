import React from 'react';
import { Typography } from '@mui/material';

function NormalText(props) {
    return (
        <Typography variant='subtitle1' sx={{ color: (props.color || '#555'), fontSize: (props.fontSize || '20px'), textAlign: (props.center ? 'center' : 'left'), padding: '10px 0', fontStyle: (props.fontStyle || 'normal'),  ...props.customStyle }}>
            { props.text }
        </Typography>
    )
}

export default NormalText