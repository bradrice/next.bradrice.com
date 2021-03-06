import React from 'react';
import headerStyles from './header.module.scss';
import NavLink from '../link/link';
import { useRouter } from "next/router";
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  const router = useRouter();

  return (
    <header className="header">
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-start">
  <Nav activeKey="/" onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}>
  <Nav.Item className={headerStyles.navItem}>
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item className={headerStyles.navItem}>
    <Nav.Link href="/about" eventKey="link-1">About</Nav.Link>
  </Nav.Item>
  <Nav.Item className={headerStyles.navItem}>
    <Nav.Link href="/art" eventKey="link-2">Art</Nav.Link>
  </Nav.Item>
  <Nav.Item className={headerStyles.navItem}>
    <Nav.Link href="/portfolio" eventKey="link-3">Digital Design</Nav.Link>
  </Nav.Item>
  <Nav.Item className={headerStyles.navItem}>
    <Nav.Link href="/contact" eventKey="link-4">Contact</Nav.Link>
  </Nav.Item>
</Nav>
  </Navbar.Collapse>
</Navbar>
      
      
    <div className={headerStyles.logo}>
      <img src="/images/BR1-bw.png" alt="Brad Rice" className={headerStyles.logoImg} /> <div className={headerStyles.logoName}>Brad Rice | Art & Technology</div>
    </div>
    </header>
    
  )
}

export default Header;