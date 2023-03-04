import './App.css';
import Authors from './pages/Authors';
import Committee from './pages/Committee';
import Contact from './pages/Contact';
import FinalPaper from './pages/FinalPaper';
import Home from './pages/Home';
import PlaceToVisit from './pages/PlacesToVisit';
import Registration from './pages/Registration';

import {  Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/authors" element={<Authors/>} />
        <Route exact path="/committee" element={<Committee/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/finalpaper" element={<FinalPaper/>} />
        <Route exact path="/places" element={<PlaceToVisit/>} />
        <Route exact path="/registration" element={<Registration/>} />
      </Routes>
    </div>
  );
}

export default App;
