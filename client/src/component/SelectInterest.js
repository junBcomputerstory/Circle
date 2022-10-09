import React from 'react';
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

function SelectInterest(props) {
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
            {Interests.workout}
            <br />
            <InterestText>운동</InterestText>
          </Col>
          <Col>
            <img src="/img/circle.png" width={100} height={100} alt="interest" />
            <br />
            <InterestText>스터디</InterestText>
          </Col>
          <Col>
            <img src="/img/circle.png" width={100} height={100} alt="interest" />
            <br />
            <InterestText>여행</InterestText>
          </Col>
        </Row>
        <Row style={{ marginBottom: 30 }}>
          <Col>
            <img src="/img/circle.png" width={100} height={100} alt="interest" />
            <br />
            <InterestText>쿠킹</InterestText>
          </Col>
          <Col>
            <img src="/img/circle.png" width={100} height={100} alt="interest" />
            <br />
            <InterestText>IT</InterestText>
          </Col>
          <Col>
            <img src="/img/circle.png" width={100} height={100} alt="interest" />
            <br />
            <InterestText>봉사</InterestText>
          </Col>
        </Row>
        <Row style={{ marginBottom: 30 }}>
          <Col>
            <img src="/img/circle.png" width={100} height={100} alt="interest" />
            <br />
            <InterestText>반려동물</InterestText>
          </Col>
          <Col>
            <img src="/img/circle.png" width={100} height={100} alt="interest" />
            <br />
            <InterestText>차량</InterestText>
          </Col>
          <Col>
            <img src="/img/circle.png" width={100} height={100} alt="interest" />
            <br />
            <InterestText>음악</InterestText>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src="/img/circle.png" width={100} height={100} alt="interest" />
            <br />
            <InterestText>문화</InterestText>
          </Col>
          <Col>
            <img src="/img/circle.png" width={100} height={100} alt="interest" />
            <br />
            <InterestText>게임</InterestText>
          </Col>
          <Col>
            <img src="/img/circle.png" width={100} height={100} alt="interest" />
            <br />
            <InterestText>패션</InterestText>
          </Col>
        </Row>
        <Button size="lg" style={{ width: 480, marginTop: 50 }} variant="warning">
          가입하기
        </Button>
      </Container>
    </div>
  );
}

export default SelectInterest;
