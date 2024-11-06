import { Box, Grid2, Paper } from '@mui/material'
import React from 'react'
import SubTitleText from '../../../normal/subTitleText'
import SubTitleName from '../../../normal/subTitleName'
import NormalText from '../../../normal/normalText'
import BoldText from '../../../normal/boldText'

function StartHere() {
    return (
        <Box sx={{ backgroundImage: 'url(/image/dd7f67e180bba701abbc0c5cffa91b3d.png)', padding: '150px 0 150px 0' }}>
            <SubTitleText text="Start Here" color={'white'} center />
            <SubTitleName text="The Three Communication Categories" color={'white'} center variant="h2" />
            <BoldText center color={'white'} fontWeight={'normal'} fontSize={18} text="So, what does objective understanding, subjective experiencing, and subjective understanding mean?" />
            <Grid2 container columns={24} sx={{ padding: '30px 120px' }} spacing={10}>
                <Grid2 size={8}>
                    <Paper elevation={3} square sx={{ backgroundImage: 'linear-gradient(135deg, #303030, #1b1b1b)', padding: '35px', textAlign: 'justify' }}>
                        <SubTitleName text="INFORMING" color="white" variant="h4" customStyle={{padding: '10px 0'}} />
                        <NormalText color="white" fontSize={"16px"} text="Objective understanding is a kind of informing. People with A in their Talk Type like facts and information and they like to “be in the know” about things. They are looking for a conversational partner to engage in understanding-seeking with them. They don’t mind being interrupted if the purpose is to further the understanding (e.g., “wait a minute, so what you’re saying is…) and they don’t mind being questioned if you have a more accurate understanding (e.g., but isn’t that number actually closer to 300?). If unsure, the pair can look it up to determine fact from fiction. It’s nothing personal." />
                    </Paper>

                </Grid2>
                <Grid2 size={8}>
                    <Paper elevation={3} square sx={{ backgroundImage: 'linear-gradient(135deg, #303030, #1b1b1b)', padding: '35px', textAlign: 'justify' }}>
                        <SubTitleName text="RELATING" color="white" variant="h4" customStyle={{padding: '10px 0'}} />
                        <NormalText color="white" fontSize={"16px"} text="Subjective experiencing essentially means “relating.” People with B in their Talk Type relate their experiences to others and Bs who are listening will relate these stories to their own lives. When a B tells you about their day, they are not looking to make deep connections out of it. Instead, they are looking to be heard, so it’s best not to interrupt them—or they may feel that you’re not listening to them! Please don’t challenge their facts while they’re talking either, as this is not the “point” of their story! Bs like to “be in the know” about people. While they don’t all like to do it, most Bs are skilled at small talk, as they can use their B to keep conversations light and personal." />
                    </Paper>

                </Grid2>
                <Grid2 size={8}>
                    <Paper elevation={3} square sx={{ backgroundImage: 'linear-gradient(135deg, #303030, #1b1b1b)', padding: '35px', textAlign: 'justify' }}>
                        <SubTitleName text="MEANING-MAKING" color="white" variant="h4" customStyle={{padding: '10px 0'}} />
                        <NormalText color="white" fontSize={"16px"} text="Subjective understanding is all about meaning. People with C in their Talk Type value deep, meaningful connections. They want to understand themselves and others. They draw significance out of information, experiences, and relationships. Cs are looking for a conversational partner to engage in understanding-seeking with them. Cs don’t usually mind being interrupted if someone is trying to understand them better. If they are challenged too much, however, they may feel that you are invalidating them." />
                    </Paper>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default StartHere