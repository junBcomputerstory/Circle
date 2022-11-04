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
              <span>내일 모여서 카공하실분 ?</span>
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
