import { Grid2, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import React, { forwardRef, useState } from 'react';
import CustomButton from '../../../normal/customButton';
import SubTitleText from '../../../normal/subTitleText';
import SubTitleLargeText from '../../../normal/subTitleLargeText';
import CustomInputText from '../../../normal/customInputText';
import CustomTextArea from '../../../normal/customTextArea';
import NormalText from '../../../normal/normalText';

import config from '../../../../config/config';
import axios from 'axios';
import { toast } from 'react-toastify';


const MailContainer = forwardRef((props, ref) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [company, setCompany] = useState("");
    const [industry, setIndustry] = useState("");
    const [message, setMessage] = useState("");

    const onMessage = () => {
        const messages = {
            firstName,
            lastName,
            email,
            phone,
            country,
            company,
            industry,
            message
        };

        axios
            .post(config.serverURL + '/api/message', messages)
            .then(response => {
                toast(response.data.message, { type: response.data.type });
            })
            .catch(err => {
                toast("Error!", { type: 'error' });
        })
    }

    return (
        <Grid2 container columns={24} sx={{ backgroundColor: '#f0f0f0', padding: '100px 60px' }} ref={ref}>
            <Grid2 size={24}>
                <SubTitleText text="contact" center />
            </Grid2>
            <Grid2 size={24}>
                <SubTitleLargeText text="Get In Touch!" center />
            </Grid2>
            <Grid2 size={7}></Grid2>
            <Grid2 size={10} sx={{ padding: '10px' }}>
                <Paper elevation={3} sx={{ padding: '35px' }}>
                    <Grid2 container columns={4} spacing={2}>
                        <Grid2 size={2}>
                            <CustomInputText placeholder="First Name..." onChange={e => { setFirstName(e.target.value)}} />
                        </Grid2>
                        <Grid2 size={2}>
                            <CustomInputText placeholder="Last Name..." onChange={e => { setLastName(e.target.value)}} />
                        </Grid2>
                        <Grid2 size={2}>
                            <CustomInputText placeholder="Email Address..." onChange={e => { setEmail(e.target.value)}} />
                        </Grid2>
                        <Grid2 size={2}>
                            <CustomInputText placeholder="Phone Number..." onChange={e => { setPhone(e.target.value)}} />
                        </Grid2>
                        <Grid2 size={4}>
                            <CustomInputText placeholder="Country Name(optional)..." onChange={e => { setCountry(e.target.value)}} />
                        </Grid2>
                        <Grid2 size={2}>
                            <CustomInputText placeholder="Company website (optional)..." onChange={e => { setCompany(e.target.value)}} />
                        </Grid2>
                        <Grid2 size={2}>
                            <CustomInputText placeholder="Industry(optional)..." onChange={e => { setIndustry(e.target.value)}} />
                        </Grid2>
                        <Grid2 size={4}>
                            <CustomTextArea placeholder="Your Interests and/or Needs..." rows="4" onChange={e => { setMessage(e.target.value)}} />
                        </Grid2>
                        <Grid2 size={4}>
                            <CustomButton text="Send Message" fullWidth onClick={() => onMessage()} />
                        </Grid2>
                    </Grid2>
                </Paper>
            </Grid2>
            <Grid2 size={7}></Grid2>
            <Grid2 size={24} sx={{ textAlign: 'center', padding: '10px' }}>
                <EmailIcon sx={{ color: "#f23123" }} fontSize='large' />
                <NormalText text='&nbsp;&nbsp;amanda@amandakenderes.com' customStyle={{ display: 'inline', paddingTop: '2px' }} />
            </Grid2>
        </Grid2>
    )
});

export default MailContainer;