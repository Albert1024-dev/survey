import React from 'react';
import { Typography } from '@mui/material';

function BoldText(props) {
    return (
        <Typography variant='subtitle1' sx={{ color: (props.color || '#2b2b2b'), fontSize: (props.fontSize || '21px'), textAlign: (props.center ? 'center' : (props.right ? 'right' : 'left')), padding: '10px 0', fontStyle: (props.fontStyle || 'italic'), fontWeight: (props.fontWeight || 'bold'),  ...props.customStyle }}>
            { props.text }
        </Typography>
    )
}

export default BoldText