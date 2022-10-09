import React from 'react';
import styled from 'styled-components';
import { FaUsers, FaExclamationTriangle, FaMapMarkerAlt } from 'react-icons/fa';
import Alert from 'react-bootstrap/Alert';
import { AiOutlineNotification } from 'react-icons/ai';
const CTitle = styled.div`
  width: 95%;
  height: 4em;
  margin: 20px auto;
  border: 1px solid gray;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function CircleTitle(props) {
  return (
    <>
      <CTitle style={{ alignItems: 'center', lineHeight: '4em' }}>
        <text style={{ fontFamily: 'IBM-Bold', fontSize: 30, textAlign: 'center', alignItems: 'center' }}>{props.info.title}</text>
        <br />
      </CTitle>
      <CTitle style={{ height: '2em', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <div stlye={{ alignItems: 'center' }}>
          <FaUsers style={{ marginRight: 5, marginBottom: 3 }} size="20" color="#3639ff" />
          써클 인원 : {props.info.recentPeople}/{props.info.maxPeople}명
        </div>
        <div stlye={{ alignItems: 'center' }}>
          <FaMapMarkerAlt style={{ marginRight: 5, marginBottom: 3 }} size="20" color="#ffcd36" />
          지역 : {props.info.title}
        </div>
        <div stlye={{ alignItems: 'center' }}>
          <FaExclamationTriangle style={{ marginRight: 5, marginBottom: 3 }} size="20" color="red" />
          제한 조건 : {props.info.limitInfo}
        </div>
      </CTitle>
      <Alert
        style={{ width: '95%', borderRadius: 10, margin: '0 auto', fontFamily: 'IBM-SemiBold', textAlign: 'center' }}
        key="warning"
        variant="warning"
      >
        <AiOutlineNotification style={{ marginRight: 5, marginBottom: 3 }} size="25" />
        {props.info.notice}
      </Alert>
    </>
  );
}

export default CircleTitle;
