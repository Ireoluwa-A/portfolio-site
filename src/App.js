import React, {useState, useEffect} from 'react';
import {useFuncDelay, useLockScroll} from './utils/helper'


import Navbar from './components/navbar';
import Socials from './components/socials';
import Footer from './components/footer';
import Home from './pages/main/home';
import Photography from './pages/photography/photography';

import {Routes, Route} from 'react-router-dom';
import Loader from './components/loader';



function App() {

  const [loading, setLoading] = useState(true);
  useFuncDelay(setLoading, false, 3000)
  useLockScroll(loading)


  // hash = hash.slice(1).split('?');
  // if (hash) console.log(hash);

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


