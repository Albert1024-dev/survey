import { Box, Grid2 } from '@mui/material'
import React from 'react'
import SubTitleText from '../../../normal/subTitleText'
import SubTitleName from '../../../normal/subTitleName'
import CustomButton from '../../../normal/customButton'

function PartWithPeople() {
  return (
    <Grid2 container columns={15} sx={{ backgroundImage: 'url(/image/dd7f67e180bba701abbc0c5cffa91b3d.png)', height: '500px'}}>
        <Grid2 size={9}>
          <img src='/image/9b6bb6748b51347c6331e14fa56ea311.png' style={{position: 'relative', width: '750px', top: '-250px', left: '8vw'}} />
        </Grid2>
        <Grid2 size={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: '240px'}}>
            <SubTitleText text="TALK TYPE TEST" />
            <SubTitleName text="DO YOU WANT TO KNOW YOUR TALK TYPE?" color="white" />
            <Box>
              <CustomButton text="Take the Test!" />
            </Box>
        </Grid2>
    </Grid2>
  )
}

export default PartWithPeople