import React, {useState, useEffect} from 'react'
import {Link} from 'react-scroll' 


import Projects from './projects';
import About from './about';

import Ire_outline_w from '../assets/Ire_outline_w.png';
import Ire_outline_b from '../assets/Ire_outline_b.png';
import Ire_gif_w from '../assets/camera_capture_final.gif';

import "../styles/home.css";

import {HiArrowNarrowDown} from 'react-icons/hi'
import {FaBars, FaTimes, FaGitHub, FaLinkedin, FaRegistered,FaYoutube} from 'react-icons/fa';

import Typical from 'react-typical'
import Typed from "react-typed"



const Home = () => {
    
    // Animated camera
    const [animated, setAnimated] = useState(false);

    return (
        <div name='home' className='w-full h-full'>
            <div className='full_screen_section'>
                <div 
                    className='drop-shadow-lg absolute left-[50%] top-[25%] w-1/4 h-[40%] first-letter:mt-10 bg-[#7C9AB9] animate-fade_in_right border-white border-[12px]'
                    onMouseEnter={() => setAnimated(() => true)}
                    onAnimationEnd={() => setAnimated(() => false)}
                >
                    <a className={`cam_animation ${animated ? 'cam_animated' : ''} `} href='/#/photography'/>
                </div>

                <div className = 'drop-shadow-md absolute left-[50%] top-[63%] w-1/4 h-[70px] first-letter:mt-10 bg-white animate-fade_in_right'>

                    {/* Typical auto type module: */}
                    <Typed className='font-sans font-bold pt-[-20px] translate-y-[40px] pl-[10px] tracking-wider md:text-xl'
                    strings={[
                            "SOFTWARE ENGINEER ","      ",
                            "PHOTOGRAPHER","      ", "      ",
                            "POLYGLOT","        ",
                            "MUSICIAN","        "
                        ]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                        />
                    {/* <Typical className='font-sans font-bold -translate-y-[10px] pl-[10px] tracking-wider md:text-xl'
                        steps={[2000,'SOFTWARE ENGINEER',5000,'PHOTOGRAPHER',5000,'POLYGLOT',5000]}
                        loop={Infinity}
                        wrapper='p'
                    /> */}
                    
                    <p className='font-sans max-w-[1/4] -translate-y-[1px] text-xs pl-[10px] 
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
            <About/>

        </div>

    );
}

export default Home