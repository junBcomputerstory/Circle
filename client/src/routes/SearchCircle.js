import React from 'react';
import Header from '../component/Header';
import styled from 'styled-components';

const SearchCategoryDiv = styled.div`
  width: (max-content - 300);
  border: 1px solid black;
`;

function SearchCircle(props) {
  return (
    <div>
      <Header />
      <SearchCategoryDiv></SearchCategoryDiv>
    </div>
  );
}

export default SearchCircle;
