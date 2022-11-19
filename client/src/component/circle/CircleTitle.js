import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUsers, FaExclamationTriangle, FaMapMarkerAlt } from 'react-icons/fa';
import Alert from 'react-bootstrap/Alert';
import { AiOutlineNotification } from 'react-icons/ai';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
const CTitle = styled.div`
  width: 95%;
  height: 4em;
  margin: 20px auto;
  border: 1px solid gray;
  border-radius: 5px;
  align-items: center;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  backgroundColor: 'white',
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  padding: 20,
};

const inputStyle = {
  display: 'block',
  width: 400,
  padding: '0.5rem 0.8rem 0.5rem 0.8rem',
  margin: '0.9vw auto',
  border: 0,
  borderRadius: 5,
  fontSize: 20,
  backgroundColor: '#ccebff',
};

function CircleTitle(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [joinMessage, setJoinMessage] = useState('');
  const [joinSex, setJoinSex] = useState(1);
  const [joinAge, setJoinAge] = useState(0);
  return (
    <>
      <CTitle style={{ display: 'flex', justifyContent: 'space-evenly ', lineHeight: '4em' }}>
        <Button></Button>
        <text style={{ fontFamily: 'IBM-Bold', fontSize: 30 }}>{props.info.title}</text>
        <Button variant="contained" color="secondary" style={{ marginBottom: 3 }} onClick={handleOpen}>
          가입하기
        </Button>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <div style={style}>
            <text style={{ fontFamily: 'IBM-SemiBold', fontSize: 25, textAlign: 'center' }}>서클 가입하기</text>
            <form>
              <textarea
                style={inputStyle}
                placeholder="신청 메세지"
                name="message"
                value=""
                onChange={e => setJoinMessage(e.target.value)}
              />
              <select style={inputStyle} type="text" name="sex" onChange={e => setJoinSex(e.target.value)}>
                <option value="1">남자</option>
                <option value="2">여자</option>
              </select>
              <input style={inputStyle} placeholder="나이" type="number" name="age" value="" onChange={e => setJoinAge(e.target.value)} />
            </form>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Button
                variant="contained"
                style={{ width: 170 }}
                onClick={() => {
                  console.log(joinMessage);
                  console.log(joinSex);
                  console.log(joinAge);
                }}
              >
                가입신청
              </Button>
              <Button variant="contained" style={{ width: 170 }} onClick={handleClose}>
                닫기
              </Button>
            </div>
          </div>
        </Modal>

        <br />
      </CTitle>
      <CTitle style={{ height: '2em', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <div stlye={{ alignItems: 'center' }}>
          <FaUsers style={{ marginRight: 5, marginBottom: 3 }} size="20" color="#3639ff" />
          써클 인원 : 0/{props.info.maxPeople}명
        </div>
        <div stlye={{ alignItems: 'center' }}>
          <FaMapMarkerAlt style={{ marginRight: 5, marginBottom: 3 }} size="20" color="#ffcd36" />
          지역 : {props.info.location}
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
