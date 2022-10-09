import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import moment from 'moment';

function CircleCalendar_attendent(props) {
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
        {moment(value).format('YYYY년 MM월 DD일')} 출석이 완료되었습니다 !
      </div>
    </div>
  );
}

export default CircleCalendar_attendent;
