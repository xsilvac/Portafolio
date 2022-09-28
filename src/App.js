import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  return (
    <><BrowserRouter>
<NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<Projects/>} /> */}
      </Routes>
    </BrowserRouter></>
  );
}

export default App;
