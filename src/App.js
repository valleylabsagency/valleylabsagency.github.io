import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const LogoContainer = styled(motion.div)`
  // styles
`;


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      
    </>
  );
};

export default App;
