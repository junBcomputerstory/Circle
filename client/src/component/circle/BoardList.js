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

function BoardList({ id, boardinfo, commentt }) {
  const [open, setOpen] = useState(false);
  const [openBoard, setOpenBoard] = useState(false);
  const handleBoardOpen = () => setOpenBoard(true);
  const handleBoardClose = () => setOpenBoard(false);
  const [sendImage, setSendImage] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState('');
  const [mainText, setMainText] = useState('');
  const [onC, setOnC] = useState(false);
  const [comment, setComment] = useState('');

  const checkComment = (cmt, text_id) => {
    if (cmt.board_id === text_id) {
      return (
        <span>
          {cmt.nickname} : {cmt.content}
        </span>
      );
    }
  };

  const sendBoardInfo = e => {
    e.preventDefault();
    axios
      .post(`/circle/${id}/board`, {
        title: title,
        content: mainText,
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
    handleClose();
  };

  const handleFold = content_id => {
    const content = document.getElementById(`${content_id}`);
    console.log(content);
    content.style.display === 'none' ? (content.style.display = 'table-cell') : (content.style.display = 'none');
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
        <tbody>
          {boardinfo.map(value => (
            <>
              <tr key={value.text_id}>
                <td>{value.text_id}</td>
                <td style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ cursor: 'pointer' }} onClick={() => handleFold(value.text_id)}>
                    {value.title}
                  </span>
                  <span style={{ textAlign: 'right', fontSize: 12 }}>
                    {value.writer} | {value.writedate}
                  </span>
                </td>
              </tr>
              <td id={value.text_id} style={{ border: '0.5px solid gray', padding: 10, display: 'none' }} colspan="3">
                <div>
                  {value.content}
                  <hr />
                  {commentt.map(
                    cmt =>
                      cmt.board_id === value.text_id && (
                        <>
                          <text>
                            {cmt.nickname} : {cmt.content}
                          </text>
                          <br />
                        </>
                      ),
                  )}
                  <div>
                    <form id={value.text_id}>
                      <input
                        id={value.text_id}
                        key={value.text_id}
                        style={{ minWidth: '90%', minHeight: 35, marginTop: 10, fontFamily: 'IBM-Regular', fontSize: 18 }}
                        type="text"
                        placeholder="댓글을 남겨보세요"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                      />
                      <Button type="submit" variant="secondary" style={{ marginLeft: 10, display: 'inline-block' }}>
                        작성하기
                      </Button>
                    </form>
                  </div>
                </div>
              </td>
            </>
          ))}
        </tbody>
      </Table>
    </BoardDiv>
  );
}

export default BoardList;
