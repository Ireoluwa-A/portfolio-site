import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-scroll' 

import Projects from './projects';
import About from './about';

import "../styles/general.css";
import "../styles/home.css";

import Typical from 'react-typical'
import Typed from "react-typed"

import Ire_outline_w from '../assets/Ire_outline_w.png';
import Ire_outline_b from '../assets/Ire_outline_b.png';
import Ire_gif_w from '../assets/camera_capture_final.gif';
import {HiArrowNarrowDown} from 'react-icons/hi'
import {FaBars, FaTimes, FaGitHub, FaLinkedin, FaRegistered,FaYoutube} from 'react-icons/fa';




 
const Home = () => {
    
    // Animated camera
    const [animated, setAnimated] = useState(false);

    return (
        <div name='home' className='w-full h-full'>
            
            <section className='intro_section'>

                <div className='intro_title'>
                    <h1 className='font-WorkSans text-8xl tracking-wider animate-fade_in_left'>
                        IRE
                    </h1>
                    <h1 className='font-WorkSans text-8xl tracking-wider animate-fade_in_left'>
                        ALARAPE
                    </h1>
                </div>

                <div className='intro_card drop-shadow-lg animate-fade_in_right'>
                    <div 
                        className='card_screen'
                        onMouseEnter={() => setAnimated(() => true)}
                        onAnimationEnd={() => setAnimated(() => false)}
                    >
                        <a className={`cam_animation ${animated ? 'cam_animated' : ''} `} href='/#/photography'></a>
                    </div>

                    <div className='intro_card_content'>
                    {/* drop-shadow-md absolute left-[50%] top-[63%] w-1/4 h-[70px] first-letter:mt-10 bg-white animate-fade_in_right */}
                        <Typed className='font-sans font-bold pt-[-20px] translate-y-[40px] pl-[10px] tracking-wider md:text-xl'
                        strings={[
                                "SOFTWARE ENGINEER","      ",
                                "PHOTOGRAPHER","       ", 
                                "POLYGLOT","        ",
                                "MUSICIAN","        "
                            ]}
                            typeSpeed={40}
                            backSpeed={60}
                            loop
                            />

                    <p className='font-sans max-w-[1/4] -translate-y-[1px] text-xs pl-[10px] 
                                tracking-wider'>
                        Carnegie Mellon student, passionate about tech, language, photography, and plantains
                    </p>
                        
                    </div>
                   

                </div>

                <div className='name-mobile md:name-main'>

                </div>
                            
                <div className='scroll_down_container'>
                    <Link href='/' className ='scroll_down animate-arrow-move' to='projects' smooth={true} duration={800}>
                        <span></span>
                        <span></span>
                        <span></span>
                        {/* <p>Explore some of my work</p> */}
                    </Link>
                </div>

            </section>
            


            <Projects/>
            <About/>

        </div>

    );
}

export default Home