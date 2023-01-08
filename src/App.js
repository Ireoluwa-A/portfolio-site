import './styles/App.css';

import React, {useState, useEffect} from 'react';

import Navbar from './components/navbar';
import Socials from './components/socials';
import Footer from './components/footer';
import Home from './components/home';
import Photography from './components/photography';

import {Routes, Route} from 'react-router-dom';
import Loader from './components/loader';



function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
      setLoading(false)
      }, 3000)
  }, [])

  loading?document.body.style.overflow = "hidden":document.body.style.overflow = "auto";
  return (
      <>{loading ? <Loader/> : 
        <>
          <Navbar/>
          <Socials/>
        
          <Routes>  
            <Route exact path="/" element={<Home/>}/>
            <Route path='/photography' element={<Photography/>}/>
          </Routes>

          <Footer/>

        </>

      }
      </>
  );
}

export default App;


