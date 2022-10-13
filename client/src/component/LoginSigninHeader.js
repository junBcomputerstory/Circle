import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Text = styled.text`
  font-family: 'IBM-Light';
  margin: 0 10px;
  text-decoration: none;
`;

function LoginSigninHeader(props) {
  const [isLogin, setIsLogin] = useState(false);
  return isLogin ? (
    <Text>이승현님, 환영합니다!</Text>
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
