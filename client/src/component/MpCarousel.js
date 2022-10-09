import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Item from '../component/MypageCircleList';

function MpCarousel(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider style={{ justifyContent: 'center' }} {...settings}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Slider>
  );
}

export default MpCarousel;
