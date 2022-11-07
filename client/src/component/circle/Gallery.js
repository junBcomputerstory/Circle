import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from 'react-bootstrap/esm/Button';
import ReactDOM from 'react-dom';

const GalleryDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 40px;
`;

function Gallery(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <GalleryDiv>
      <div style={{ alignItems: 'center', marginBottom: 10 }}>
        <text style={{ fontFamily: 'IBM-SemiBold', justifyContent: 'center', fontSize: 24 }}>갤러리</text>
        <Button style={{ marginLeft: 10, marginBottom: 5 }} variant="secondary">
          글쓰기
        </Button>
      </div>

      <Slider style={{ justifyContent: 'center' }} {...settings}>
        <div>
          <img src="https://dankookcircle.s3.ap-northeast-2.amazonaws.com/badminton.jpeg" width="150" height="150" alt="G_image" />
        </div>
        <div>
          <img src="https://dankookcircle.s3.ap-northeast-2.amazonaws.com/coding.jpeg" width="150" height="150" alt="G_image" />
        </div>
        <div>
          <img src="https://dankookcircle.s3.ap-northeast-2.amazonaws.com/health.webp" width="150" height="150" alt="G_image" />
        </div>
        <div>
          <img src="https://dankookcircle.s3.ap-northeast-2.amazonaws.com/lol.jpeg" width="150" height="150" alt="G_image" />
        </div>
        <div>
          <img src="https://dankookcircle.s3.ap-northeast-2.amazonaws.com/mountain.jpeg" width="150" height="150" alt="G_image" />
        </div>
        <div>
          <img src="https://dankookcircle.s3.ap-northeast-2.amazonaws.com/sing.jpeg" width="150" height="150" alt="G_image" />
        </div>
        <div>
          <img src="https://dankookcircle.s3.ap-northeast-2.amazonaws.com/nanta.jpeg" width="150" height="150" alt="G_image" />
        </div>
      </Slider>
    </GalleryDiv>
  );
}

export default Gallery;
