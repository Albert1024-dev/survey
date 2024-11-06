import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'
import { Scrollbar } from 'smooth-scrollbar-react';
import Header from './sub/header';
import Part1 from './sub/part1';
import Part2 from './sub/part2';
import FourBlockContainer from './sub/fourBlockContainer';
import Cousele from './sub/cousele';
import BlogContainer from './sub/blogContainer';
import BlackPart from './sub/blackPart';
import Footer from '../../normal/footer';


function Home() {
  return (
    <div className='list-data-1' style={{ display: 'flex', maxHeight: '100vh', }}>
      <Scrollbar
        plugins={{
          overscroll: {
            effect: 'glow',
          },
        }}>
        <Header />
        <Part1 />
        <Part2 />
        <FourBlockContainer />
        <Cousele />
        <BlogContainer />
        <BlackPart />
        <Footer darkMode />
      </Scrollbar>
    </div>
  )
}

export default Home