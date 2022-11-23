import React, { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import moment from 'moment';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';
import { Modal } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  backgroundColor: 'white',
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  padding: 20,
};

const inputStyle = {
  display: 'block',
  width: 400,
  padding: '0.5rem 0.8rem 0.5rem 0.8rem',
  margin: '0.9vw auto',
  border: 0,
  borderRadius: 5,
  fontSize: 20,
  backgroundColor: '#ccebff',
};

function CircleCalendar_schedule({ id, calendar }) {
  const [value, onChange] = useState(new Date());
  const [content, setContent] = useState('');
  const [open, setOpen] = useState(false);
  const [schedule, setSchedule] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [calendarContent, setCalendarContent] = useState([]);
  const sendSchedule = e => {
    e.preventDefault();
    axios
      .post(`/circle/${id}/calender`, {
        date: value.toLocaleDateString(),
        content: schedule,
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
    handleClose();
  };

  const checkDate = content => {
    if (content.date === value.toLocaleDateString()) {
      return (
        <div key={content.date} className="text-gray-500 mt-2">
          {content.schedule}
        </div>
      );
    }
  };
  return (
    <div style={{ marginTop: 30 }}>
      <Container style={{ fontFamily: 'IBM-Regular', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', fontSize: 28, marginBottom: 10, fontFamily: 'IBM-SemiBold' }}>
          우리 써클 일정
          <Button onClick={handleOpen} style={{ marginLeft: 10 }} variant="secondary">
            일정 작성하기
          </Button>
          <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <form onSubmit={sendSchedule}>
              <div style={style}>
                <text style={{ fontFamily: 'IBM-SemiBold', fontSize: 30, textAlign: 'center' }}>일정 추가하기</text>
                <br />
                <text style={{ fontFamily: 'IBM-SemiBold', fontSize: 24 }}>{value.toLocaleDateString()}</text>
                <input
                  style={inputStyle}
                  type="text"
                  placeholder="일정"
                  name="schedule"
                  value={schedule}
                  onChange={e => setSchedule(e.target.value)}
                />
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <Button variant="contained" style={{ width: 170, backgroundColor: '#ccebff' }} type="submit">
                    완료
                  </Button>
                  <Button variant="contained" style={{ width: 170, backgroundColor: '#ccebff' }} onClick={handleClose}>
                    취소
                  </Button>
                </div>
              </div>
            </form>
          </Modal>
        </div>
        <Calendar
          className="mx-auto w-full text-sm border-b"
          formatDay={(locale, date) => moment(date).format('DD')}
          minDetail="month"
          maxDetail="month"
          showNeighboringMonth={false}
          onChange={onChange}
          value={value}
        />
        <div style={{ textAlign: 'center' }}>
          <div className="text-gray-500 mt-4">{moment(value).format('YYYY년 MM월 DD일')}</div>
          {calendar.map(value => checkDate(value))}
        </div>
      </Container>
    </div>
  );
}

export default CircleCalendar_schedule;
