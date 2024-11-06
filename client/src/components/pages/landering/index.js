import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'
import { Scrollbar } from 'smooth-scrollbar-react';

import TopBlock from './sub/topBlock';
import Redbar from './sub/redbar';
import Part1 from './sub/part1';
import StartHere from './sub/startHere';
import Part2 from './sub/part2';
import VideoContainer from './sub/videoContainer';
import Part3 from './sub/part3';
import PartWithPeople from './sub/partWithPeople';
import MailContainer from './sub/mailContainer';
import Redbar2 from './sub/redbar2';
import Footer from '../../normal/footer';
// import RalewayWoff2 from './fonts/Raleway-Regular.woff2';

// const theme = createTheme({
//   typography: {
//     fontFamily: 'Staatliches, Arial',
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: `
//         @font-face {
//           font-family: 'Staatliches';
//           font-style: normal;
//           font-display: swap;
//           font-weight: 400;
//           src: local('Staatliches'), local('Staatliches-Regular'), url(${RalewayWoff2}) format('woff2');
//           unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
//         }
//       `,
//     },
//   },
// });

function Landering() {
  return (
    <div className='list-data-1' style={{ display: 'flex', maxHeight: '100vh', fontFamily: 'Staatliches', backgroundColor: '#f6f5ef' }}>
      <Scrollbar
        plugins={{
          overscroll: {
            effect: 'glow',
          },
        }}>
        <TopBlock />
        <Redbar />
        <Part1 />
        <StartHere />
        <Part2 />
        <VideoContainer />
        <Redbar2 text="Are You Interested to Learn more? Purchase Talk Types Today!" buttonText="Order Now!" />
        <Part3 />
        <PartWithPeople />
        <MailContainer />
        <Redbar2 text="Are You Interested to Learn more? Purchase Talk Types Today!" buttonText="Order Now!" />
        <Footer />
      </Scrollbar>
    </div>
  )
}

export default Landering