import React, { useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { Interests } from './Interests';
import { findConfigUpwards } from '@babel/core/lib/config/files';

const Title = styled.text`
  font-size: 50px;
  font-family: 'IBM-Bold';
  text-align: center;
`;

const SubTitle = styled.text`
  font-size: 20px;
  font-family: 'IBM-Regular';
  text-align: center;
`;

const InterestText = styled.text`
  font-family: 'IBM-Medium';
  font-size: 20px;
`;

function SelectInterest(props) {
  const [interest, setInterest] = useState([]);

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

  const pushInterest = id => {
    let newInterest = [...interest];
    newInterest.push(id);
    setInterest(newInterest);
    props.setInterest(newInterest);
  };

  const _onclick = id => {
    interest.includes(id) == false ? pushInterest(id) : setInterest(interest.filter(int => int != id));
  };

  const sendInt = () => {
    console.log(interest);
  };

  return (
    <div id="1">
      <Title>
        잠깐!
        <br />
      </Title>
      <SubTitle>
        회원님이 흥미로운 관심사를 골라주세요!
        <br />
        회원님을 위한 써클 추천을 위해 사용됩니다.
      </SubTitle>
      <Container style={{ width: 500, marginTop: 50, marginBottom: 50 }}>
        {arr.map(value =>
          interest.includes(value.id) ? (
            <div style={{ display: 'inline-block', margin: '20px 20px' }} key={value.id} onClick={() => _onclick(value.id)}>
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
            <div style={{ display: 'inline-block', margin: '20px 20px' }} key={value.id} onClick={() => _onclick(value.id)}>
              <img key={value.id} src={value.src} id={value.id} name={value.name} width={100} height={100} />
              <br />
              <text style={{ fontFamily: 'IBM-Regular' }}>{value.name}</text>
            </div>
          ),
        )}
      </Container>
    </div>
  );
}

export default SelectInterest;
