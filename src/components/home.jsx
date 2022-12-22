import React from 'react'

import Projects from './projects';

import Ire_outline_w from '../assets/Ire_outline_w.png';
import Ire_outline_b from '../assets/Ire_outline_b.png';

import "../styles/home.css";

import {HiArrowNarrowDown} from 'react-icons/hi'
import {FaBars, FaTimes, FaGitHub, FaLinkedin, FaRegistered,FaYoutube} from 'react-icons/fa';


import Typical from 'react-typical'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen'>

            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>

                <div className = 'drop-shadow-lg absolute left-[50%] top-[25%] w-1/4 h-[40%] first-letter:mt-10 bg-[#7C9AB9] animate-fade_in_right border-white border-[12px]'>
                    <img className='w-[75%] h-[110%] mt-[10px] m-auto' src={Ire_outline_w}></img>
                </div>

                <div className = 'drop-shadow-md absolute left-[50%] top-[65%] w-1/4 h-[60px] first-letter:mt-10 bg-white animate-fade_in_right'>
                    <p className='font-sans font-bold -translate-y-[10px] pl-[10px] tracking-wider md:text-xl'>
                    <Typical
                        steps={[2000,'SOFTWARE ENGINEER',5000,'PHOTOGRAPHER', 5000, 'POLYGLOT',5000]}
                        loop={Infinity}
                        wrapper="p"
                    />

                        {/* <span className='absolute top-[20%] text-[10px]'><FaRegistered /></span>  */}
                    </p>

                    <p className='font-sans max-w-[1/4] -translate-y-[12px] text-xs pl-[10px] 
                                tracking-wider'>
                        Carnegie Mellon Student, passionate about tech, language, photography, and plantains
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