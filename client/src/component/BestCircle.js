import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaUsers, FaExclamationTriangle, FaMapMarkerAlt } from 'react-icons/fa';

const MainText = styled.text`
  font-size: 40px;
  font-family: 'IBM-Bold';
  color: black;
`;

const SubText = styled.text`
  font-size: 20px;
  font-family: 'IBM-Regular';
  color: black;
  margin-left: 3px;
`;

function BestCircle(props) {
  const BestCircles = [
    {
      src: 'img/badminton.jpeg',
      title: '성남시 배드민턴 모임 매치포인트',
      text: '성남시 분당구 서현동 황새울종합체육관에서 배드민턴 모임을 진행하고 있습니다. 성실하게 참여하실 20-30대분들 환영합니다 !!',
      people: 50,
      maxpeople: 100,
      location: '성남시 분당구 서현동',
      limit: '남녀 상관 X, 20-30대',
    },
    {
      src: 'img/health.webp',
      title: '오운완 인증 써클 삼대몇',
      text: '꾸준한 헬스를 위한 오운완 챌린지 진행중',
      people: 250,
      maxpeople: 500,
      location: '상관 없음',
      limit: '제한 없음',
    },
    {
      src: 'img/coding.jpeg',
      title: 'IT취업자를 위한 알고리즘 스터디',
      text: '코딩테스트 섭렵해서 취뽀하기 !! 이코테 문제 풀면서, 본인이 작성한 코드 리뷰해드립니다.',
      people: 972,
      maxpeople: 1000,
      location: '상관 없음',
      limit: 'IT 관련 기업 취업예정자',
    },
  ];
  return (
    <div style={{ height: '100vh' }}>
      <div style={{ textAlign: 'left', marginLeft: '6em', paddingTop: '10%' }}>
        <MainText>
          이달의 Best Circle
          <br />
        </MainText>
        <SubText>이달의 최고 써클들을 확인해보세요.</SubText>
      </div>
      <Container style={{ margin: '30px auto' }}>
        <Row xs={1} md={3} className="g-4">
          {BestCircles.map(circles => {
            var a = (
              <Col>
                <Card style={{ width: '22rem' }}>
                  <Card.Img variant="top" src={circles.src} height={'250px'} style={{ borderBottom: '0.1px solid gray' }} />
                  <Card.Body style={{ height: '9rem', overflowY: 'scroll', textOverflow: 'ellipsis' }}>
                    <Card.Title style={{ fontFamily: 'IBM-Regular', fontWeight: '50' }}>{circles.title}</Card.Title>
                    <Card.Text style={{ fontFamily: 'IBM-Light', fontWeight: '50' }}>{circles.text}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item style={{ textAlign: 'start', alignItems: 'center' }}>
                      <FaMapMarkerAlt style={{ marginRight: 5, marginBottom: 3 }} size="20" color="#ffcd36" />
                      지역 : {circles.location}
                    </ListGroup.Item>
                    <ListGroup.Item style={{ textAlign: 'start', alignItems: 'center' }}>
                      <FaUsers style={{ marginRight: 5, marginBottom: 3 }} size="20" color="#3639ff" />
                      써클 인원 : {circles.people}/{circles.maxpeople}명
                    </ListGroup.Item>
                    <ListGroup.Item style={{ textAlign: 'start', alignItems: 'center' }}>
                      <FaExclamationTriangle style={{ marginRight: 5, marginBottom: 3 }} size="20" color="red" />
                      제한 조건 : {circles.limit}
                    </ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Button style={{ width: '100%' }} variant="warning">
                      써클 가입하기
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
            return a;
          })}
        </Row>
      </Container>
    </div>
  );
}

export default BestCircle;
