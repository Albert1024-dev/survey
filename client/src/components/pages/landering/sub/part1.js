import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'
import SubTitleName from '../../../normal/subTitleName'
import SubTitleText from '../../../normal/subTitleText'
import NormalText from '../../../normal/normalText'
import BoldText from '../../../normal/boldText'

function Part1() {
    return (
        <Grid2 container columns={16} sx={{ backgroundColor: '#f0f0f0', padding: '120px 0 70px 0' }}>
            <Grid2 size={9} sx={{ paddingLeft: '140px' }}>
                <SubTitleText text="Start here" />
                <SubTitleName text="THE TALK TYPE MODEL" variant="h2" />
                <BoldText text="New to the Talk Type model? We’ll get you filled in really quickly." fontSize={18} />
                <NormalText text="The Talk Type model is based on a simple premise about human communication. That is, there are really only two reasons that people talk (or listen, think, read, write, etc.):" fontSize={18} />
                <Grid2 container columns={24}>
                    <Grid2 size={10}>
                        <BoldText text="we want to convey our understanding" fontSize={18} right />
                    </Grid2>
                    <Grid2 size={4}>
                        <Box sx={{ backgroundImage: 'url(/image/c983bb701c152dfd826c8e38513407a4.png)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                            <BoldText text="OR" fontSize={18} center />
                        </Box>
                    </Grid2>
                    <Grid2 size={10}>
                        <BoldText text="we want to share our experiences" fontSize={18} />
                    </Grid2>
                    <Grid2 size={24}>
                        <NormalText text="That’s it. However, because understanding comes in two varieties (objective and subjective) while experiences are only subjective, we ultimately end up with three reasons for talking:" fontSize={18} />
                    </Grid2>
                    <Grid2 size={8}>
                        <Box sx={{ backgroundImage: 'url(/image/05f6b6f3948aa72f3ab29cd3d31fd4e4.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center bottom', backgroundSize: '23%' }}>
                            <BoldText text="A" fontSize="38px" center />
                        </Box>
                    </Grid2>
                    <Grid2 size={8}>
                        <Box sx={{ backgroundImage: 'url(/image/05f6b6f3948aa72f3ab29cd3d31fd4e4.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center bottom', backgroundSize: '23%' }}>
                            <BoldText text="B" fontSize="38px" center />
                        </Box>
                    </Grid2>
                    <Grid2 size={8}>
                        <Box sx={{ backgroundImage: 'url(/image/05f6b6f3948aa72f3ab29cd3d31fd4e4.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center bottom', backgroundSize: '23%' }}>
                            <BoldText text="C" fontSize="38px" center />
                        </Box>
                    </Grid2>
                    <Grid2 size={8}>
                        <BoldText text="objective understanding" fontSize={18} center />
                    </Grid2>
                    <Grid2 size={8}>
                        <BoldText text="subjective experiencing" fontSize={18} center />
                    </Grid2>
                    <Grid2 size={8}>
                        <BoldText text="subjective understanding" fontSize={18} center />
                    </Grid2>
                    <Grid2 size={24}>
                        <NormalText text="When these three Categories are ranked by preference, we get six Talk Types:" fontSize={18} />
                    </Grid2>
                    <Grid2 size={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <BoldText text="AB" fontSize="38px" center customStyle={{ paddingBottom: 0 }} />
                            <img src="/image/z.png" style={{ position: 'relative', top: '-15px' }} />
                        </Box>
                    </Grid2>
                    <Grid2 size={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <BoldText text="AC" fontSize="38px" center customStyle={{ paddingBottom: 0 }} />
                            <img src="/image/z.png" style={{ position: 'relative', top: '-15px' }} />
                        </Box>
                    </Grid2>
                    <Grid2 size={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <BoldText text="BA" fontSize="38px" center customStyle={{ paddingBottom: 0 }} />
                            <img src="/image/z.png" style={{ position: 'relative', top: '-15px' }} />
                        </Box>
                    </Grid2>
                    <Grid2 size={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <BoldText text="BC" fontSize="38px" center customStyle={{ paddingBottom: 0 }} />
                            <img src="/image/z.png" style={{ position: 'relative', top: '-15px' }} />
                        </Box>
                    </Grid2>
                    <Grid2 size={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <BoldText text="CA" fontSize="38px" center customStyle={{ paddingBottom: 0 }} />
                            <img src="/image/z.png" style={{ position: 'relative', top: '-15px' }} />
                        </Box>
                    </Grid2>
                    <Grid2 size={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <BoldText text="CB" fontSize="38px" center customStyle={{ paddingBottom: 0 }} />
                            <img src="/image/z.png" style={{ position: 'relative', top: '-15px' }} />
                        </Box>
                    </Grid2>
                </Grid2>
            </Grid2>
            <Grid2 size={7} sx={{ textAlign: 'right' }}>
                <img src="/image/af22793279076bf4c6271a107d1065f4.jpeg" style={{ width: '600px', float: 'right' }} />
                <img src="/image/9ca569932e65dc6d67b512f948c4e78b.png" style={{ width: '300px', position: 'relative', top: '-50px', left: '70px' }} />
            </Grid2>
        </Grid2>
    )
}

export default Part1