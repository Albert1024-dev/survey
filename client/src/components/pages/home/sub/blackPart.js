import { Grid2, Box } from '@mui/material';
import React from 'react';
import SubTitleText from '../../../normal/subTitleText';
import SubTitleName from '../../../normal/subTitleName';
import CustomButton from '../../../normal/customButton';
import { Link } from 'react-router-dom';

function BlackPart() {
    return (
        <Grid2 container columns={24} sx={{ backgroundColor: '#131313' }}>
            <Grid2 size={14}>
                <img src="/image/people.png" style={{ padding: '80px 100px 0 150px', width: '100%' }} alt="Img" />
            </Grid2>
            <Grid2 size={10} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: '100px' }}>
                <SubTitleText text="TAKE THE TASK" customStyle={{ padding: '30px 0' }} />
                <SubTitleName text="DO YOU WANT TO KNOW YOUR TALK TYPE?" customStyle={{ color: 'white', padding: '0 0 50px 0'}} />
                <Box>
                    <Link to="/survey">
                        <CustomButton text="Take The Test!" />
                    </Link>
                </Box>
            </Grid2>
        </Grid2>
    )
}

export default BlackPart