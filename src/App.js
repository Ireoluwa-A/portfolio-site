// import logo from './images/logo.svg';
import './App.css';

import {useRef, useEffect} from 'react';

import Navbar from './components/navbar';
import Home from './components/home';
import Projects from './components/projects';
import Photography from './components/photography';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>  
        <Route path="/#" element={
          <div>
            <Home/>
            <Projects/>
          </div>}/>
        <Route path='/photography' element={<Photography/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
