// import logo from './images/logo.svg';
import './App.css';

import {useRef, useEffect} from 'react';

import Navbar from './components/navbar';
import Home from './components/home';
import Projects from './components/projects'
import Photography from './components/photography'

import {Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter basename="/portfolio-site">
      <Routes>  
        <Route path="/portfolio-site" element={
          <div>
            <Home/>
            <Projects/>
          </div>}/>
        <Route path='/photography' element={<Photography/>}/>
      </Routes>  
      </BrowserRouter>

      
    </div>
  );
}

export default App;
