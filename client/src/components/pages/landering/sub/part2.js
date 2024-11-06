import React from 'react'

import { Box, Grid2, Typography } from '@mui/material';
import ReactPlayer from 'react-player'
import SubTitleText from '../../../normal/subTitleText';
import SubTitleName from '../../../normal/subTitleName';
import NormalText from '../../../normal/normalText';
import CustomButton from '../../../normal/customButton';
import BoldText from '../../../normal/boldText';

function Part2() {
    return (
        <Grid2 container columns={24} sx={{padding: '100px 0'}}>
            <Grid2 size={12}>
                <ReactPlayer width="800px" height="450px" controls autoPlay url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
            </Grid2>
            <Grid2 size={12} sx={{padding: '0 100px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <SubTitleText text="about" />
                <SubTitleName text="About the talk types" variant="h2" customStyle={{padding: '20px 0'}} />
                <BoldText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <NormalText fontSize={17} text="Curabitur lacinia ex non odio sodales, sit amet tristique erat accumsan. Sed eu lobortis diam. Integer sit amet massa pretium, iaculis eros at, porta metus. Pellentesque tincidunt dolor eu sodales cursus. Phasellus est lacus, varius nec augue a, tristique congue erat. Fusce sit amet imperdiet ex. Praesent euismod porta lectus et varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <CustomButton text="Subscribe Now!" customStyle={{ margin: '10px 0'}} />
            </Grid2>
        </Grid2>
    )
}

export default Part2