import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Summer from './Pages/Page1/Summer';
import Second from './Pages/Page2/Second';
import Recent from './Pages/Page3/Recent';
import Best from './Pages/Page4/Best';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Summer/>
      <Second/>
      <Recent/>
      <Best/>
      <Footer/>
    </div>
  );
}

export default App;
