import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Proflightlogo from './Components/ProFlightlogo/ProFlightlogo.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Proflightlogo />} />
    </Routes>   
  );
}

export default App;
