import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import Button from 'react-bootstrap/esm/Button';
import { Modal } from '@mui/material';

const BoardDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 40px;
`;

const CodeBoard = styled.div`
  width: 700px;
  border: 2px solid black;
  margin: 0 auto;
  border-radius: 10px;
  padding: 30px;
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

function CodeBoardList(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState('');
  const [mainText, setMainText] = useState('');
  const [codeText, setCodeText] = useState('');

  const sendBoardInfo = e => {
    e.preventDefault();
    axios
      .post(`circle/${id}/board`, {
        title: title,
        content: mainText,
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  return (
    <>
      <BoardDiv>
        <div style={{ alignItems: 'center' }}>
          <text style={{ fontFamily: 'IBM-SemiBold', justifyContent: 'center', fontSize: 24 }}>코드 게시판</text>
          <Button onClick={handleOpen} style={{ marginLeft: 10, marginBottom: 5 }} variant="secondary">
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
                  placeholder="코드"
                  name="codeText"
                  value={codeText}
                  onChange={e => setCodeText(e.target.value)}
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
                <span>백준 11325번 질문이요</span>
                <span style={{ textAlign: 'right', fontSize: 12 }}>이승현 | 10-21</span>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>프로그래머스 카카오 2번 시간초과떠요...</span>
                <span style={{ textAlign: 'right', fontSize: 12 }}>석홍준 | 10-22</span>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>백준 1123번 반례좀 부탁드립니다</span>
                <span style={{ textAlign: 'right', fontSize: 12 }}>김동주 | 10-25</span>
              </td>
            </tr>
          </tbody>
        </Table>
      </BoardDiv>
      {/* <CodeBoard>
        <text style={{ fontFamily: 'IBM-Bold', fontSize: 25 }}>백준 11325번 질문이요</text>
        <hr />
        <text>
          <pre>
            int[] dp = new int[N + 1]; <br />
            dp[0] = 0; <br />
            dp[1] = 1; <br />
            dp[2] = 2; <br />
            dp[3] = 4;
          </pre>
        </text>
        <hr />
        <text style={{ fontFamily: 'IBM-Medium' }}>자꾸 시간초과가 뜹니다.. 왜그런걸까요 ?? ㅠㅠ</text>
        <hr />
        <text style={{ fontFamily: 'IBM-Medium' }}>이승현 | 5번째 줄을 고쳐보면 될 것 같은데...</text>
        <br />
        <text style={{ fontFamily: 'IBM-Medium' }}> 김동주 | StringBuilder 사용법이 잘못됐습니다 ㅎㅎ..</text>
      </CodeBoard> */}
    </>
  );
}

export default CodeBoardList;
