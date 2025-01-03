import React from 'react';
import styled from 'styled-components';

const Jumbotron = () => {
  return (
    <Jumbo>
      <Content>
        <Text>Valley Labs</Text>
        <Button>Request a Free Consultation</Button>
      </Content>
      <LogoContainer>
        <Logo>V</Logo>
      </LogoContainer>
    </Jumbo>
  );
};

export default Jumbotron;

const Jumbo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 2rem;
  background-color: #e0f7fa;
  color: teal;
  text-align: left;
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  height: 400px;
`;

const Logo = styled.div`
  font-size: 12rem;
  font-weight: bold;
  font-family: "Monoton", serif;
`;

const Content = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Text = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  color: white;
  background-color: teal;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #00796b;
  }
`;
