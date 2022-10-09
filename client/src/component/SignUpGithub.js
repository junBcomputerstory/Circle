import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const SignDiv = styled.div`
  width: 440px;
  height: 50px;
  border-radius: 5px;
  justify-content: 'center';
  text-align: 'center';
  box-shadow: inset 0 0 0 2px #e3e9ed;
  line-height: 50px;
  margin: auto;
  margin-bottom: 20px;
`;
function SignUpGithub(props) {
  return (
    <SignDiv>
      <text style={{ fontFamily: 'IBM-Regular', fontSize: 18 }}>
        <FaGithub style={{ marginRight: 10 }} size="25" />
        Github로 로그인하기
      </text>
    </SignDiv>
  );
}

export default SignUpGithub;
