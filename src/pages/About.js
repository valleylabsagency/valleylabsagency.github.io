import React from 'react';
import styled from 'styled-components';
import tylerImage from '../assets/images/tyler.jpg';

const About = () => {
  return (
    <Container>
      {/* Heading Section */}
      <HeadingSection>
        <MainHeading>About Valley Labs</MainHeading>
        <SubHeading>Building Innovative Solutions for your business</SubHeading>
        <Paragraph>At Valley Labs, we specialize in crafting cutting-edge digital solutions 
          tailored to your needs. Our team of experts is dedicated to innovation 
          and excellence, ensuring every project we undertake delivers 
          unmatched results and value.</Paragraph>
      </HeadingSection>

      {/* Meet the Team Section */}
      <MeetTheTeamSection>
        <SectionHeading>Meet the Team</SectionHeading>
        <TeamMember>
          <Image src={tylerImage} alt="Tyler Valley" />
          <Name>Tyler Valley</Name>
          <Role>Founder and Lead Engineer</Role>
          <Description> Tyler leads our team with a passion for developing transformative 
            technologies. With years of experience, he ensures that every project 
            meets the highest standards of quality and innovation.</Description>
        </TeamMember>
      </MeetTheTeamSection>
    </Container>
  );
};

export default About;

// Styled Components
const Container = styled.div`
 padding: 20em 0;
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
  margin-bottom: 0;

  @media (max-width: 984px) {
    font-size: 50px;
  }
  @media (max-width: 584px) {
    font-size: 38px;
  }
`;

const SubHeading = styled.h2`
  font-size: 66px;
  color: rgba(118, 185, 240, 1);
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 1rem;
  width: 80%;
  margin: auto;
  font-weight: 700;
  line-height: 70px;
  max-width: 800px;

  @media (max-width: 984px) {
    font-size: 50px;
    
  }
  @media (max-width: 584px) {
    font-size: 38px;
    line-height: 45px
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: rgba(118, 185, 240, 1);
  margin-top: 6em;
`;

const MeetTheTeamSection = styled.div`
    background: linear-gradient(180deg, #DCDCDC 0%, #D3D3D3 100%);
    z-index: 5;
    text-align: center;
    position: relative;
    padding: 80px 0;
`;

const SectionHeading = styled.h1`
  font-size: 36px;
  color: rgba(6, 27, 176, 1);
  margin-bottom: 2rem;
`;

const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 25px;
  margin-bottom: 1rem;
`;

const Name = styled.h2`
  font-size: 24px;
  color: black;
  margin-bottom: 0.5rem;
`;

const Role = styled.h3`
  font-size: 18px;
  color: rgba(118, 185, 240, 1);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 16px;
  color: black;
  text-align: center;
`;
