import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Header from '../component/Header';
import styled from 'styled-components';
import '../css/makecircle.css';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/esm/Button';
import { Interests } from '../component/Interests';

const TitleText = styled.text`
  font-family: 'IBM-Regular';
  font-size: 24px;
  margin: 20px 0;
`;

const InterestDiv = styled.div`
  width: 700px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px auto;
  padding: 5px 0;
  border-radius: 20px;
`;

const ImageSelectButton = styled.div`
  border: none;
  border-radius: 20px;
  width: 200px;
  height: 200px;
  font-size: 50px;
  margin: auto auto;
  background-color: white;
`;

const StyledInput = styled.input`
  background-color: white;
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: limegreen;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: center;
`;

const StyledP = styled.p`
  margin-top: 16px;
  margin-left: 0.7rem;
`;

function MakeCircle(props) {
  const [fileImage, setFileImage] = useState('');
  const [circleName, setCircleName] = useState('');
  const [circleLimit, setCircleLimit] = useState('');
  const [circleLocation, setCircleLocation] = useState('');
  const [circleInfo, setCircleInfo] = useState('');
  const [interest, setInterest] = useState([]);
  const saveFileImage = e => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };
  const text = '설정하려면 체크해주세요';
  const showInfo = () => {
    console.log(fileImage);
    console.log(circleName);
    console.log(circleLimit);
    console.log(circleLocation);
    console.log(circleInfo);
    console.log(interest);
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <Container fluid style={{ backgroundColor: 'orange' }}>
        <div className="form-box">
          <div className="field1">
            <text style={{ fontFamily: 'IBM-Bold', fontSize: 45, margin: '0 auto' }}>새로운 써클을 만들어보세요 !</text>
            <br />
            <TitleText>만들고자 하는 써클의 분야를 선택해주세요</TitleText>
            <InterestDiv>
              <img src={Interests.workout} style={{ margin: '5px 5px' }} width={100} height={100} onClick={e => interest.push(e.target)} />
              <img src={Interests.game} style={{ margin: '5px 5px' }} width={100} height={100} />
              <img src={Interests.music} style={{ margin: '5px 5px' }} width={100} height={100} />
              <img src={Interests.coding} style={{ margin: '5px 5px' }} width={100} height={100} />
              <img src={Interests.car} style={{ margin: '5px 5px' }} width={100} height={100} />
              <img src={Interests.cooking} style={{ margin: '5px 5px' }} width={100} height={100} />
              <img src={Interests.coding} style={{ margin: '5px 5px' }} width={100} height={100} />
              <img src={Interests.volunteer} style={{ margin: '5px 5px' }} width={100} height={100} />
              <img src={Interests.trip} style={{ margin: '5px 5px' }} width={100} height={100} />
              <img src={Interests.study} style={{ margin: '5px 5px' }} width={100} height={100} />
              <img src={Interests.pet} style={{ margin: '5px 5px' }} width={100} height={100} />
              <img src={Interests.fashion} style={{ margin: '5px 5px' }} width={100} height={100} />
            </InterestDiv>
            <TitleText>써클 이름을 정해주세요</TitleText>
            <br />
            <input className="textinput" type="text" placeholder="써클 이름을 적어주세요" onChange={e => setCircleName(e.target.value)} />
            <TitleText>제한조건을 설정해주세요</TitleText>
            <br />
            <textarea className="textinput" placeholder="제한조건을 적어주세요" onChange={e => setCircleLimit(e.target.value)} />
            <TitleText>활동 장소를 설정해주세요</TitleText>
            <br />
            <input className="textinput" placeholder="활동장소를 적어주세요" onChange={e => setCircleLocation(e.target.value)} />
            <TitleText>써클을 소개해주세요</TitleText>
            <textarea className="textinput" placeholder="써클 소개를 적어주세요" onChange={e => setCircleInfo(e.target.value)} />
            <TitleText>써클 대표 사진을 설정해주세요</TitleText>
            <br />
            <br />
            <ImageSelectButton>
              <label>
                <div style={{ margin: 'auto', textAlign: 'center' }}>
                  {fileImage ? (
                    <img alt="sample" src={fileImage} style={{ borderRadius: 10, marginTop: 10, width: '180px', height: '180px' }} />
                  ) : (
                    <text style={{ fontSize: 100, margin: 'auto 0', lineHeight: '180px' }}>+</text>
                  )}
                </div>
                <input type="file" accept="image/jpg, image/jpeg, image/png" style={{ display: 'none' }} onChange={saveFileImage} />
              </label>
            </ImageSelectButton>
          </div>
          <br />
          <TitleText>프라임 써클을 설정해주세요</TitleText>
          <br />
          <div style={{ justifyContent: 'center', margin: '0 auto' }}>
            <StyledLabel htmlFor={text}>
              <StyledInput type="checkbox" id={text} name={text} />
              <StyledP>{text}</StyledP>
            </StyledLabel>
          </div>
          <Alert style={{ width: 730, margin: '0 auto' }} key="warning" variant="warning">
            프라임 써클이란 ? 달마다 일정 가격을 지불하면 써클즈와 제휴된 업체에서 할인을 받을 수 있는 서비스입니다.
          </Alert>
          <Button size="lg" style={{ marginTop: 20, width: 700 }} variant="dark" onClick={showInfo()}>
            써클 만들기
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default MakeCircle;
