import React, { useState } from 'react';
import Header from '../component/Header';
import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const InterestOptions = [
  {
    id: 1,
    name: '운동',
  },
  {
    id: 2,
    name: '공부',
  },
  {
    id: 3,
    name: '여행',
  },
  {
    id: 4,
    name: '요리',
  },
  {
    id: 5,
    name: 'IT',
  },
  { id: 6, name: '봉사' },
  {
    id: 7,
    name: '반려동물',
  },
  {
    id: 8,
    name: '자동차',
  },
  {
    id: 9,
    name: '음악',
  },
  { id: 10, name: '문화' },
  {
    id: 11,
    name: '게임',
  },
  {
    id: 12,
    name: '패션',
  },
];

const LocationOptions = [
  {
    id: 1,
    name: '서울',
  },
  {
    id: 2,
    name: '부산',
  },
  {
    id: 3,
    name: '대구',
  },
  {
    id: 4,
    name: '인천',
  },
  {
    id: 5,
    name: '광주',
  },
  {
    id: 6,
    name: '대전',
  },
  {
    id: 7,
    name: '울산',
  },
  {
    id: 8,
    name: '세종',
  },
  {
    id: 9,
    name: '경기도',
  },
  {
    id: 10,
    name: '강원도',
  },
  {
    id: 11,
    name: '제주도',
  },
  {
    id: 12,
    name: '온라인',
  },
]; // 초기값 null 설정!!

const SearchCategoryDiv = styled.div`
  display: flex;
  width: 1200px;
  border: 1px solid #c2c3c4;
  margin: 50px auto;
  padding: 30px;
  justify-content: space-between;
  background-color: #f5f8fc;
`;

const SearchList = styled.div`
  display: flex;
  width: 1200px;
  margin: 20px auto;
  flex-direction: 'row';
  flex-wrap: wrap;
`;

function SearchCircle(props) {
  const printInterest = response_data => {
    let arr = [];
    response_data.forEach(value => {
      for (let i = 0; i < InterestOptions.length; i++) {
        if (value.interest_id === InterestOptions[i].id) {
          arr.push(InterestOptions[i].name);
        }
      }
    });
    setCircleInterest(arr);
  };

  const printLocation = response_data => {
    let arr = [];
    response_data.forEach(value => {
      for (let i = 0; i < LocationOptions.length; i++) {
        if (value.area_id === LocationOptions[i].id) {
          arr.push(LocationOptions[i].name);
        }
      }
    });
    setCircleLoc(arr);
  };

  const [selectedLocation, setSelectedLocation] = useState(999);
  const [selectedInterest, setSelectedInterest] = useState(999);
  const [selectedLimit, setSelectedLimit] = useState(999);
  const [searchText, setSearchText] = useState('');
  const [resultData, setResultData] = useState([]);
  const [circleLoc, setCircleLoc] = useState([]);
  const [circleInterest, setCircleInterest] = useState([]);

  const onChangeHandlerInterest = e => {
    setSelectedInterest(parseInt(e.target.value));
    console.log(selectedInterest);
  };

  const onChangeHandlerLocation = e => {
    setSelectedLocation(parseInt(e.target.value));
    console.log(selectedLocation);
  };

  const onChangeHandlerLimit = e => {
    setSelectedLimit(parseInt(e.target.value));
    console.log(selectedLimit);
  };

  const onChangeHandlerText = e => {
    setSearchText(e.target.value);
  };

  async function onSubmit() {
    try {
      const response = await axios.get(
        '/circle/find',
        { params: { interest_id: selectedInterest, area_id: selectedLocation, sex: selectedLimit, name: searchText } },
        {
          WithCredentials: true,
        },
      );
      console.log(response);
      setResultData(response.data);
      printLocation(response.data);
      printInterest(response.data);
      printIn;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Header bgcolor="#f5f8fc" />
      <SearchCategoryDiv>
        <select
          style={{ width: 200, height: 30, paddingLeft: 5 }}
          defaultValue={selectedInterest}
          name="category"
          onChange={onChangeHandlerInterest}
        >
          <option key="13" value="999">
            전체(흥미)
          </option>
          {InterestOptions.map(value => (
            <option key={value.name} value={value.id}>
              {value.name}
            </option>
          ))}
        </select>
        <select
          style={{ width: 200, height: 30, paddingLeft: 5 }}
          defaultValue={selectedLocation}
          name="location"
          onChange={onChangeHandlerLocation}
        >
          <option key="12" value="999">
            전체(지역)
          </option>
          {LocationOptions.map(value => (
            <option key={value.name} value={value.id}>
              {value.name}
            </option>
          ))}
        </select>
        <select
          style={{ width: 200, height: 30, paddingLeft: 5 }}
          defaultValue={selectedLimit}
          name="gender"
          onChange={onChangeHandlerLimit}
        >
          <option key="4" value="999">
            상관없음(성별)
          </option>
          <option key="1" value="1">
            남자
          </option>
          <option key="2" value="2">
            여자
          </option>
          <option key="3" value="3">
            혼성
          </option>
        </select>
        <div style={{ display: 'inline-block' }}>
          <input
            style={{ width: 300, height: 30, paddingLeft: 5 }}
            type="text"
            placeholder="검색어를 입력하세요"
            onChange={onChangeHandlerText}
          />
          <GoSearch style={{ marginLeft: 5, marginBottom: 5 }} size="28" onClick={onSubmit} />
        </div>
      </SearchCategoryDiv>
      <div style={{ marginLeft: 120, fontSize: 28 }}>
        <text style={{ fontFamily: 'IBM-Medium' }}>검색 결과({resultData.length})</text>
      </div>
      <SearchList>
        {resultData.map((value, index) => (
          <Card key={value.id} style={{ width: '18rem', marginBottom: 50, marginRight: 10 }}>
            <Card.Img style={{ margin: '30px auto', width: '15rem', height: '15rem' }} variant="top" src={value.circlepic} />
            <Card.Body>
              <Card.Text style={{ fontFamily: 'IBM-SemiBold', margin: '0 15px', marginBottom: 15 }}>{value.name}</Card.Text>
              <Card.Text style={{ fontFamily: 'IBM-Light', margin: '0 15px' }}>흥미 : {circleInterest[index]}</Card.Text>
              <Card.Text style={{ fontFamily: 'IBM-Light', margin: '0 15px' }}>
                인원 : {value.cur_num}/{value.max_num}
              </Card.Text>
              <Card.Text style={{ fontFamily: 'IBM-Light', margin: '0 15px' }}>지역 : {circleLoc[index]}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </SearchList>
    </div>
  );
}

export default SearchCircle;
