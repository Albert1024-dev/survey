import { Grid2, Box } from '@mui/material'
import React from 'react'
import SubTitleName from '../../../normal/subTitleName'
import BoldText from '../../../normal/boldText'
import NormalText from '../../../normal/normalText'
import SubTitleText from '../../../normal/subTitleText'

import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom'

function BlogContainer() {
    return (
        <Grid2 sx={{ backgroundColor: '#f0f0f0', padding: '100px 150px' }} container columns={24} spacing={4}>
            <Grid2 size={24}>
                <SubTitleName text="Learn more about the talk types" center />
            </Grid2>
            <Grid2 size={8}>
                <img src="/image/365440b65c0945c9c7a59133525115c4.jpeg" />
                <BoldText text="Lorem ipsum dolor amet Lorem Ipsum, consectetur adipiscing elit" fontStyle="normal" />
                <NormalText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend lobortis dui, sit amet pulvinar eros gravida sit amet. Fusce non dui vitae neque ornare sagittis in a felis." fontSize={18} customStyle={{ padding: 0 }} />
                <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '20px' }}>
                    <Link style={{ display: 'flex', alignItems: 'center' }}><SubTitleText text="Read More&nbsp;&nbsp;" /><EastIcon sx={{ color: 'red' }} /></Link>
                </Box>
            </Grid2>
            <Grid2 size={8}>
                <img src="/image/365440b65c0945c9c7a59133525115c4.jpeg" />
                <BoldText text="Lorem ipsum dolor amet Lorem Ipsum, consectetur adipiscing elit" fontStyle="normal" />
                <NormalText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend lobortis dui, sit amet pulvinar eros gravida sit amet. Fusce non dui vitae neque ornare sagittis in a felis." fontSize={18} customStyle={{ padding: 0 }} />
                <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '20px' }}>
                    <Link style={{ display: 'flex', alignItems: 'center' }}><SubTitleText text="Read More&nbsp;&nbsp;" /><EastIcon sx={{ color: 'red' }} /></Link>
                </Box>
            </Grid2>
            <Grid2 size={8}>
                <img src="/image/365440b65c0945c9c7a59133525115c4.jpeg" />
                <BoldText text="Lorem ipsum dolor amet Lorem Ipsum, consectetur adipiscing elit" fontStyle="normal" />
                <NormalText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend lobortis dui, sit amet pulvinar eros gravida sit amet. Fusce non dui vitae neque ornare sagittis in a felis." fontSize={18} customStyle={{ padding: 0 }} />
                <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '20px' }}>
                    <Link style={{ display: 'flex', alignItems: 'center' }}><SubTitleText text="Read More&nbsp;&nbsp;" /><EastIcon sx={{ color: 'red' }} /></Link>
                </Box>
            </Grid2>
        </Grid2>
    )
}

export default BlogContainer