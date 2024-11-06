import { Grid2, Box, Typography } from '@mui/material';
import React, { forwardRef } from 'react'
import SubTitleText from '../../../normal/subTitleText';
import SubTitleName from '../../../normal/subTitleName';
import NormalText from '../../../normal/normalText';

const Cart = forwardRef((props, ref) => {
    return (
        <Grid2 container columns={24} sx={{ padding: '100px 130px' }} spacing={16} ref={ref}>
            <Grid2 size={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <img src="/image/61820917c37a9154dc8494452eccdfe2.jpeg" style={{ width: '100%' }} alt="Img" />
            </Grid2>
            <Grid2 size={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Box>
                    <SubTitleText text="about" />
                    <SubTitleName text="Amanda Kenderes" />
                    <NormalText text="Amanda Kenderes is a professor of interdisciplinary studies at Humphreys University. She holds a Ph.D. in Social Science and Comparative Education from the Graduate School of Education and Information Studies at UCLA. She grew up in North and South America, Asia, Africa, and Europe." />
                </Box>
            </Grid2>
        </Grid2>
    )
});

export default Cart