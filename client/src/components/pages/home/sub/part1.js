import { Grid2, Box } from '@mui/material';
import React from 'react';
import SubTitleText from '../../../normal/subTitleText';
import SubTitleName from '../../../normal/subTitleName';
import NormalText from '../../../normal/normalText';
import CustomButton from '../../../normal/customButton';
import { Link } from 'react-router-dom';

function Part1() {
    return (
        <Grid2 container columns={24} sx={{ padding: '100px 150px', backgroundColor: '#f0eeeb'}}>
            <Grid2 size={12} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <SubTitleText text="HOW WHAT WE SAY REVEALS WHO WE ARE" customStyle={{ padding: '30px 0'}} />
                <SubTitleName customStyle={{ padding: '0'}} text="WHAT'S YOUR TALK TYPE?" />
                <SubTitleName customStyle={{ padding: '0'}} text="DISCOVER IT NOW!" />
                <NormalText text="Find out how your communication style shapes your interactions and relationships." />
                <Box>
                    <Link to="/survey">
                        <CustomButton text="Take The Test!" />
                    </Link>
                    <Box sx={{ display: 'inline-block'}}>
                        <img src="/image/arrow.png" style={{ display: 'block', padding: '10px 0 0 30px'}} alt="Img" />
                        <i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It’s fun and revealing!</i>
                    </Box>
                </Box>
            </Grid2>
            <Grid2 size={12}>
                <img src="/image/OBJECTS.png" alt="Imag" />
            </Grid2>
        </Grid2>
    )
}

export default Part1