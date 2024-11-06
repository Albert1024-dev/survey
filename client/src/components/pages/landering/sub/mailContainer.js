import { Grid2, Paper, TextField } from '@mui/material'
import React from 'react'
import SubTitleText from '../../../normal/subTitleText'
import SubTitleName from '../../../normal/subTitleName'
import NormalText from '../../../normal/normalText'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import BoldText from '../../../normal/boldText'
import CustomButton from '../../../normal/customButton'

function MailContainer() {
    return (
        <Grid2 container columns={14} sx={{ padding: '150px' }} spacing={15}>
            <Grid2 size={8} container columns={6} spacing={0}>
                <Grid2 size="6">
                    <SubTitleText text="contact" />
                    <SubTitleName text="Get in touch today!" variant="h2" />
                    <NormalText text="Do you have some questions about the book or you want to collaborate? Contact me and let’s see how we can help each other!" fontSize={16} />
                </Grid2>
                <Grid2 size={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LocalPhoneOutlinedIcon sx={{ fontSize: 50, color: 'red' }} />
                </Grid2>
                <Grid2 size={5}>
                    <BoldText text="Phone Number:" customStyle={{ padding: '0px' }} fontStyle="normal" />
                    <NormalText text="+123 456 7890" customStyle={{ padding: '0px' }} />
                </Grid2>
                <Grid2 size={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',paddingTop: '30px' }}>
                    <AttachEmailOutlinedIcon sx={{ fontSize: 50, color: 'red' }} />
                </Grid2>
                <Grid2 size={5} sx={{ paddingTop: '30px'}}>
                    <BoldText text="Mail Address:" customStyle={{ padding: '0px' }} fontStyle="normal" />
                    <NormalText text="amanda@amandakenderes.com." customStyle={{ padding: '0px' }} />
                </Grid2>
            </Grid2>
            <Grid2 size={6} >
                <Paper elevation={3} sx={{ padding: '30px'}}>
                    <Grid2 container columns={4} rowSpacing={1} columnSpacing={4}>
                        <Grid2 size={4}>
                            <SubTitleName text="SEND AN INQUIRY" variant="h4" center />
                        </Grid2>
                        <Grid2 size={2}>
                            <TextField  label="First name..." variant="standard" fullWidth />
                        </Grid2>
                        <Grid2 size={2}>
                            <TextField  label="Last name..." variant="standard" fullWidth />
                        </Grid2>
                        <Grid2 size={2}>
                            <TextField  label="Phone number..." variant="standard" fullWidth />
                        </Grid2>
                        <Grid2 size={2}>
                            <TextField  label="Email address..." variant="standard" fullWidth />
                        </Grid2>
                        <Grid2 size={4}>
                            <TextField  label="Message..." variant="standard" fullWidth  rows={3} multiline />
                        </Grid2>
                        <Grid2 size={4} sx={{ paddingTop: '20px'}}>
                            <CustomButton text="Send Message!" color="black" fullWidth />
                        </Grid2>
                    </Grid2>
                </Paper>
            </Grid2>
        </Grid2>
    )
}

export default MailContainer