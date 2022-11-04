import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Item from './MypageCircleList';

function MypageCarousel(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider style={{ justifyContent: 'center' }} {...settings}>
      <Item />
      <Item />
    </Slider>
  );
}

export default MypageCarousel;
