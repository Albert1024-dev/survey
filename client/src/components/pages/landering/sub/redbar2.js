import { Box, Grid2 } from '@mui/material'
import React from 'react'
import SubTitleName from '../../../normal/subTitleName'
import CustomButton from '../../../normal/customButton'

function Redbar2(props) {
  return (
    <Box sx={{backgroundColor: '#f23123', padding: '20px 0'}}>
        <Grid2 container columns={20}>
            <Grid2 size={16}>
                <SubTitleName variant="h4" text={ props.text || "sample text..."} customStyle={{ letterSpacing: '0px'}} center color="white" />
            </Grid2>
            <Grid2 size={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box>
                    <CustomButton color="white" textColor="red" text={ props.buttonText || "Click here..."} />
                </Box>
            </Grid2>
        </Grid2>
    </Box>
  )
}

export default Redbar2