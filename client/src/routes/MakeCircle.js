import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Header from '../component/Header';
import styled from 'styled-components';
import '../css/makecircle.css';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/esm/Button';
import { Interests } from '../component/Interests';
import axios from 'axios';

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
  const arr = [
    {
      id: 1,
      name: '운동',
      src: '../img/interests/workout.png',
    },
    {
      id: 2,
      name: '공부',
      src: '../img/interests/study.png',
    },
    {
      id: 3,
      name: '여행',
      src: '../img/interests/trip.png',
    },
    {
      id: 4,
      name: '요리',
      src: '../img/interests/cooking.png',
    },
    {
      id: 5,
      name: 'IT',
      src: '../img/interests/coding.png',
    },
    { id: 6, name: '봉사', src: '../img/interests/volunteer.png' },
    {
      id: 7,
      name: '반려동물',
      src: '../img/interests/pet.png',
    },
    {
      id: 8,
      name: '자동차',
      src: '../img/interests/car.png',
    },
    {
      id: 9,
      name: '음악',
      src: '../img/interests/music.png',
    },
    { id: 10, name: '문화', src: '../img/interests/culture.png' },
    {
      id: 11,
      name: '게임',
      src: '../img/interests/game.png',
    },
    {
      id: 12,
      name: '패션',
      src: '../img/interests/fashion.png',
    },
  ];

  const LocationOptions = [
    {
      id: 1,
      name: '서울',
    },
    {
      id: 2,
      name: '부산',
    },
    {
      id: 3,
      name: '대구',
    },
    {
      id: 4,
      name: '인천',
    },
    {
      id: 5,
      name: '광주',
    },
    {
      id: 6,
      name: '대전',
    },
    {
      id: 7,
      name: '울산',
    },
    {
      id: 8,
      name: '세종',
    },
    {
      id: 9,
      name: '경기도',
    },
    {
      id: 10,
      name: '강원도',
    },
    {
      id: 11,
      name: '제주도',
    },
  ];

  const [fileImage, setFileImage] = useState('');
  const [circleName, setCircleName] = useState('');
  const [circleLimit, setCircleLimit] = useState('');
  const [circleLimitPeople, setCircleLimitPeople] = useState('');
  const [circleLocation, setCircleLocation] = useState('default');
  const [circleInfo, setCircleInfo] = useState('');
  const [interest, setInterest] = useState(0);
  const [genderLimit, setGenderLimit] = useState('default');
  const saveFileImage = e => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };
  const text = '설정하려면 체크해주세요';
  const submit = () => {
    axios.post('/makecircle', {
      max_num: circleLimitPeople,
      area_id: circleLocation,
      interest_id: interest,
      name: circleName,
      circlepic: fileImage,
      restrict: circleLimit,
      sex: genderLimit,
      intro: circleInfo,
      prime: 0,
    });
    console.log('제한인원:' + circleLimitPeople);
    console.log('파일 이미지:' + fileImage);
    console.log('서클 이름:' + circleName);
    console.log('제한사항:' + circleLimit);
    console.log('활동지역:' + circleLocation);
    console.log('서클정보' + circleInfo);
    console.log('흥미:' + interest);
    console.log('성별제한:' + genderLimit);
  };
  const pushInterest = id => {
    setInterest(id);
  };

  const _onclick = id => {
    interest == id ? setInterest(0) : pushInterest(id);
    console.log(interest);
  };
  if (sessionStorage.length === 0) {
    document.location.href = 'login';
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Header bgcolor="#f5f8fc" />
      <Container fluid style={{ backgroundColor: '#b5d1ff' }}>
        <div className="form-box">
          <div className="field1">
            <text style={{ fontFamily: 'IBM-Bold', fontSize: 45, margin: '0 auto' }}>새로운 써클을 만들어보세요 !</text>
            <br />
            <TitleText>만들고자 하는 써클의 분야를 선택해주세요</TitleText>
            <InterestDiv>
              {arr.map(value =>
                interest == value.id ? (
                  <div style={{ display: 'inline-block', margin: '5px 5px' }} key={value.id} onClick={() => _onclick(value.id)}>
                    <img
                      style={{ border: '4px solid black', borderRadius: '50%' }}
                      key={value.id}
                      src={value.src}
                      id={value.id}
                      name={value.name}
                      width={100}
                      height={100}
                    />
                    <br />
                    <text style={{ fontFamily: 'IBM-Regular' }}>{value.name}</text>
                  </div>
                ) : (
                  <div style={{ display: 'inline-block', margin: '5px 5px' }} key={value.id} onClick={() => _onclick(value.id)}>
                    <img key={value.id} src={value.src} id={value.id} name={value.name} width={100} height={100} />
                    <br />
                    <text style={{ fontFamily: 'IBM-Regular' }}>{value.name}</text>
                  </div>
                ),
              )}
            </InterestDiv>
            <TitleText>써클 이름을 정해주세요</TitleText>
            <br />
            <input className="textinput" type="text" placeholder="써클 이름을 적어주세요" onChange={e => setCircleName(e.target.value)} />
            <div>
              <TitleText>제한인원을 설정해주세요</TitleText>
              <input className="textinput" type="number" placeholder="제한 인원(명)" onChange={e => setCircleLimitPeople(e.target.value)} />
            </div>
            <TitleText>제한조건을 설정해주세요</TitleText>
            <br />
            <select
              style={{
                display: 'block',
                width: 200,
                padding: '0.5rem 0.8rem 0.5rem 0.8rem',
                margin: '0.9vw auto',
                border: 0,
                borderRadius: 5,
                fontSize: 20,
              }}
              defaultValue={circleLocation}
              name="genderLimit"
              onChange={e => setGenderLimit(e.target.value)}
            >
              <option value="default" disabled={true}>
                성별 제한
              </option>
              <option value="1">남자만 가입 가능</option>
              <option value="2">여자만 가입 가능</option>
              <option value="3">성별 제한 없음</option>
            </select>
            <textarea className="textinput" placeholder="제한조건을 적어주세요" onChange={e => setCircleLimit(e.target.value)} />
            <TitleText>활동 장소를 설정해주세요</TitleText>
            <br />
            <select
              style={{
                display: 'block',
                width: 700,
                padding: '0.5rem 0.8rem 0.5rem 0.8rem',
                margin: '0.9vw auto',
                border: 0,
                borderRadius: 5,
                fontSize: 20,
              }}
              defaultValue={circleLocation}
              name="location"
              onChange={e => setCircleLocation(e.target.value)}
            >
              <option value="default" disabled={true}>
                지역을 선택해주세요.
              </option>
              {LocationOptions.map(value => (
                <option key={value.id} value={value.id}>
                  {value.name}
                </option>
              ))}
              <option key="12" value="12">
                상관없음
              </option>
            </select>
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
          <Alert style={{ width: 730, margin: '0 auto' }} key="primary" variant="primary">
            프라임 써클이란 ? 달마다 일정 가격을 지불하면 써클즈와 제휴된 업체에서 할인을 받을 수 있는 서비스입니다.
          </Alert>
          <Button size="lg" style={{ marginTop: 20, width: 700 }} variant="dark" onClick={submit}>
            써클 만들기
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default MakeCircle;
