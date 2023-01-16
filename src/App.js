import React, {useState, useEffect, Suspend} from 'react';
import {useFuncDelay, useLockScroll} from './utils/helper'
import {Routes, Route} from 'react-router-dom';

import Navbar from './components/navbar';
import Socials from './components/socials';
import Footer from './components/footer';
import Loader from './components/loader';

import Photography from './pages/photography/photography';
import Home from './pages/main/home';
import ProjectPages from './data/projpages';
// const Home = React.lazy(() => import('./pages/main/home'));


const ProjectPage = React.lazy(() => import('./pages/main/projectpage'))




// const ProjectPages = React.lazy(() => import('./data/projpages'))

function App() {

  const [loading, setLoading] = useState(true);
  useFuncDelay(setLoading, false, 3000)
  useLockScroll(loading)


  return (
      <>{loading ? <Loader/> : 
          <>
            <Navbar/>
            <Socials/>
          
            <Routes>  
              <Route exact path="/" element={<Home/>}/>
              {ProjectPages.map((proj,index)=>{
                return(
                    <Route path="/youkaryote" key={index} 
                           element={<ProjectPage props={proj}/>}
                    />
                )})
              }
              
              <Route path='/photography' element={<Photography/>}/>
            </Routes>

            <Footer/>
          </>
        }
      </>
  );
} 

export default App;


