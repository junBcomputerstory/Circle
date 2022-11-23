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

  const handleFold = () => {
    const content = document.getElementById('1');
    console.log(content);
    content.style.display === 'none' ? (content.style.display = 'table-cell') : (content.style.display = 'none');
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
            <form>
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
            <td id="1" style={{ border: '0.5px solid gray', padding: 10, display: 'none' }} colspan="3">
              <div>
                코드내용
                <hr />
                메인텍스트
                <br />
                <div>
                  <form>
                    <input
                      key="1"
                      style={{ minWidth: '90%', minHeight: 35, marginTop: 10, fontFamily: 'IBM-Regular', fontSize: 18 }}
                      type="text"
                      placeholder="댓글을 남겨보세요"
                      // value={comment}
                      // onChange={e => setComment(e.target.value)}
                    />
                    <Button type="submit" variant="secondary" style={{ marginLeft: 10, display: 'inline-block' }}>
                      작성하기
                    </Button>
                  </form>
                </div>
              </div>
            </td>
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
