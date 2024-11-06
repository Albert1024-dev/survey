import { Grid2 } from '@mui/material'
import React, { forwardRef } from 'react'
import ReviewBlock from '../../../normal/reviewBlock'
import CustomButton from '../../../normal/customButton'
import SubTitleText from '../../../normal/subTitleText'
import SubTitleLargeText from '../../../normal/subTitleLargeText'
import NormalText from '../../../normal/normalText'

const AboutBook = forwardRef((props, ref) => {
    return (
        <Grid2 container columns={24} sx={{ backgroundColor: '#f0f0f0', padding: '100px 130px' }} ref={ref}>
            <Grid2 size={24}>
                <SubTitleText text="books" center={true} />
            </Grid2>
            <Grid2 size={24}>
                <SubTitleLargeText text="Talk Types" center />
            </Grid2>
            <Grid2 size={24}>
                <NormalText text="How what we say reveals who we are" center={true} />
            </Grid2>
            <Grid2 size={8}>
                <ReviewBlock
                    rating={5}
                    customStyle={{ paddingTop: '50px' }}
                    text="Public speaking is a challenge for me since communication is key to understanding one another. This book helped me understand more about talking, The three Communication Categories and Six talk types. It helped me understand the communication style of different people and how to build good relationships with them.I would rate this book 5 stars out of 5"
                    name="Michael Lising"
                />
            </Grid2>
            <Grid2 size={8}>
                <img src="/image/book.png" style={{ padding: "10px 0" }} alt="Img" />
            </Grid2>
            <Grid2 size={8}>
                <ReviewBlock
                    rating={5}
                    customStyle={{ paddingTop: '250px' }}
                    text="“ The book is very knowledgable on identifying how a person communicates and I had a great time reading the humor portion on each talk Type. The book aims to help readers understand themselves and others better by exploring the unique ways individuals perceive and engage with the world. “"
                    name="Donna Coquilla"
                />
            </Grid2>
            <Grid2 size={24} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CustomButton text="Learn More" color="black" customStyle={{ margin: '0 10px' }} />
                <CustomButton text="Order Now" color="red" customStyle={{ margin: '0 10px' }} />
            </Grid2>
        </Grid2>
    )
});

export default AboutBook