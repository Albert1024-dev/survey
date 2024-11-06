import React, { useRef } from 'react';
// import Box from '@mui/material/Box';
import { Scrollbar } from 'smooth-scrollbar-react';

import Header from './sub/header';
import FullPhoto from './sub/fullPhoto';
import TextBlock from './sub/textBlock';
import Cart from './sub/cart';
import AboutBook from './sub/aboutBook';
import Cart2 from './sub/cart2';
import MailContainer from './sub/mailContainer';
import Footer from '../../normal/footer';

function Dashboard() {

  // About Reference
  const aboutSectionRef = useRef(null);
  const scrollToAboutSection = () => {
    aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Books Reference
  const bookSectionRef = useRef(null);
  const scrollToBookSection = () => {
    bookSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Speaking Reference
  const speakingSectionRef = useRef(null);
  const scrollToSpeakingSection = () => {
    speakingSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Get in Touch Reference
  const getInTouchSectionRef = useRef(null);
  const scrollToGetInTouchSection = () => {
    getInTouchSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='list-data' style={{ display: 'flex', maxHeight: '100vh' }}>
      <Scrollbar
        plugins={{
          overscroll: {
            effect: 'glow',
          },
        }}>
        <Header onAboutClick={scrollToAboutSection} onBookClick={scrollToBookSection} onSpeakingClick={scrollToSpeakingSection} onGetInTouchClick={scrollToGetInTouchSection} />
        <FullPhoto />
        <TextBlock />
        <Cart ref={aboutSectionRef} />
        <AboutBook ref={bookSectionRef} />
        <Cart2 ref={speakingSectionRef} />
        <MailContainer ref={getInTouchSectionRef} />
        <Footer />
      </Scrollbar>
    </div>
  )
}

export default Dashboard;