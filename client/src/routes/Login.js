import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components';
import { IoMdMail } from 'react-icons/io';
import { FaLock } from 'react-icons/fa';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/esm/Button';
import SignUpGithub from '../component/SignUpGithub';
import SignUpGoogle from '../component/SignUpGoogle';
import SignUpKakao from '../component/SignUpKakao';
import { Link } from 'react-router-dom';
import axios from 'axios';

const InputIcon = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid gray;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  border-radius: 2px;
  border-right: none;
`;

const InputStyle = {
  width: 400,
  height: 40,
  fontSize: 18,
  fontFamily: 'IBM-Regular',
  paddingLeft: 10,
  marginBottom: 20,
};

const ImgStyle = {
  marginRight: 10,
};

function Login(props) {
  const [userInfo, setUserInfo] = useState({
    userId: '',
    userPw: '',
  });

  const { userId, userPw } = userInfo;
  const onChange = e => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setUserInfo({
      ...userInfo, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const sendLogin = () => {
    axios
      .post(
        '/user/login',
        {
          email: userInfo.userId,
          password: userInfo.userPw,
        },
        { withCredentials: true },
      )
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };

  return (
    <div style={{ flexDirection: 'row' }}>
      <Row>
        <Col style={{ paddingRight: 0 }}>
          <div style={{ display: 'flex', width: '60vw', height: '100%', backgroundColor: '#b5d1ff' }}>
            {/* <iframe
              src="https://player.vimeo.com/video/747505231?h=e73e0f208c&badge=0&background=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&quality=1080p"
              title="video"
              width="100%"
              height="100%"
            /> */}
          </div>
        </Col>
        <Col style={{ marginLeft: 0, marginRight: 0, paddingLeft: 0 }}>
          <div style={{ height: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img style={ImgStyle} src="/img/logo.png" width="50" height="50" alt="logo-img" />
            <text style={{ fontFamily: 'IBM-Semibold', fontSize: 40 }}>Circles</text>
          </div>

          <div>
            <Container style={{ height: '80vh', justifyContent: 'center', textAlign: 'center', backgroundColor: 'white' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                  <InputIcon>
                    <IoMdMail size="25" />
                  </InputIcon>
                  <input style={InputStyle} name="userId" placeholder="아이디(이메일)" onChange={onChange} value={userId} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                  <InputIcon>
                    <FaLock size="20" />
                  </InputIcon>
                  <input type="password" style={InputStyle} name="userPw" placeholder="비밀번호" onChange={onChange} value={userPw} />
                </div>
              </div>
              <Button style={{ width: 440 }} variant="primary" onClick={sendLogin}>
                로그인하기
              </Button>
              <br />
              <text style={{ fontFamily: 'IBM-Regular', fontSize: 14 }}>
                아직 계정이 없으세요?
                <Link style={{ textDecoration: 'none', marginLeft: 5 }} to="/signin">
                  회원가입
                </Link>
              </text>
              <br />
              <br />
              <text style={{ fontFamily: 'IBM-Regular', fontSize: 22 }}>또는</text>
              <hr />
              <br />
              <Container style={{ justifyContent: 'center', textAlign: 'center', marginBottom: 40 }}>
                <SignUpGithub />
                <SignUpGoogle />
                <SignUpKakao />
              </Container>
              <div id="footer">
                <text style={{ fontFamily: 'IBM-Regular', fontSize: 14 }}>
                  Dankook University 2022 Capston Project
                  <br />
                  copyrightⓒ 2022 All rights reserved by Team.Circles
                </text>
              </div>
            </Container>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
