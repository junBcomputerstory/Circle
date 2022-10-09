import { Button } from 'bootstrap';
import React from 'react';
import styled from 'styled-components';

const ImageTextBox = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 20px;
  border: 1px solid gray;
  border-radius: 10px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CircleList = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid gray;
  border-radius: 10px;
  overflow: hidden;
`;

function MypageCircleList(props) {
  return (
    <ImageTextBox>
      <img
        style={{ borderRadius: '10px' }}
        src="https://dankookcircle.s3.ap-northeast-2.amazonaws.com/badminton.jpeg"
        width="150"
        height="100"
      />
      <TextBox>
        <text>서클명</text>
        <text>최근 출석일</text>
        <text>최근 활동일</text>
      </TextBox>
    </ImageTextBox>
  );
}

export default MypageCircleList;
