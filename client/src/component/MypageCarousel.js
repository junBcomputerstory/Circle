import React, { useEffect, useState, useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import axios from 'axios';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
const ImageTextBox = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 10px;
  border: 1px solid gray;
  border-radius: 10px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
`;

function MypageCarousel(props) {
  const [userCircle, setUserCircle] = useState([]);
  useEffect(() => {
    axios.get('/user/mypage').then(response => {
      console.log(response);
      setUserCircle(response.data.circle);
    });
  }, []);

  // function LeftArrow() {
  //   const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  //   return (
  //     <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
  //       Left
  //     </Arrow>
  //   );
  // }

  // function RightArrow() {
  //   const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  //   return (
  //     <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
  //       Right
  //     </Arrow>
  //   );
  // }

  return (
    <ScrollMenu>
      {userCircle.map(circle => (
        <ImageTextBox itemID={circle.id}>
          <img style={{ borderRadius: '10px', margin: '10px auto' }} src={circle.circlepic} width="100" height="100" />
          <TextBox>
            <text style={{ fontFamily: 'IBM-Medium' }}>{circle.name}</text>
          </TextBox>
        </ImageTextBox>
      ))}
    </ScrollMenu>
  );
}

export default MypageCarousel;
