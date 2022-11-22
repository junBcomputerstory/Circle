import React, { useState, Component, useEffect } from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import CircleDetailPage from './CircleDetailPage';
import axios from 'axios';

const Box = styled.div`
  justify-content: center;
`;

const CirclesInfo = {
  title: 'IT 취업을 위한 알고리즘 스터디',
  maxPeople: 100,
  recentPeople: 51,
  location: '경기도',
  limitInfo: '제한조건 없습니다.',
  notice: '1일 1문제를 생활화합시다 !!',
};

const Footer = styled.div`
  width: 100%;
  height: 200px;
`;

function CirclePage(props) {
  const [circles, setCircles] = useState([]);
  useEffect(() => {
    axios
      .get(
        '/circle/find',
        {
          params: { interest_id: 999, area_id: 999, sex: 999, name: '' },
        },
        {
          WithCredentials: true,
        },
      )
      .then(res => {
        setCircles(res.data);
        console.log(circles);
      });
  }, []);

  return (
    <Routes>
      <Route path="/:id" element={<CircleDetailPage info={circles[0]} />} />
    </Routes>
  );
}

export default CirclePage;
