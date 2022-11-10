import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
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
  const [userCircle, setUserCircle] = useState([]);
  useEffect(() => {
    axios.get('/user/mypage').then(response => setUserCircle(response.data.circle));
  });

  return (
    <div>
      {userCircle.map(circle => (
        <ImageTextBox>
          <img style={{ borderRadius: '10px', margin: '10px auto' }} src="../img/coding.jpeg" width="100" height="100" />
          <TextBox>
            <text style={{ fontFamily: 'IBM-Medium' }}>{circle.name}</text>
          </TextBox>
        </ImageTextBox>
      ))}
    </div>
  );
}

export default MypageCircleList;
