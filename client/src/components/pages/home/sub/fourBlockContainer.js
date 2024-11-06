import { Box, Grid2 } from '@mui/material';
import React from 'react';
import BoldText from '../../../normal/boldText';
import NormalText from '../../../normal/normalText';
import CustomButton from '../../../normal/customButton';
import { Link } from 'react-router-dom';

function FourBlockContainer() {
    return (
        <Grid2 container columns={30} sx={{ backgroundColor: '#f0eeeb', padding: '100px 0' }} columnSpacing={4}>
            <Grid2 size={3} />
            <Grid2 size={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <img src="/image/111.png" style={{height: '60px'}} alt="Img" />
                <BoldText center fontSize={18} text="Smooth Conversations" />
                <NormalText center fontSize={18} customStyle={{ padding: 0 }} text="Avoid awkward pauses and conversation hiccups – who doesn’t want that?" />
            </Grid2>
            <Grid2 size={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <img src="/image/222.png" style={{height: '60px'}} alt="Img" />
                <BoldText center fontSize={18} text="Better Workplace Connections" />
                <NormalText center fontSize={18} customStyle={{ padding: 0 }} text="Get along better with your coworkers (yes, even the one who overshares at lunch)." />
            </Grid2>
            <Grid2 size={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <img src="/image/333.png" style={{height: '60px'}} alt="Img" />
                <BoldText center fontSize={18} text="Small Talk Mastery" />
                <NormalText center fontSize={18} customStyle={{ padding: 0 }} text="Master the art of small talk – or know when to avoid it altogether." />
            </Grid2>
            <Grid2 size={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <img src="/image/444.png" style={{height: '60px'}} alt="Img" />
                <BoldText center fontSize={18} text="Meaningful Relationships" />
                <NormalText center fontSize={18} customStyle={{ padding: 0 }} text="Unlock the secret to meaningful connections in every area of life." />
            </Grid2>
            <Grid2 size={3} />
            <Grid2 size={30} sx={{ paddingTop: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box>
                    <Link to="/survey">
                        <CustomButton text="Take the test now!" />
                    </Link>
                </Box>
            </Grid2>
        </Grid2>
    )
}

export default FourBlockContainer