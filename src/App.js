// import logo from './images/logo.svg';
import './styles/App.css';

import {useRef, useEffect} from 'react';

import Navbar from './components/navbar';
import Home from './components/home';
import Projects from './components/projects';
import Photography from './components/photography';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <main>
      <Navbar/>
      <Routes>  
        <Route exact path="/" element={<Home/>}/>
        <Route path='/photography' element={<Photography/>}/>
      </Routes>
    </main>
  );
}

export default App;
