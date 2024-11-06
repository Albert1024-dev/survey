import React from 'react'
import SubTitleText from '../../../normal/subTitleText'
import SubTitleLargeText from '../../../normal/subTitleLargeText'
import NormalText from '../../../normal/normalText'
import { Box } from '@mui/material'
import CustomButton from '../../../normal/customButton'

function IntroBook() {
  return (
    <Box sx={{ padding: '100px 0 100px 0', backgroundColor: '#f0f0f0'}}>
        <SubTitleText text="how what we say reveals who we are" center />
        <SubTitleLargeText text="TALK TYPES" variant="h1" center />
        <NormalText text="This groundbreaking book revolutionizes our understanding of human communication by revealing the linkages between how we talk and who we are. " center customStyle={{padding: '0 160px'}} />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0 0 0'}}>
            <CustomButton text="Get The Book!" customStyle={{ margin: '5px' }} />
            <CustomButton text="Learn More" color="black" customStyle={{ margin: '5px' }} />
        </Box>
    </Box>
  )
}

export default IntroBook