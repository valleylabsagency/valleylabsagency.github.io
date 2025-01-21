import React from 'react';
import styled from 'styled-components';
import navLogo from '../assets/images/SVGs/nav-logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav>
      <NavSection>
        <LogoContainer>
          <Link to="/">
            <img style={{height: 130}} src={navLogo} alt="logo" />
          </Link>
         
        </LogoContainer>
      </NavSection>
      
      <NavSection>
        <StyledLink to="/about">Who We Are</StyledLink>
        <StyledLink to="/what-we-do">What We Do</StyledLink>
        <StyledLink style={{margin: 0}} to="/contact">
          <Button>Get Started</Button>
        </StyledLink>
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
  padding: 2rem 50px 2rem 50px;
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
  font-size: 25px;
  font-weight: 400;
`;

const LogoContainer = styled.div`

`;

const Button = styled.div`
  background: #0927EB;
  height: 20px;
  color: white;
  font-size: 25px;
  border-radius: 8px;
  padding: 9px 20px 22px 20px;
  margin-left: 15px;
  font-weight: 300;
  outline: none; /* Removes focus outline */
  border: none; /* Ensure no borders are shown */
  cursor: pointer; /* Adds pointer cursor on hover */
`;
