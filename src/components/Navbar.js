import React from 'react';
import styled from 'styled-components';
import navLogo from '../assets/images/SVGs/valley-logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav>
      <NavSection>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/services">Services</StyledLink>
      </NavSection>
      
      <LogoContainer>
        <img src={navLogo} alt="logo" />
      </LogoContainer>
      
      <NavSection>
        <StyledLink to="/case-studies">Case Studies</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <PhoneNumber>850-900-6732</PhoneNumber>
      </NavSection>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  background-color: white;
  position: fixed;
  width: 100%;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media(max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media(max-width: 768px) {
    justify-content: center;
    margin: 0.5rem 0;
  }
`;

const StyledLink = styled(Link)`
  margin: 0 1rem;
  color: #004888;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: #00796b;
  }

  @media(max-width: 768px) {
    margin: 0.5rem;
  }
`;

const LogoContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 50px;

  img {
    position: absolute;
    top: -13px;
  }
  
  @media(max-width: 768px) {
    margin: 1rem 0;
  }
`;

const PhoneNumber = styled.div`
  margin-left: 1rem;
  font-weight: bold;
  color: #004888;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;

  @media(max-width: 768px) {
    margin-left: 0.5rem;
   
  }
`;
