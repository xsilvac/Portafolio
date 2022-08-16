import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <><BrowserRouter>
<NavBar />
      <Routes>

        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter></>
  );
}

export default App;
