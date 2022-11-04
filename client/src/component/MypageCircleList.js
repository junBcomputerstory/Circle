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
  margin: 0 10px;
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
      <img style={{ borderRadius: '10px', margin: '10px auto' }} src="../img/coding.jpeg" width="100" height="100" />
      <TextBox>
        <text style={{ fontFamily: 'IBM-Medium' }}>취업 준비자를 위한 1일1코딩 풀이</text>
      </TextBox>
    </ImageTextBox>
  );
}

export default MypageCircleList;
