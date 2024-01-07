import './App.css';
import FacebookLogin from './Facebook/FacebookLogin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/facebook" element={<FacebookLogin />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
