import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  background-color: #cecbcba6;
  padding: 10px 0;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

function Navigation() {
  return (
    <Nav>
      <NavItem href="/"><Icon src="/assets/home.png" alt="Home" />Home</NavItem>
      <NavItem href="/about"><Icon src="/assets/about.png" alt="About" />About</NavItem>
      <NavItem href="/skills"><Icon src="/assets/skills.png" alt="Skills" />Skills</NavItem>
      <NavItem href="/project"><Icon src="/assets/projects.png" alt="Projects" />Projects</NavItem>
      <NavItem href="/contact"><Icon src="/assets/contact.png" alt="Contact" />Contact</NavItem>
    </Nav>
  );
}

export default Navigation;
