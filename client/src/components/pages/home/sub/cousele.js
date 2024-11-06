import React from 'react'
import BoldText from '../../../normal/boldText'
import { Box, Rating } from '@mui/material'
import SubTitleName from '../../../normal/subTitleName'
import Carousel from 'react-multi-carousel';
import NormalText from '../../../normal/normalText';
import Avatar from '@mui/material/Avatar';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function Cousele() {
    return (
        <Box sx={{ padding: '100px' }}>
            <Box>
                <SubTitleName text="See what others have to say" />
                <Carousel
                    swipeable={false}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div style={{ padding: '20px' }}>
                        <Box sx={{ padding: '40px', backgroundColor: '#efecea', margin: '40px' }}>
                            <Box>
                                <Rating value={5} readOnly />
                                <NormalText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend lobortis dui, sit amet pulvinar eros gravida sit amet. Fusce non dui vitae neque ornare sagittis in a felis." />
                            </Box>
                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                <Box>
                                    <BoldText text="Client Name0" customStyle={{ borderTop: '1px solid #333'}} />
                                    <BoldText text="JOB POSITION" fontSize={14} customStyle={{ padding: '0px' }} />
                                </Box>
                                <Box>
                                    {/* <img src="/image/sheep.png" style={{width: '70px', height: '70px'}} /> */}
                                    <Avatar alt="Remy Sharp" src="/image/sheep.png" sx={{ width: 70, height: 70 }} />
                                </Box>
                            </Box>
                        </Box>
                    </div>
                    <div style={{ padding: '20px' }}>
                        <Box sx={{ padding: '40px', backgroundColor: '#efecea', margin: '40px' }}>
                            <Box>
                                <Rating value={5} readOnly />
                                <NormalText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend lobortis dui, sit amet pulvinar eros gravida sit amet. Fusce non dui vitae neque ornare sagittis in a felis." />
                            </Box>
                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                <Box>
                                    <BoldText text="Client Name" customStyle={{ borderTop: '1px solid #333'}} />
                                    <BoldText text="JOB POSITION" fontSize={14} customStyle={{ padding: '0px' }} />
                                </Box>
                                <Box>
                                    {/* <img src="/image/sheep.png" style={{width: '70px', height: '70px'}} /> */}
                                    <Avatar alt="Remy Sharp" src="/image/sheep.png" sx={{ width: 70, height: 70 }} />
                                </Box>
                            </Box>
                        </Box>
                    </div>
                    <div style={{ padding: '20px' }}>
                        <Box sx={{ padding: '40px', backgroundColor: '#efecea', margin: '40px' }}>
                            <Box>
                                <Rating value={5} readOnly />
                                <NormalText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend lobortis dui, sit amet pulvinar eros gravida sit amet. Fusce non dui vitae neque ornare sagittis in a felis." />
                            </Box>
                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                <Box>
                                    <BoldText text="Client Name1" customStyle={{ borderTop: '1px solid #333'}} />
                                    <BoldText text="JOB POSITION" fontSize={14} customStyle={{ padding: '0px' }} />
                                </Box>
                                <Box>
                                    {/* <img src="/image/sheep.png" style={{width: '70px', height: '70px'}} /> */}
                                    <Avatar alt="Remy Sharp" src="/image/sheep.png" sx={{ width: 70, height: 70 }} />
                                </Box>
                            </Box>
                        </Box>
                    </div>
                    <div style={{ padding: '20px' }}>
                        <Box sx={{ padding: '40px', backgroundColor: '#efecea', margin: '40px' }}>
                            <Box>
                                <Rating value={5} readOnly />
                                <NormalText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend lobortis dui, sit amet pulvinar eros gravida sit amet. Fusce non dui vitae neque ornare sagittis in a felis." />
                            </Box>
                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                <Box>
                                    <BoldText text="Client Name2" customStyle={{ borderTop: '1px solid #333'}} />
                                    <BoldText text="JOB POSITION" fontSize={14} customStyle={{ padding: '0px' }} />
                                </Box>
                                <Box>
                                    {/* <img src="/image/sheep.png" style={{width: '70px', height: '70px'}} /> */}
                                    <Avatar alt="Remy Sharp" src="/image/sheep.png" sx={{ width: 70, height: 70 }} />
                                </Box>
                            </Box>
                        </Box>
                    </div>
                    <div style={{ padding: '20px' }}>
                        <Box sx={{ padding: '40px', backgroundColor: '#efecea', margin: '40px' }}>
                            <Box>
                                <Rating value={5} readOnly />
                                <NormalText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend lobortis dui, sit amet pulvinar eros gravida sit amet. Fusce non dui vitae neque ornare sagittis in a felis." />
                            </Box>
                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                <Box>
                                    <BoldText text="Client Name4" customStyle={{ borderTop: '1px solid #333'}} />
                                    <BoldText text="JOB POSITION" fontSize={14} customStyle={{ padding: '0px' }} />
                                </Box>
                                <Box>
                                    {/* <img src="/image/sheep.png" style={{width: '70px', height: '70px'}} /> */}
                                    <Avatar alt="Remy Sharp" src="/image/sheep.png" sx={{ width: 70, height: 70 }} />
                                </Box>
                            </Box>
                        </Box>
                    </div>
                </Carousel>
            </Box>
        </Box>
    )
}

export default Cousele