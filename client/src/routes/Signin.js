import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components';
import { FaUser, FaLock } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import Button from 'react-bootstrap/Button';
import SelectInterest from '../component/SelectInterest';
import { Link } from 'react-scroll';
import Footer from '../component/Footer';
import axios from 'axios';

const Title = styled.text`
  font-size: 60px;
  font-family: 'IBM-Bold';
  text-align: center;
`;

const SubTitle = styled.text`
  font-size: 20px;
  font-family: 'IBM-Regular';
  text-align: center;
`;

function Signin(props) {
  const [selectedInterest, setSelectedInterest] = useState([]);
  const [userInfo, setUserInfo] = useState({
    nickname: '',
    ID: '',
    PW: '',
    confirmPW: '',
  });

  const { nickname, ID, PW, confirmPW } = userInfo;
  const onChange = e => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setUserInfo({
      ...userInfo, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const [isSubmit, setIsSubmit] = useState(false);

  const InputStyle = {
    width: 400,
    height: 40,
    fontSize: 18,
    fontFamily: 'IBM-Regular',
    paddingLeft: 10,
    marginBottom: 20,
  };

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

  const Signin = () => {
    console.log(userInfo);
    axios
      .post('http://localhost:3000/Signin', {
        ID: userInfo.ID,
        PW: userInfo.PW,
        nickname: userInfo.nickname,
      })
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };

  const catchInterest = interest => {
    console.log(interest);
  };
  return (
    <Container>
      <Container style={{ marginTop: 30, width: 600, justifyContent: 'center', textAlign: 'center', backgroundColor: 'white' }}>
        <Title>Circles</Title> <br />
        <SubTitle>써클즈와 함께 여러 써클에 참여해보세요!</SubTitle>
        <div style={{ marginTop: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InputIcon>
              <IoMdMail size="25" />
            </InputIcon>
            <input style={InputStyle} name="ID" placeholder="아이디" onChange={onChange} value={ID} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InputIcon>
              <FaLock size="20" />
            </InputIcon>
            <input style={InputStyle} name="PW" placeholder="비밀번호" onChange={onChange} value={PW} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InputIcon>
              <FaLock size="20" />
            </InputIcon>
            <input style={InputStyle} name="confirmPW" placeholder="비밀번호 확인" onChange={onChange} value={confirmPW} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InputIcon>
              <FaUser size="20" />
            </InputIcon>
            <input style={InputStyle} name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
          </div>
        </div>
      </Container>
      <Container style={{ marginTop: 30, width: 600, justifyContent: 'center', textAlign: 'center', backgroundColor: 'white' }}>
        <SelectInterest setSelectedInterest={setSelectedInterest} />
        <Button size="lg" style={{ width: 480, marginTop: 50 }} variant="warning" onClick={Signin}>
          가입하기
        </Button>
      </Container>
      <div style={{ height: '20px' }} />
    </Container>
  );
}

export default Signin;
