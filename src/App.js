import './App.css';
import FacebookLogin from './Facebook/FacebookLogin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InstagramLogin from './Instagram/InstagramLogin';


function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/facebook" element={<FacebookLogin />} />
        <Route path="/instagram" element={<InstagramLogin />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
