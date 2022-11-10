import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Header from '../component/Header';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { HiOutlinePencil } from 'react-icons/hi';
import MypageCarousel from '../component/MypageCarousel';
import Footer from '../component/Footer';
import { Interests } from '../component/Interests';
import axios from 'axios';
import { map } from 'jquery';

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Nickname = styled.text`
  font-family: 'IBM-SemiBold';
  font-size: 40px;
  margin: auto 30px;
`;

const Box = styled.div`
  width: 550px;
  margin: 20px auto;
`;

const MypageInterestBox = styled.div`
  flex-direction: row;
  border: 2px solid gray;
  padding: 10px;
  border-radius: 10px;
`;
const CircleList = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid gray;
  border-radius: 10px;
  overflow: hidden;
`;

const BorderBox = styled.div`
  border: 2px solid gray;
  padding-right: 10px;
  border-radius: 10px;
`;
function Mypage(props) {
  const printInterest = interest => {
    switch (interest) {
      case '1':
        return <img src={Interests.workout} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '2':
        return <img src={Interests.study} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '3':
        return <img src={Interests.trip} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '4':
        return <img src={Interests.cooking} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '5':
        return <img src={Interests.coding} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '6':
        return <img src={Interests.volunteer} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '7':
        return <img src={Interests.pet} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '8':
        return <img src={Interests.car} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '9':
        return <img src={Interests.game} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '10':
        return <img src={Interests.fashion} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '11':
        return <img src={Interests.workout} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '12':
        return <img src={Interests.workout} style={{ margin: '5px 5px' }} width={100} height={100} />;
    }
  };
  const [userNickname, setUserNickname] = useState('');
  const [userInterest, setUserInterest] = useState([]);
  if (sessionStorage.length === 0) {
    document.location.href = 'login';
  }
  useEffect(() => {
    axios.get('/user/mypage').then(response => {
      console.log(response.data);
      setUserNickname(response.data.nickname);
      setUserInterest(response.data.interest);
    });
  });
  return (
    <div>
      <Header bgcolor="#f5f8fc" />
      <Container style={{ marginTop: '5%' }}>
        <InfoBox>
          <img
            style={{ borderRadius: '50%' }}
            src="https://dankookcircle.s3.ap-northeast-2.amazonaws.com/badminton.jpeg"
            width="130"
            height="130"
            alt="profile_image"
          />
          <Nickname>
            {userNickname}님
            <Button style={{ marginLeft: '20px' }} variant="secondary" size="sm">
              <HiOutlinePencil /> 수정하기
            </Button>
          </Nickname>
        </InfoBox>
        <Box style={{ width: '550px', margin: '20px auto' }} className="lvbox">
          <text style={{ fontFamily: 'IBM-Regular', fontSize: '30px' }}>Lv 1</text>
          <ProgressBar style={{ width: '150' }} animated variant="warning" now={1} />
        </Box>
        <Box>
          <text style={{ fontFamily: 'IBM-Regular', fontSize: '30px' }}>나의 관심사</text>
          <MypageInterestBox>{userInterest.map(interest => printInterest(interest))}</MypageInterestBox>
        </Box>
        <Box>
          <text style={{ fontFamily: 'IBM-Regular', fontSize: '30px' }}>나의 서클</text>
          <BorderBox>
            <MypageCarousel />
          </BorderBox>
        </Box>
        <Box>
          <text style={{ fontFamily: 'IBM-Regular', fontSize: '30px' }}>나의 뱃지</text>
          <MypageInterestBox>
            <img style={{ margin: '0 5px' }} src="/img/attendence_king.png" width="100" height="100" alt="attendence_king" />
            <img style={{ margin: '0 5px' }} src="/img/activity_king.png" width="100" height="100" alt="activity_king" />
            <img style={{ margin: '0 5px' }} src="/img/october_attendence.png" width="100" height="100" alt="october_attendence" />
          </MypageInterestBox>
        </Box>
        <Footer />
      </Container>
    </div>
  );
}

export default Mypage;
