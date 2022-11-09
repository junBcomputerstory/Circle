import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import CircleCalendarSchedule from './CircleCalendar_schedule';
import CircleCalendarAttendent from './CircleCalendar_attendent';
import Button from 'react-bootstrap/esm/Button';

function CircleCalendarDiv(props) {
  return (
    <div style={{ marginTop: 30 }}>
      <Container style={{ fontFamily: 'IBM-Regular', justifyContent: 'center' }}>
        <Row style={{ fontFamily: 'IBM-SemiBold', fontSize: 24, textAlign: 'center' }}>
          <Col style={{ alignItems: 'center', marginBottom: 10 }}>
            우리 써클 일정
            <Button style={{ marginLeft: 10 }} variant="secondary">
              일정 작성하기
            </Button>
          </Col>
          {/* <Col>
            나의 출석 캘린더
            <Button style={{ marginLeft: 10 }} variant="secondary">
              출석하기
            </Button>
          </Col> */}
        </Row>
        <Row>
          <Col>
            <CircleCalendarSchedule />
          </Col>
          {/* <Col>
            <CircleCalendarAttendent />
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default CircleCalendarDiv;
