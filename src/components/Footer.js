import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a2b4c;  // Color taken from the image, adjust as needed
  padding: 10px 50px;
  color: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
`;

const Copyright = styled.p`
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>© 2023, Ecotech, LLC.</Copyright>
      <NavLinks>
        <NavLink href="#">Terms of Use</NavLink>
        <NavLink href="#">Privacy Policy</NavLink>
        <NavLink href="#">Help Center</NavLink>
      </NavLinks>
    </FooterContainer>
  );
};

export default Footer;
