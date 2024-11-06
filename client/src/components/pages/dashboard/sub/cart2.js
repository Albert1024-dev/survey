import { Grid2, Box, Typography } from '@mui/material';
import React, { forwardRef } from 'react'
import SubTitleText from '../../../normal/subTitleText';
import SubTitleName from '../../../normal/subTitleName';
import NormalText from '../../../normal/normalText';

const Cart2 = forwardRef((props, ref) => {
    return (
        <Grid2 container columns={24} sx={{ padding: '100px 130px' }} spacing={16} ref={ref}>
            <Grid2 size={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Box>
                    <SubTitleText text="speaking" />
                    <SubTitleName text="Seminars, Workshops & Coaching" />
                    <NormalText text="Amanda Kenderes would be happy to speak to your workplace or group. She offers one-day seminars, three-day workshops, and private coaching. If you would like to book Amanda for your next event, please send an enquiry." />
                </Box>
            </Grid2>
            <Grid2 size={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <img src="/image/61820917c37a9154dc8494452eccdfe2.jpeg" style={{ width: '100%' }} />
            </Grid2>
        </Grid2>
    )
});

export default Cart2