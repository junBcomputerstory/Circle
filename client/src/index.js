import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Signin from './routes/Signin';
import Login from './routes/Login';
import CirclePage from './routes/CirclePage';
import Mypage from './routes/Mypage';
import MakeCircle from './routes/MakeCircle';
import SearchCircle from './routes/SearchCircle';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="signin" element={<Signin />} />
      <Route path="login" element={<Login />} />
      <Route path="circles" element={<CirclePage />} />
      <Route path="mypage" element={<Mypage />} />
      <Route path="makecircle" element={<MakeCircle />} />
      <Route path="searchcircle" element={<SearchCircle />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
);
