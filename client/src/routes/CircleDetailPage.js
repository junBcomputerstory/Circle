import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../component/Header_Fixed';
import CircleTitle from '../component/circle/CircleTitle';
import CircleCalendarDiv from '../component/circle/CircleCalendarDiv';
import BoardList from '../component/circle/BoardList';
import Gallery from '../component/circle/Gallery';
import CodeBoardList from '../component/circle/CodeBoardList';
import { useParams } from 'react-router-dom';
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

function CircleDetailPage(props) {
  const [circleInfo, setCircleInfo] = useState({});
  const params = useParams();
  console.log('param:' + params.id);

  useEffect(() => {
    axios
      .get(`/circle/${params.id}`)
      .then(response => {
        console.log(response.data.circleInfo);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <>
      {/* <div style={{ backgroundColor: 'orange' }}> */}
      <Header />
      <Box>
        <CircleTitle />
      </Box>
      <CircleCalendarDiv />
      <BoardList />
      <Gallery />
      <CodeBoardList />
      <Footer />
      {/* </div> */}
    </>
  );
}

export default CircleDetailPage;
