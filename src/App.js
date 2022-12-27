// import logo from './images/logo.svg';
import './styles/App.css';

import React, {useRef, useEffect} from 'react';

import Navbar from './components/navbar';
import Home from './components/home';
import Photography from './components/photography';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
      <React.Fragment>
        <Navbar/>
        <Routes>  
          <Route exact path="/" element={<Home/>}/>
          <Route path='/photography' element={<Photography/>}/>
        </Routes>
      </React.Fragment>
  );
}

export default App;
