import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const View = styled.div`
  width: 600px;
  height: 500px;
  margin: auto auto;
  background-color: '#b5d1ff';
  border: 1px solid white;
  text-align: center;
`;

function SigninFinish({ navigation }) {
  return (
    <View>
      <div style={{ marginTop: 250 }}>
        <text style={{ textAlign: 'center', fontFamily: 'IBM-Medium', fontSize: 45 }}>축하합니다 !</text>
        <br />
        <text style={{ textAlign: 'center', fontFamily: 'IBM-Medium', fontSize: 35 }}>써클즈에서 다양한 모임에 참여해보세요 !</text>
        <br />
        <Link style={{ textDecoration: 'none', marginLeft: 5 }} to="/login">
          <div
            style={{
              display: 'inline-block',
              width: 250,
              height: 40,
              borderRadius: 5,
              backgroundColor: '#b5d1ff',
              margin: 'auto',
              marginTop: 40,
            }}
          >
            <text style={{ fontFamily: 'IBM-Medium', fontSize: 25, textAlign: 'center', margin: '0 auto' }}>로그인 하러하기</text>
          </div>
        </Link>
      </div>
    </View>
  );
}

export default SigninFinish;
