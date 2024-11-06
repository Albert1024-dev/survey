import { Grid2, Box } from '@mui/material'
import React from 'react'
import SubTitleText from '../../../normal/subTitleText'
import SubTitleName from '../../../normal/subTitleName'
import NormalText from '../../../normal/normalText'
import CustomButton from '../../../normal/customButton'
import BoldText from '../../../normal/boldText'

function Part2() {
    return (
        <Grid2 container columns={24} sx={{ padding: '100px 150px', backgroundColor: 'white' }}>
            <Grid2 size={12}>
                <img src="/image/5458805-ai.png" />
            </Grid2>
            <Grid2 size={12} sx={{ paddingLeft: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <SubTitleName customStyle={{ padding: '0' }} text="What’s All the Talk About?" sx={{ textTransform: 'uppercase' }} />
                <BoldText fontSize={18} text="Ever wonder why some people love deep, meaningful conversations while others can only chat about the weather?" />
                <NormalText fontSize={16} text="It turns out there’s a reason for that – and it’s called Talk Types.  The Talk Type Model reveals six unique styles, based on three simple reasons we talk: to share facts, tell stories, or make deeper connections. Are you an Informer, Relater, or Meaning-Maker? Knowing your Talk Type will help you understand how you communicate and why it matters." customStyle={{paddingBottom: '20px'}} />
                <Box>
                    <CustomButton text="Explore the Talk Types" />
                    <CustomButton color='black' text="Dive into our Theory" customStyle={{marginLeft: '30px'}} />
                </Box>
            </Grid2>
        </Grid2>
    )
}

export default Part2