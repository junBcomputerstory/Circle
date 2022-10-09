import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainImageBox from './component/MainImageBox';
import Header from './component/Header';
import BestCircle from './component/BestCircle';
import $ from 'jquery';
import './css/example.css';
import Footer from './component/Footer';

function App() {
  // window.addEventListener(
  //   'wheel',
  //   function (e) {
  //     e.preventDefault();
  //   },
  //   { passive: false },
  // );
  // var $html = $('html');

  // var page = 1;

  // var lastPage = $('.content').length;

  // $html.animate({ scrollTop: 0 }, 0);
  // $(window).on('wheel', function (e) {
  //   if ($html.is(':animated')) return;

  //   if (e.originalEvent.deltaY > 0) {
  //     if (page === lastPage) return;

  //     page++;
  //   } else if (e.originalEvent.deltaY < 0) {
  //     if (page === 1) return;

  //     page--;
  //   }
  //   var posTop = (page - 1) * $(window).height();

  //   $html.animate({ scrollTop: posTop });
  // });

  return (
    <>
      <div className="App">
        <Header className="content" />
        <MainImageBox className="content" />
        <BestCircle className="content" />
        <Footer />
      </div>
    </>
  );
}

export default App;

// rsf => 기본 펑션 만들기
