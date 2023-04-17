import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Main from './Components/Main';

function App() {
  return (
    
      <Routes>
      <Route exact path="/" element={<Main/>}/>
    </Routes>
  
  
  
  );
}

export default App;
