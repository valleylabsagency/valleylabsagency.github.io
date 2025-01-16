import React from 'react';
import styled from 'styled-components';
import tylerImage from '../assets/images/tyler.jpg';

const About = () => {
  return (
    <Container>
      {/* Heading Section */}
      <HeadingSection>
        <MainHeading>Test Heading</MainHeading>
        <SubHeading>(lorem ipsum text)</SubHeading>
        <Paragraph>(lorem ipsum text)</Paragraph>
      </HeadingSection>

      {/* Meet the Team Section */}
      <MeetTheTeamSection>
        <SectionHeading>Meet the Team</SectionHeading>
        <TeamMember>
          <Image src={tylerImage} alt="Tyler Valley" />
          <Name>Tyler Valley</Name>
          <Role>Founder and Director</Role>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat velit vitae orci faucibus, eget laoreet mi ullamcorper.</Description>
        </TeamMember>
      </MeetTheTeamSection>
    </Container>
  );
};

export default About;

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
