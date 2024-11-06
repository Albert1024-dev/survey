import { Grid2, Box } from '@mui/material'
import React from 'react'
import SubTitleText from '../../../normal/subTitleText'
import SubTitleName from '../../../normal/subTitleName'
import NormalText from '../../../normal/normalText'
import CustomButton from '../../../normal/customButton'
import BoldText from '../../../normal/boldText'

function Part3() {
  return (
    <Grid2 container columns={15} sx={{ padding: '100px 0' }}>
      <Grid2 size={9} sx={{ padding: '0 100px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <SubTitleText text="My Story" />
        <SubTitleName text="amanda kenderes" variant="h2" customStyle={{ padding: '20px 0' }} />
        <BoldText text="Hi, my name is Amanda Kenderes and I am the author of the book Talk Types." />
        <NormalText fontSize={17} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia interdum quam. Curabitur lacinia ex non odio sodales, sit amet tristique erat accumsan. Sed eu lobortis diam. Integer sit amet massa pretium, iaculis eros at, porta metus. Pellentesque tincidunt dolor eu sodales cursus. Phasellus est lacus, varius nec augue a, tristique congue erat. Fusce sit amet imperdiet ex. Praesent euismod porta lectus et varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <NormalText fontSize={17} customStyle={{padding: '20px 0'}} text="Fusce id sem accumsan, aliquam lacus sed, auctor nisi. Pellentesque tincidunt nec eros vitae convallis. Maecenas ut tortor quis ante vestibulum gravida. Pellentesque auctor mi eget eros iaculis, nec mollis metus imperdiet." />
        <Box>
          <CustomButton text="Learn More" />
          <CustomButton color="black" text="Contact Me" customStyle={{margin: '0 30px'}} />
        </Box>
      </Grid2>
      <Grid2 size={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{width: '100%', height: '80%', backgroundImage: 'url(/image/bc8f7c686942c8d11cc9a4dec0983333.png)', backgroundSize: 'cover', backgroundPosition: 'right'}}></Box>
      </Grid2>
    </Grid2>
  )
}

export default Part3