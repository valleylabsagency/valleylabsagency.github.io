import React from 'react';
import styled from 'styled-components';
import '../assets/CSS/Home.css'; 

const Jumbotron = () => {
  return (
    <Jumbo>
      <Left>
        <LargeText>Let's Build Something Great,<br /><span style={{color: "rgba(118, 185, 240, 1)"}}>Together.</span></LargeText>
        <SmallText>Valley Labs brings your digital products to life.</SmallText>
      </Left>
      <Right>
        <Circle1 />
        <Circle2 />
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
  height: 500px;
  padding: 100px 2rem 0 2rem;
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
  padding: 1rem;
  z-index: 2; /* Ensures text is above the circles if overlapping */
`;

const LargeText = styled.h1`
  width: 500px;
  margin: 0;
  line-height: 1.2;
  font-family: "Mukta", serif;
  font-size: 66px;
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
  font-size: 32px;
  font-weight: 300;
  margin-top: 1rem;
  color:rgba(163, 163, 163, 1);

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

const Circle1 = styled(Circle)`
  width: 900px;
  height: 900px;
  right: -145px;
`;

const Circle2 = styled(Circle)`
 width: 1171px;
 height: 1058px;
 top: -203px;
 left: -66px;
`;
