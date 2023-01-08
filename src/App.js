import './styles/App.css';

import React from 'react';

import Navbar from './components/navbar';
import Socials from './components/socials';
import Footer from './components/footer';
import Home from './components/home';
import Photography from './components/photography';

import {Routes, Route} from 'react-router-dom';

function App() {
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

