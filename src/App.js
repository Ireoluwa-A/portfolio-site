import './styles/App.css';

import React, {useState, useEffect} from 'react';

import Navbar from './components/navbar';
import Socials from './components/socials';
import Footer from './components/footer';
import Home from './components/home';
import Photography from './components/photography';

import {Routes, Route} from 'react-router-dom';




function App() {
  const [loading, setLoading] = useState(true);
  // Preload images into cache from beginning
  // Specifically animation images
 
  return (
      <>
        <Navbar/>
        <Socials/>
      
        <Routes>  
          <Route exact path="/" element={<Home/>}/>
          <Route path='/photography' element={<Photography/>}/>
        </Routes>

        <Footer/>
      </>
  );
}

export default App;


