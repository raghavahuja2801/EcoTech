import React, { useState } from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: #fff;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4em;
  font-weight: bold;
`;

const NavItems = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    top: 60px;
    right: 10px;
    width: 200px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    padding: 10px;
  }
`;

const NavItem = styled.li`
  @media (max-width: 768px) {
    padding: 10px;
    text-align: centre;
    border-bottom: 1px solid #eaeaea;
    &:last-child {
      border: none;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: #333;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <a href="/">
      <Logo>EcoTech</Logo>
      </a>
      <NavItems isOpen={isOpen}>
        <a href="/test">
        <NavItem>Investment Stimulator</NavItem>
        </a>
        <a href='/invest'>
        <NavItem>Learn Investing</NavItem>
        </a>
        <a href='/test'>
        <NavItem>Refine Strategies</NavItem>
        </a>
        <a href='/login'>
        <NavItem>Log In</NavItem>
        </a>
      </NavItems>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>
    </NavContainer>
  );
};

export default Navbar;
