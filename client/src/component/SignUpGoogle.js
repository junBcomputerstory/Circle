import React from 'react';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';

const SignDiv = styled.div`
  width: 440px;
  height: 50px;
  border-radius: 5px;
  justify-content: 'center';
  align-items: 'center';
  text-align: 'center';
  align-content: center;
  box-shadow: inset 0 0 0 2px #e3e9ed;
  line-height: 50px;
  margin: auto;
  margin-bottom: 20px;
`;

function SignUpGoogle(props) {
  return (
    <SignDiv>
      <text style={{ fontFamily: 'IBM-Regular', fontSize: 18 }}>
        <FcGoogle style={{ marginRight: 10 }} size="25" />
        Google로 로그인하기
      </text>
    </SignDiv>
  );
}

export default SignUpGoogle;
