import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Main from './Components/Main/Main.js';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer';
import axios from 'axios';

function App() {
  return (
    
    <>
    <Routes>
      <Route exact path="/" element={<Header/>}/>
    </Routes>
    
    <Routes>
      <Route exact path="/" element={<Main/>}/>
    </Routes>

    <Routes>
      <Route exact path="/" element={<Footer/>}/>
    </Routes>
    </>
      

  
  
  
  );
}

export default App;
