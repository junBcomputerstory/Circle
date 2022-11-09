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
import SigninFinish from './routes/SigninFinish';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Signin" element={<Signin />} />
      <Route path="Login" element={<Login />} />
      <Route path="Circles" element={<CirclePage />} />
      <Route path="Mypage" element={<Mypage />} />
      <Route path="Makecircle" element={<MakeCircle />} />
      <Route path="Searchcircle" element={<SearchCircle />} />
      <Route path="SigninFinish" element={<SigninFinish />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
);
