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
import CircleCalendar_schedule from '../component/circle/CircleCalendar_schedule';

const LocationOptions = [
  {
    id: 1,
    name: '서울',
  },
  {
    id: 2,
    name: '부산',
  },
  {
    id: 3,
    name: '대구',
  },
  {
    id: 4,
    name: '인천',
  },
  {
    id: 5,
    name: '광주',
  },
  {
    id: 6,
    name: '대전',
  },
  {
    id: 7,
    name: '울산',
  },
  {
    id: 8,
    name: '세종',
  },
  {
    id: 9,
    name: '경기도',
  },
  {
    id: 10,
    name: '강원도',
  },
  {
    id: 11,
    name: '제주도',
  },
  {
    id: 12,
    name: '온라인',
  },
];

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
  const [areaName, setAreaName] = useState('');
  const [galleryInfo, setGalleryInfo] = useState([]);
  const [calendarInfo, setCalendarInfo] = useState([]);
  const [boardInfo, setBoardInfo] = useState([]);
  const [boardCommentInfo, setBoardCommentInfo] = useState([]);

  const params = useParams();

  const printArea = area_id => {
    LocationOptions.forEach(value => {
      if (value.id === area_id) {
        setAreaName(value.name);
      }
    });
  };

  useEffect(() => {
    axios
      .get(`/circle/${params.id}`)
      .then(response => {
        setCircleInfo(response.data.circleinfo[0]);
        printArea(response.data.circleinfo[0].area_id);
        console.log(response.data);
        setGalleryInfo(response.data.circlepicture);
        setCalendarInfo(response.data.calender);
        setBoardInfo(response.data.board);
        setBoardCommentInfo(response.data.comment);
        console.log(response.data.board);
      })
      .catch(error => console.log(error));
  }, [galleryInfo, calendarInfo, boardInfo]);
  return (
    <>
      <Header />
      <Box>
        <CircleTitle id={circleInfo.id} info={circleInfo} location={areaName} />
      </Box>
      <CircleCalendar_schedule id={circleInfo.id} calendar={calendarInfo} />
      <BoardList commentt={boardCommentInfo} id={circleInfo.id} boardinfo={boardInfo} />
      <Gallery id={circleInfo.id} gallery={galleryInfo} />
      <CodeBoardList />
      <Footer />
      {/* </div> */}
    </>
  );
}

export default CircleDetailPage;
