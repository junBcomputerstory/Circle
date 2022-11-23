import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import Button from 'react-bootstrap/esm/Button';
import { Modal } from '@mui/material';
import axios from 'axios';
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

const BoardDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 40px;
`;

function BoardList({ id }) {
  const [open, setOpen] = useState(false);
  const [openBoard, setOpenBoard] = useState(false);
  const handleBoardOpen = () => setOpenBoard(true);
  const handleBoardClose = () => setOpenBoard(false);
  const [sendImage, setSendImage] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState('');
  const [mainText, setMainText] = useState('');

  const sendBoardInfo = e => {
    e.preventDefault();
    axios
      .post(`/circle/${id}/board`, {
        title: title,
        content: mainText,
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  return (
    <BoardDiv>
      <div style={{ alignItems: 'center' }}>
        <text style={{ fontFamily: 'IBM-SemiBold', justifyContent: 'center', fontSize: 24 }}>게시판</text>
        <Button style={{ marginLeft: 10, marginBottom: 5 }} onClick={handleOpen} variant="secondary">
          글쓰기
        </Button>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <form onSubmit={sendBoardInfo}>
            <div style={style}>
              <text style={{ fontFamily: 'IBM-SemiBold', fontSize: 30, textAlign: 'center' }}>게시글 작성하기</text>
              <input
                style={inputStyle}
                type="text"
                placeholder="제목"
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <textarea
                style={inputStyle}
                placeholder="내용"
                name="mainText"
                value={mainText}
                onChange={e => setMainText(e.target.value)}
              />

              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button variant="contained" style={{ width: 170, backgroundColor: '#ccebff' }} type="submit">
                  완료
                </Button>
                <Button variant="contained" style={{ width: 170, backgroundColor: '#ccebff' }} onClick={handleClose}>
                  취소
                </Button>
              </div>
            </div>
          </form>
        </Modal>
      </div>

      <Table bordered hover style={{ fontFamily: 'IBM-Regular', marginTop: 10 }}>
        {/* <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <td>1</td>
            <td style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <span onclick={handleBoardOpen}>내일 모여서 카공하실분 ?</span>
                {/* <Modal
                  open={openBoard}
                  onClose={handleBoardClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <text style={{ fontFamily: 'IBM-SemiBold', fontSize: 30 }}>내일 모여서 카공하실분?</text>
                  <hr />
                  <text style={{ fontFamily: 'IBM-Regular', fontSize: 24 }}>본문내용</text>
                  <hr />
                  <text style={{ fontFamily: 'IBM-Regular', fontSize: 24 }}>댓글</text>
                </Modal> */}
              </div>
              <span style={{ textAlign: 'right', fontSize: 12 }}>이승현 | 10-23</span>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>코딩할 때 저만 이런가요 ㅠㅠ</span>
              <span style={{ textAlign: 'right', fontSize: 12 }}>석홍준 | 10-25</span>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>아 코딩 힘들다~</span>
              <span style={{ textAlign: 'right', fontSize: 12 }}>김동주 | 10-26</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </BoardDiv>
  );
}

export default BoardList;
