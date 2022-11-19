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
        <div style={{ textAlign: 'center', fontSize: 28, marginBottom: 10, fontFamily: 'IBM-SemiBold' }}>
          우리 써클 일정
          <Button style={{ marginLeft: 10 }} variant="secondary">
            일정 작성하기
          </Button>
        </div>
        <CircleCalendarSchedule />
      </Container>
    </div>
  );
}

export default CircleCalendarDiv;
