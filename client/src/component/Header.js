import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginSigninHeader from './LoginSigninHeader';
import { Link } from 'react-router-dom';

function Header(props) {
  const NavStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
  };
  const FontStyle = {
    fontSize: 23,
    fontFamily: 'IBM-Regular',
    marginRight: 30,
    marginLeft: 30,
  };
  const LogoFont = {
    fontSize: 30,
    fontFamily: 'IBM-Medium',
    alignItem: 'center',
  };
  const ImgStyle = {
    marginRight: 10,
  };
  return (
    <Navbar sticky="top" style={{ backgroundColor: 'white' }} expand="lg">
      <Container>
        <Navbar.Brand style={LogoFont}>
          <Link style={{ textDecoration: 'none' }} to="/">
            <img style={ImgStyle} src="/img/logo.png" width="50" height="50" alt="logo-img" />
            Circles
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={NavStyle} id="basic-navbar-nav">
          <Nav>
            <Nav.Link style={FontStyle}>
              <Link style={{ textDecoration: 'none' }} to="/searchcircle">
                써클 찾기
              </Link>
            </Nav.Link>
            <Nav.Link style={FontStyle}>
              <Link style={{ textDecoration: 'none' }} to="/makecircle">
                써클 만들기
              </Link>
            </Nav.Link>
            <Nav.Link style={FontStyle}>
              <Link style={{ textDecoration: 'none' }} to="/mypage">
                마이페이지
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <LoginSigninHeader />
      </Container>
    </Navbar>
  );
}

export default Header;
