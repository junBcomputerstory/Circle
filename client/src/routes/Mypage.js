import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Header from '../component/Header';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { HiOutlinePencil } from 'react-icons/hi';
import MpCarousel from '../component/MpCarousel';
import Footer from '../component/Footer';
import { Interests } from '../component/Interests';

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
            석홍준님
            <Button style={{ marginLeft: '20px' }} variant="secondary" size="sm">
              <HiOutlinePencil /> 수정하기
            </Button>
          </Nickname>
        </InfoBox>
        <Box style={{ width: '550px', margin: '20px auto' }} className="lvbox">
          <text style={{ fontFamily: 'IBM-Regular', fontSize: '30px' }}>Lv 50</text>
          <ProgressBar style={{ width: '150' }} animated variant="warning" now={45} />
        </Box>
        <Box>
          <text style={{ fontFamily: 'IBM-Regular', fontSize: '30px' }}>나의 관심사</text>
          <MypageInterestBox>
            <img src={Interests.workout} style={{ margin: '5px 5px' }} width={100} height={100} />
            <img src={Interests.game} style={{ margin: '5px 5px' }} width={100} height={100} />
            <img src={Interests.music} style={{ margin: '5px 5px' }} width={100} height={100} />
          </MypageInterestBox>
        </Box>
        <Box>
          <text style={{ fontFamily: 'IBM-Regular', fontSize: '30px' }}>나의 서클</text>
          <BorderBox>
            <MpCarousel />
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
