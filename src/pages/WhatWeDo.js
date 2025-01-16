import React from 'react';
import styled from 'styled-components';
import tylerImage from '../assets/images/tyler.jpg';

const WhatWeDo = () => {
  return (
    <Container>
      {/* Heading Section */}
      <HeadingSection>
        <MainHeading>Your Vision. Our Code</MainHeading>
        <SubHeading>At Valley Labs, we specialize in creating custom web and mobile applications designed to drive business success</SubHeading>
        <Paragraph>(lorem ipsum)</Paragraph>
      </HeadingSection>

      {/* Grey Background Section */}
      <GreySection>
        <Image src={tylerImage} alt="Tyler Valley" />
        <TextContent>
          <Title>Lorem ipsum</Title>
          <Description>(longer lorem ipsum text)</Description>
        </TextContent>
      </GreySection>
    </Container>
  );
};

export default WhatWeDo;

// Styled Components
const Container = styled.div`
  padding: 5rem 0;
  font-family: 'Mukta', sans-serif;
`;

const HeadingSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const MainHeading = styled.h1`
  font-size: 66px;
  color: rgba(6, 27, 176, 1);
  font-weight: 700;
  margin-bottom: 1rem;
`;

const SubHeading = styled.h2`
  font-size: 32px;
  color: rgba(118, 185, 240, 1);
  font-weight: 300;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: rgba(118, 185, 240, 1);
`;

const GreySection = styled.div`
  background: linear-gradient(180deg, #DCDCDC 0%, #D3D3D3 100%);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 80px 0;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 25px;
  margin-right: 2rem;
`;

const TextContent = styled.div`
  max-width: 500px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: black;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 16px;
  color: black;
  line-height: 1.6;
`;
