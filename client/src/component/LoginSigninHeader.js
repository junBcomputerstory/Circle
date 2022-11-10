import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Text = styled.text`
  font-family: 'IBM-Light';
  margin: 0 10px;
  text-decoration: none;
`;

function LoginSigninHeader(props) {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (sessionStorage.length != 0) {
      setIsLogin(true);
    }
  }, []);

  const Logout = () => {
    setIsLogin(false);
    sessionStorage.clear();
    console.log(sessionStorage);
    document.location.href = '/';
  };

  return isLogin ? (
    <>
      <Text>{sessionStorage.getItem('nickname')}님, 환영합니다!</Text>
      <button style={{ border: 'none', borderRadius: 10, backgroundColor: '#F8F5FC' }} onClick={Logout}>
        <text style={{ fontFamily: 'iBM-Light' }}>로그아웃</text>
      </button>
    </>
  ) : (
    <div>
      <Link style={{ textDecoration: 'none' }} to="/Login">
        <Text>로그인</Text>
      </Link>
      <Link style={{ textDecoration: 'none' }} to="/Signin">
        <Text>회원가입</Text>
      </Link>
    </div>
  );
}

export default LoginSigninHeader;
