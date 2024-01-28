import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import './css/App.css';
function App() {

  return (
    <div>
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>

      </div >
      {/* <div id="animated-background" className="animated-background animated-background--black" data-color="black" > */}
      {/* <canvas id="can0" className='position-fixed' style={{ zIndex: '-10', height: '100vh', width: '100vw' }} ></canvas> */}
      <Navbar />
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
