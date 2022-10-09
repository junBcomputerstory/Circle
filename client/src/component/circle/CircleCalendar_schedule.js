import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import moment from 'moment';

function CircleCalendar_schedule(props) {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        className="mx-auto w-full text-sm border-b"
        formatDay={(locale, date) => moment(date).format('DD')}
        minDetail="month"
        maxDetail="month"
        showNeighboringMonth={false}
        onChange={onChange}
        value={value}
      />
      <div style={{ marginLeft: '9em' }} className="text-gray-500 mt-4">
        {moment(value).format('YYYY년 MM월 DD일')}
      </div>
      <div style={{ marginLeft: '9em' }} className="text-gray-500 mt-2">
        25:00 ZOOM 스터디 모임
      </div>
    </div>
  );
}

export default CircleCalendar_schedule;
