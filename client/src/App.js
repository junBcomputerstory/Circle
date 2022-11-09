import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainImageBox from './component/MainImageBox';
import Header from './component/Header';
import BestCircle from './component/BestCircle';
import $ from 'jquery';
import './css/example.css';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Header bgcolor="#f5f8fc" className="content" />
        <MainImageBox className="content" />
        <BestCircle className="content" />
        <Footer />
      </div>
    </>
  );
}

export default App;

// rsf => 기본 펑션 만들기
