import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import Button from 'react-bootstrap/esm/Button';

const BoardDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 40px;
`;

function BoardList(props) {
  return (
    <BoardDiv>
      <div style={{ alignItems: 'center' }}>
        <text style={{ fontFamily: 'IBM-SemiBold', justifyContent: 'center', fontSize: 24 }}>게시판</text>
        <Button style={{ marginLeft: 10, marginBottom: 5 }} variant="secondary">
          글쓰기
        </Button>
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
              <span>게시글1</span>
              <span style={{ textAlign: 'right', fontSize: 12 }}>이승현 | 09-20</span>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>게시글2</span>
              <span style={{ textAlign: 'right', fontSize: 12 }}>김동주 | 09-21</span>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>게시글3</span>
              <span style={{ textAlign: 'right', fontSize: 12 }}>석홍준 | 09-22</span>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>게시글4</span>
              <span style={{ textAlign: 'right', fontSize: 12 }}>최주완 | 09-23</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </BoardDiv>
  );
}

export default BoardList;
