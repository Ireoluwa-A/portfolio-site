import React, {useState, useEffect, useRef, Suspense} from 'react'
import {Link} from 'react-scroll' 

import "../styles/home.css";

import {detectBrowser} from '../helper';

import Spinner from './spinner';
import Card from './card';
import About from './about';
const Projects = React.lazy(() => import ('./projects'));

const Home = () => {
    const browser = detectBrowser()
    
    return (
        <main id='home' name='home' className='w-full h-full'>
            <section className='intro_section'>

                <div className='intro_title'>
                    <h1 className='font-bold font-WorkSans text-8xl tracking-wider animate-fade_in_left'>
                        IRE
                    </h1>
                    <h1 className='font-bold font-WorkSans text-8xl tracking-wider animate-fade_in_left'>
                        ALARAPE
                    </h1>
                </div>

                <Card browser={browser} />

                <div className='scroll_down_container'>
                    <Link href='/' className ='scroll_down animate-arrow-move' to='projects' smooth={true} duration={800}>
                        <span></span>
                        <span></span>
                        <span></span>     
                    </Link>
                    {/* <p className='text-sm mr-[-15%]'>Explore some of my work</p> */}
                </div>

            </section>
            
            <Suspense fallback={<Spinner/>}>
                <Projects/>
            </Suspense>
            
            {/* Divider */} 
            <div className='w-full h-[130px]'></div>

            <About/>
            
        </main>

    );
}

export default Home