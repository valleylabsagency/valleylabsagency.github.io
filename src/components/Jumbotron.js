import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo_processed.png';

const Jumbotron = () => {
  return (
    <Jumbo>
      <LogoContainer>
        <img src={logo} alt="Company Logo" />
        <Slogan>Your Vision, Our Code</Slogan>
      </LogoContainer>
      <Content>
        <Button>Request a Free Consultation</Button>
      </Content>
    </Jumbo>
  );
};

export default Jumbotron;

const Jumbo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  height: 700px;
  padding: 100px 2rem 0 2rem;
  background: #f9f9f9;
  color: #004888;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 6rem 1rem;
  }
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const Slogan = styled.h2`
  margin-top: 1rem;
  font-size: 1.8rem;
  color: #001f3f;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  color: #ffffff;
  background-color: #004888;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00796b;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.8rem 1.5rem;
  }
`;
