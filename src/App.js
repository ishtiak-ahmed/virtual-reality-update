import './App.css';
import Booking from './pages/Booking/Booking';
import Home from './pages/Home/Home';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div >

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="booking" element={<Booking></Booking>} />
      </Routes>
      
    </div>
  );
}

export default App;
