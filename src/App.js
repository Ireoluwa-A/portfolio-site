// import logo from './images/logo.svg';
import './styles/App.css';

import React, {useRef, useEffect} from 'react';

import Navbar from './components/navbar';
import Socials from './components/socials';
import Footer from './components/footer';
import Home from './components/home';
import Photography from './components/photography';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
      <React.Fragment>

        <React.Fragment>
          <Navbar/>
          <Socials/>
        </React.Fragment>
        
        <Routes>  
          <Route exact path="/" element={<Home/>}/>
          <Route path='/photography' element={<Photography/>}/>
        </Routes>
        <Footer/>
        
      </React.Fragment>
  );
}

export default App;
