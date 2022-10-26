import React from 'react'
import Ire_outline_w from '../assets/Ire_outline.png';

import {HiArrowNarrowDown} from 'react-icons/hi'
import {FaBars, FaTimes, FaGitHub, FaLinkedin, FaRegistered,FaYoutube} from 'react-icons/fa';


const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#ece8e3]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
 
                <div className = 'absolute left-[50%] top-[25%] w-1/4 h-[45%] first-letter:mt-10 bg-[#7C9AB9] animate-fade_in_right border-white border-[12px]'>
                <img className='w-[300px] h-auto m-auto' src={Ire_outline_w}></img>
                </div>
                <div className = 'absolute left-[50%] top-[70%] w-1/4 h-[100px] first-letter:mt-10 bg-white animate-fade_in_right'>
                    <p className='font-sans font-bold -translate-y-[12px] pl-[10px] tracking-wider text-xl'>
                        SOFTWARE ENGINEER 
                        <span className='absolute left-[67%] top-[20%] text-[10px]'><FaRegistered /></span> 
                    </p>

                    <p className='font-sans max-w-[1/4] -translate-y-[12px] text-xs pl-[10px] 
                                tracking-wider'>
                        Carnegie Mellon Student, passionate about Tech, Language, Photography and Plantains
                    </p>
                   
                    <p className='font-sans -translate-y-[12px] text-xs pl-[10px] tracking-wider'></p>
                </div>

                <h1 className='absolute left-[29%] top-[35%] text-8xl tracking-wider sm:txt-7xl font-bold text-[] animate-fade_in_left'>IRE</h1>
                <h1 className='absolute left-[27.5%] top-[47%] text-8xl tracking-wider sm:txt-7xl font-bold text-[] animate-fade_in_left'>ALARAPE</h1>
  
                {/* 
                <div flex items-center>
                    <button>View work <HiArrowNarrowDown /> </button>
                </div> */}
            </div>
        </div>

    );
}

export default Home