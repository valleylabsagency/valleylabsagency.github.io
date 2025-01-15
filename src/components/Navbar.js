import React from 'react';
import styled from 'styled-components';
import navLogo from '../assets/images/SVGs/nav-logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav>
      <NavSection>
        <LogoContainer>
          <img src={navLogo} alt="logo" />
        </LogoContainer>
      </NavSection>
      
      <NavSection>
        <StyledLink to="/case-studies">Who We Are</StyledLink>
        <StyledLink to="/contact">What We Do</StyledLink>
        <Button>Get Started</Button>
      </NavSection>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem 1rem 4rem;
  background-color: rgba(240, 240, 240, 1);
  position: fixed;
  width: 100%;
  z-index: 10;
  box-shadow: 0px 4px 45.7px 17px rgba(138, 138, 138, 0.25);



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
  color: #000000;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
`;

const LogoContainer = styled.div`

`;

const Button = styled.div`
  background: #0927EB;
  height: 20px;
  color: white;
  font-size: 19px;
  border-radius: 8px;
  padding: 7px 20px 16px 20px;
  margin-left: 15px;
  font-weight: 300;
`;
