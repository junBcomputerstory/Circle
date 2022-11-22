import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from 'react-bootstrap/esm/Button';
import ReactDOM from 'react-dom';
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

const GalleryDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 40px;
`;

function Gallery({ id, gallery }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: false,
  };
  const [open, setOpen] = useState(false);
  const [sendImage, setSendImage] = useState(null);
  const [galleryLength, setGalleryLength] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleImage = e => {
    setSendImage(e.target.files[0]);
  };

  const sendImageFile = e => {
    setGalleryLength(gallery.length);
    e.preventDefault();
    let formData = new FormData();
    formData.append('picturelength', galleryLength);
    formData.append('image', sendImage);
    axios
      .post(`circle/${id}/gallery`, formData, {
        withCredentials: true,
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
    setOpen(false);
  };

  console.log(gallery);
  return (
    <GalleryDiv>
      <div style={{ alignItems: 'center', marginBottom: 10 }}>
        <text style={{ fontFamily: 'IBM-SemiBold', justifyContent: 'center', fontSize: 24 }}>갤러리</text>
        <Button
          style={{ marginLeft: 10, marginBottom: 5 }}
          onClick={() => {
            handleOpen();
          }}
          variant="secondary"
        >
          업로드하기
        </Button>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <form encType="multipart/form-data" onSubmit={sendImageFile}>
            <div style={style}>
              <text style={{ fontFamily: 'IBM-SemiBold', fontSize: 30, textAlign: 'center' }}>사진을 업로드해주세요.</text>
              <input style={inputStyle} type="file" name="image" onChange={handleImage} />
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button variant="contained" style={{ width: 170, backgroundColor: '#ccebff' }} type="submit">
                  수정하기
                </Button>
                <Button variant="contained" style={{ width: 170, backgroundColor: '#ccebff' }} onClick={handleClose}>
                  닫기
                </Button>
              </div>
            </div>
          </form>
        </Modal>
      </div>

      <Slider {...settings}>
        {gallery.map(value => (
          <div>
            <img src={value.pic_url} width="150" height="150" alt="G_image" />
          </div>
        ))}
        {gallery.map(value => (
          <div>
            <img src={value.pic_url} width="150" height="150" alt="G_image" />
          </div>
        ))}
        {gallery.map(value => (
          <div>
            <img src={value.pic_url} width="150" height="150" alt="G_image" />
          </div>
        ))}
      </Slider>
    </GalleryDiv>
  );
}

export default Gallery;
