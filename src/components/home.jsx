import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-scroll' 

import Projects from './projects';
import About from './about';

import leaves from '../assets/leaves.png';

import "../styles/general.css";
import "../styles/home.css";

import Typed from "react-typed"

import Ire_outline_w from '../assets/Ire_outline_w.png';
import Ire_outline_b from '../assets/Ire_outline_b.png';
import Ire_gif_w from '../assets/camera_capture_final.gif';
import {HiArrowNarrowDown} from 'react-icons/hi'
import {FaBars, FaTimes, FaGithub, 
        FaLinkedin, FaRegistered,FaYoutube,
        FaInstagram,
        FaLinkedinIn} from 'react-icons/fa';
 
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
                        <a className={`cam_animation ${animated ? 'cam_animated' : ''} `} href='/#/photography' target="_blank"></a>
                    </div>

                    <div className='intro_card_content'>
                        <Typed className='font-sans font-bold pt-[-20px] translate-y-[40px] pl-[10px] tracking-wider md:text-xl'
                            strings={[
                                    "SOFTWARE ENGINEER","      ",
                                    "PHOTOGRAPHER","           ", 
                                    "POLYGLOT","               ",
                                    "MUSICIAN","               "
                                ]}
                            typeSpeed={40} backSpeed={60} loop />
                        <p className='font-sans max-w-[1/4] -translate-y-[1px] text-xs pl-[10px] 
                                    tracking-wider'>
                            Carnegie Mellon student, passionate about tech, language, photography, and plantains
                        </p>  
                    </div>
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
            
            {/* Divider */} <div className='w-full h-[100px]'></div>

            <About/>
            
            <div className='hidden md:flex '>
                <div className='socials_container' >
                    <a href='https://github.com/Ireoluwa-A'><FaGithub className='social_icon'></FaGithub></a>
                    <a href='https://www.linkedin.com/in/ire-alarape/'><FaLinkedinIn className='social_icon'></FaLinkedinIn></a>
                    <a href='https://github.com/Ireoluwa-A'><FaInstagram className='social_icon'></FaInstagram></a>
                    <div className='socials_line'></div>
                    <img className='leaves'src={leaves}/>
                </div>
            
            </div>
            
            

        </div>

    );
}

export default Home