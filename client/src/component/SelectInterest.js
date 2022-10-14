import React, { useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { Interests } from './Interests';

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

function SelectInterest(setSelectedInterest) {
  const [interest, setInterest] = useState([]);
  const getInterest = e => {
    const set = new Set(interest);
    const interests = [...set];
    console.log(interests);
  };
  const submitText = () => {
    console.log(clickCount.workout);
  };

  const [clickCount, setClickCount] = useState([
    {
      id: 1,
      name: 'workout',
      clickcount: 0,
    },
    {
      id: 2,
      name: 'study',
      clickcount: 0,
    },
    {
      id: 3,
      name: 'trip',
      clickcount: 0,
    },
    {
      id: 4,
      name: 'cooking',
      clickcount: 0,
    },
    {
      id: 5,
      name: 'coding',
      clickcount: 0,
    },
    {
      id: 6,
      name: 'volunteer',
      clickcount: 0,
    },
    {
      id: 7,
      name: 'pet',
      clickcount: 0,
    },
    {
      id: 8,
      name: 'car',
      clickcount: 0,
    },
    {
      id: 9,
      name: 'music',
      clickcount: 0,
    },
    {
      id: 10,
      name: 'culture',
      clickcount: 0,
    },
    {
      id: 11,
      name: 'game',
      clickcount: 0,
    },
    {
      id: 12,
      name: 'fashion',
      clickcount: 0,
    },
  ]);

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
      <Container fluid style={{ marginTop: 50, marginBottom: 50 }}>
        <Row style={{ marginBottom: 30 }}>
          <Col>
            <img src={Interests.workout} width={100} height={100} name="workout" onClick={e => interest.push(e.target.name)} />
            <br />
            <InterestText>운동</InterestText>
          </Col>
          <Col>
            <img
              style={{ border: '3px solid black', borderRadius: '50%' }}
              src={Interests.study}
              width={100}
              height={100}
              name="study"
              clicked="false"
              onClick={e => interest.push(e.target.name)}
            />
            <br />
            <InterestText>스터디</InterestText>
          </Col>
          <Col>
            <img src={Interests.trip} width={100} height={100} />
            <br />
            <InterestText>여행</InterestText>
          </Col>
        </Row>
        <Row style={{ marginBottom: 30 }}>
          <Col>
            <img src={Interests.cooking} width={100} height={100} />
            <br />
            <InterestText>쿠킹</InterestText>
          </Col>
          <Col>
            <img src={Interests.coding} width={100} height={100} />
            <br />
            <InterestText>IT</InterestText>
          </Col>
          <Col>
            <img src={Interests.volunteer} width={100} height={100} />
            <br />
            <InterestText>봉사</InterestText>
          </Col>
        </Row>
        <Row style={{ marginBottom: 30 }}>
          <Col>
            <img src={Interests.pet} width={100} height={100} />
            <br />
            <InterestText>반려동물</InterestText>
          </Col>
          <Col>
            <img src={Interests.car} width={100} height={100} />
            <br />
            <InterestText>차량</InterestText>
          </Col>
          <Col>
            <img src={Interests.music} width={100} height={100} />
            <br />
            <InterestText>음악</InterestText>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={Interests.culture} width={100} height={100} />
            <br />
            <InterestText>문화</InterestText>
          </Col>
          <Col>
            <img src={Interests.game} width={100} height={100} />
            <br />
            <InterestText>게임</InterestText>
          </Col>
          <Col>
            <img src={Interests.fashion} width={100} height={100} />
            <br />
            <InterestText>패션</InterestText>
          </Col>
        </Row>
        <div onClick={getInterest}>
          <text>여길눌러</text>
        </div>
        <div onClick={submitText}>
          <text>여길눌러2</text>
        </div>
      </Container>
    </div>
  );
}

export default SelectInterest;
