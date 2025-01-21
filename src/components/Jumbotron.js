import React from 'react';
import styled from 'styled-components';
import '../assets/CSS/Home.css'; 
import { motion } from "framer-motion";

const Jumbotron = () => {
  return (
    <Jumbo>
      <Left>
        <LargeText>Let's build something great,<br /><span style={{color: "rgba(118, 185, 240, 1)"}}>Together.</span></LargeText>
        <SmallText>Valley Labs brings your digital products to life.</SmallText>
      </Left>
      <Right>
      <AnimatedCircle
          animate={{
            x: [-100, 150, -50, 100], // Smooth, organic horizontal movement
            y: [0, 200, -150, 100], // Larger, fluid vertical movement
          }}
          transition={{
            duration: 12, // Slower movement
            repeat: Infinity,
            ease: "easeInOut",
          }}
          size="900px"
          color="rgba(217, 217, 217, 0.39)"
          style={{ right: "-145px" }}
        />
        <AnimatedCircle
          animate={{
            x: [100, -150, 50, -100], // Opposite horizontal motion
            y: [-50, 150, -200, 50], // Opposite vertical motion
          }}
          transition={{
            duration: 14, // Slightly different timing for variation
            repeat: Infinity,
            ease: "easeInOut",
          }}
          size="1171px"
          color="rgba(217, 217, 217, 0.39)"
          style={{ top: "-203px", left: "-66px" }}
        />
        {/* Any additional overlapping content can be placed here */}
      </Right>
    </Jumbo>
  );
};

export default Jumbotron;

const Jumbo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50em;
  padding: 100px 50px 0 50px;
  background: #f9f9f9;
  color: #004888;
  text-align: left;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 6rem 1rem;
  }
`;

const Left = styled.div`
  flex: 1;
  padding: 1rem 0;
  z-index: 2; /* Ensures text is above the circles if overlapping */
`;

const LargeText = styled.h1`
  width: 1000px;
  margin: 0;
  line-height: 1.2;
  font-family: "Mukta", serif;
  font-size: 70px;
  color: rgba(6, 27, 176, 1);
  font-weight: 700;
  line-height: 53.83px;
  letter-spacing: -0.03em;
  text-align: left;



  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const SmallText = styled.p`
  font-family: "Mukta", serif;
  font-size: 30px;
  font-weight: 300;
  margin-top: 1rem;
  color: #000000;
  margin-left: 6px;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* The z-index is lower than Left to ensure text overlaps circles if needed */
  z-index: 1;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const Circle = styled.div`
  position: absolute;
  background-color: rgba(217, 217, 217, 0.39);
  border-radius: 50%;
  z-index: 1;
`;

const AnimatedCircle = styled(motion.div)`
  position: absolute;
  background-color: ${(props) => props.color || "rgba(217, 217, 217, 0.39)"};
  border-radius: 50%;
  width: ${(props) => props.size || "100px"};
  height: ${(props) => props.size || "100px"};
  z-index: 1;
`;