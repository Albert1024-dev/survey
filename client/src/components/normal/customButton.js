import React from 'react';
import Button from '@mui/material/Button';
const color = {
    red: '#F23132',
    black: 'black',
    white: 'white'
}
function CustomButton(props) {
    return (
        <Button
            variant='contained'
            sx={{
                padding: '12px 35px 12px 35px',
                borderRadius: '100px',
                backgroundColor: props.color ? color[props.color] : color['red'],
                color: props.textColor ? props.textColor : "white",
                ...props.customStyle
            }}
            fullWidth={props.fullWidth}
            onClick={props.onClick}
        >
            { props.icon }{ props.text || "Click here..." }
        </Button>
    )
}

export default CustomButton