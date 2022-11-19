import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Header from '../component/Header';
import styled from 'styled-components';
import { Button } from '@mui/material';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { HiOutlinePencil } from 'react-icons/hi';
import MypageCarousel from '../component/MypageCarousel';
import Footer from '../component/Footer';
import { Interests } from '../component/Interests';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Nickname = styled.text`
  font-family: 'IBM-SemiBold';
  font-size: 40px;
  margin: auto 30px;
`;

const Box = styled.div`
  width: 550px;
  margin: 20px auto;
`;

const MypageInterestBox = styled.div`
  flex-direction: row;
  border: 2px solid gray;
  padding: 10px;
  border-radius: 10px;
`;

const BorderBox = styled.div`
  border: 2px solid gray;
  padding-right: 10px;
  border-radius: 10px;
`;
function Mypage(props) {
  const printInterest = interest => {
    switch (interest) {
      case '1':
        return <img src={Interests.workout} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '2':
        return <img src={Interests.study} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '3':
        return <img src={Interests.trip} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '4':
        return <img src={Interests.cooking} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '5':
        return <img src={Interests.coding} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '6':
        return <img src={Interests.volunteer} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '7':
        return <img src={Interests.pet} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '8':
        return <img src={Interests.car} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '9':
        return <img src={Interests.game} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '10':
        return <img src={Interests.fashion} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '11':
        return <img src={Interests.workout} style={{ margin: '5px 5px' }} width={100} height={100} />;
      case '12':
        return <img src={Interests.workout} style={{ margin: '5px 5px' }} width={100} height={100} />;
    }
  };
  const [userNickname, setUserNickname] = useState('');
  const [userInterest, setUserInterest] = useState([]);
  const [userBadge, setUserBadge] = useState([]);
  const [userImage, setUserImage] = useState('');
  const [userID, setUserID] = useState(0);
  if (sessionStorage.length === 0) {
    document.location.href = 'login';
  }
  const [reviseNickname, setReviseNickname] = useState(userNickname);
  const [reviseUserImage, setReviseUserImage] = useState(null);
  const handleFileChange = e => {
    setReviseUserImage(e.target.files[0]);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function getData() {
    try {
      const response = await axios.get('/user/mypage');
      console.log(response);
      setUserNickname(response.data.nickname);
      setUserInterest(response.data.interest);
      setUserBadge(response.data.badge);
      setUserImage(response.data.image);
      setUserID(response.data.user_id);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
    // axios
    //   .get('/user/mypage')
    //   .then(response => {
    //     console.log(response.data);
    //     setUserNickname(response.data.nickname);
    //     setUserInterest(response.data.interest);
    //     setUserBadge(response.data.badge);
    //     setUserImage(response.data.image);
    //     setUserID(response.data.user_id);
    //     console.log('userr: ' + response.data.user_id);
    //     console.log('userID : ' + userID);
    //   })
    //   .catch(error => console.log(error));
  }, []);

  const sendReviseData = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append(
      'nickname',
      new Blob([JSON.stringify(reviseNickname)], {
        type: 'application/json',
      }),
    );
    formData.append('image', reviseUserImage);

    axios
      .post('/mypage/profile/7', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
    setOpen(false);
  };
  return (
    <div>
      <Header bgcolor="#f5f8fc" />
      <Container style={{ marginTop: '5%' }}>
        <InfoBox>
          <img style={{ borderRadius: '50%' }} src={userImage} width="130" height="130" alt="profile_image" />
          <Nickname>
            {userNickname}님
            <div style={{ display: 'inline-block' }}>
              <Button
                style={{ marginLeft: '20px' }}
                variant="outlined"
                size="sm"
                onClick={() => {
                  handleOpen();
                  console.log(userID);
                }}
              >
                <HiOutlinePencil /> 수정하기
              </Button>

              <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <form onSubmit={sendReviseData}>
                  <div style={style}>
                    <text style={{ fontFamily: 'IBM-SemiBold', fontSize: 30, textAlign: 'center' }}>수정할 정보를 입력해주세요.</text>
                    <input
                      style={inputStyle}
                      type="text"
                      placeholder="닉네임"
                      name="nickname"
                      value={reviseNickname}
                      onChange={e => setReviseNickname(e.target.value)}
                    />
                    <input style={inputStyle} type="file" name="imageFile" onChange={e => handleFileChange(e)} />
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                      <Button variant="contained" style={{ width: 170 }} type="submit">
                        수정하기
                      </Button>
                      <Button variant="contained" style={{ width: 170 }} onClick={handleClose}>
                        닫기
                      </Button>
                    </div>
                  </div>
                </form>
              </Modal>
            </div>
          </Nickname>
        </InfoBox>
        <Box style={{ width: '550px', margin: '20px auto' }} className="lvbox">
          <text style={{ fontFamily: 'IBM-Regular', fontSize: '30px' }}>Lv 1</text>
          <ProgressBar style={{ width: '150' }} animated variant="warning" now={1} />
        </Box>
        <Box>
          <text style={{ fontFamily: 'IBM-Regular', fontSize: '30px' }}>나의 관심사</text>
          <MypageInterestBox>{userInterest.map(interest => printInterest(interest))}</MypageInterestBox>
        </Box>
        <Box>
          <text style={{ fontFamily: 'IBM-Regular', fontSize: '30px' }}>나의 서클</text>
          <BorderBox>
            <MypageCarousel />
          </BorderBox>
        </Box>
        <Box>
          <text style={{ fontFamily: 'IBM-Regular', fontSize: '30px' }}>나의 뱃지</text>
          <MypageInterestBox>
            {userBadge.map(data => (
              <img style={{ margin: '0 5px' }} src={data.url} width="100" height="100" alt={data.url} />
            ))}
          </MypageInterestBox>
        </Box>
        <Footer />
      </Container>
    </div>
  );
}

export default Mypage;
