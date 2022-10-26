import React from 'react';
import styled from 'styled-components';
import ReactiveButton from 'reactive-button';

const MainDiv = styled.div`
  width: 100%;
  height: 93vh;
  background-color: #b5d1ff;
`;

const MainText = styled.div`
  width: 70%;
  height: 300px;
  margin: 0 auto;
  padding-top: 150px;
  font-size: 60px;
  font-family: 'IBM-Bold';
  color: white;
  white-space: pre-wrap;
`;

const BtnDiv = styled.div`
  justify-content: center;
  margin-top: 200px;
`;

function MainImageBox(props) {
  const BtnStyle = {
    fontSize: 24,
    FontFamily: 'IBM-Regular',
  };
  return (
    <div>
      <MainDiv>
        <MainText>
          당신이 찾는 모임,
          <br /> 지금 써클즈에서 만나보세요.
        </MainText>
        <BtnDiv style={{ display: 'flex', justifyContent: 'center', height: 50 }}>
          <ReactiveButton style={BtnStyle} rounded idleText="써클 만들기" width={150} height={50} />
          <ReactiveButton style={{ display: 'none' }} rounded idleText="써클 만들기" width={100} height={50} />
          <ReactiveButton style={BtnStyle} rounded idleText="써클 찾기" width={150} height={50} />
        </BtnDiv>
      </MainDiv>
    </div>
  );
}

export default MainImageBox;
