import React from 'react'
import {Link} from 'react-scroll' 


import Projects from './projects';

import Ire_outline_w from '../assets/Ire_outline_w.png';
import Ire_outline_b from '../assets/Ire_outline_b.png';
import Ire_gif_w from '../assets/camera_capture_final.gif';

import "../styles/home.css";

import {HiArrowNarrowDown} from 'react-icons/hi'
import {FaBars, FaTimes, FaGitHub, FaLinkedin, FaRegistered,FaYoutube} from 'react-icons/fa';


import Typical from 'react-typical'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen'>

            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

                <div className = 'drop-shadow-lg absolute left-[50%] top-[25%] w-1/4 h-[40%] first-letter:mt-10 bg-[#7C9AB9] animate-fade_in_right border-white border-[12px]'>
                    <a className='hover-animation'>
                        <img className='w-[54%] h-[80%] m-auto mt-[10%]' src={Ire_outline_w}></img>
                        <img className='scale-x-150 scale-y-110 w-[1000px] h-[300px] mt-[4%] m-auto' src={Ire_gif_w}></img>
                    </a>
                </div>

                <div className = 'drop-shadow-md absolute left-[50%] top-[65%] w-1/4 h-[60px] first-letter:mt-10 bg-white animate-fade_in_right'>

                    {/* Typical auto type module: */}

                    <Typical className='font-sans font-bold -translate-y-[10px] pl-[10px] tracking-wider md:text-xl'
                        steps={[2000,'SOFTWARE ENGINEER',5000,'PHOTOGRAPHER',5000,'POLYGLOT',5000]}
                        loop={Infinity}
                        wrapper='p'
                    />



                    <p className='font-sans max-w-[1/4] -translate-y-[12px] text-xs pl-[10px] 
                                tracking-wider'>
                        Carnegie Mellon student, passionate about tech, language, photography, and plantains
                    </p>
                </div>

                <div className='name-mobile md:name-main'>

                </div>
                
                <h1 className='font-WorkSans absolute left-[29%] top-[35%] text-8xl tracking-wider sm:txt-7xl font-bold text-[] animate-fade_in_left'>
                    IRE
                </h1>
                <h1 className='font-WorkSans absolute left-[27.5%] top-[47%] text-8xl tracking-wider sm:txt-7xl font-bold text-[] animate-fade_in_left'>
                    ALARAPE
                </h1>

                <div className='scroll-down-container'>
                    <Link href='/' className ='scroll-down animate-arrow-move' to='projects' smooth={true} duration={800}>
                        <span></span>
                        <span></span>
                        <span></span>
                        {/* <p>Explore some of my work</p> */}
                    </Link>
                </div>

                {/* 
                <div flex items-center>
                    <button>View work <HiArrowNarrowDown /> </button>
                </div> */}
            </div>

            {/* <div className='divider'></div> */}


            <Projects/>









        </div>

    );
}

export default Home