import React, {useState, useEffect, useRef, Suspense} from 'react'
import {Link} from 'react-scroll' 

// import "../styles/general.css";
import "../styles/home.css";

import { TypeAnimation } from 'react-type-animation';

import About from './about';
const Projects = React.lazy(() => import ('./projects'));

const Home = () => {

    // Animated camera
    const [camAnimated, setCamAnimated] = useState(false);
    const [cursorAnimated, setCursorAnimated] = useState(false);


    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    window.addEventListener('mousemove',(e) => {
        setCursorX(e.pageX)
        setCursorY(e.pageY)
        // console.log(e.pageX,e.pageY)
    })


    return (
        <main id='home' name='home' className='w-full h-full'>
            <div className={`cursor ${cursorAnimated ? 'cursor_active' : 'cursor_fade'} `}
                style={{
                    left: cursorX + 'px',
                    top: cursorY + 'px'
                }}
                >
            </div>

            <section className='intro_section'>

                <div className='intro_title'>
                    <h1 className='font-bold font-WorkSans text-8xl tracking-wider animate-fade_in_left'>
                        IRE
                    </h1>
                    <h1 className='font-bold font-WorkSans text-8xl tracking-wider animate-fade_in_left'>
                        ALARAPE
                    </h1>
                </div>

                <div className='intro_card drop-shadow-lg animate-fade_in_right'>
                    {/* <div className='tape1'></div> */}


                    <div 
                        className='card_screen'

                        onMouseEnter={() => {setCursorAnimated(() => true);
                                            setCamAnimated(()=>true);
                                        }}
                        onMouseLeave = {() => {setCursorAnimated(() => false);
                           
                        }}
                        // onAnimationEnd={() => setCamAnimated(() => false)}
                    >  
                        {/* <a className={`cam_animation ${camAnimated ? 'cam_animated' : ''} `} href='/#/photography' target="_blank"></a> */}
                        <a className={`cam_animated  cam_animation`} href='/#/photography' target="_blank"></a>
                    </div>

                    <div className='intro_card_content'>
                        {/* <Typed className='font-sans font-bold pt-[-20px] translate-y-[40px] pl-[10px] tracking-wider md:text-xl'
                            strings={[
                                    "SOFTWARE ENGINEER","      ",
                                    "PHOTOGRAPHER","           ", 
                                    "POLYGLOT","               ",
                                    "MUSICIAN","               "
                                ]}
                            typeSpeed={90} backSpeed={60} loop /> */}

                        <TypeAnimation className='font-sans text-sm font-bold  pl-[10px] tracking-wider md:text-xl'
                            sequence={[
                                'SOFTWARE ENGINEER',
                                15000,
                                'PHOTOGRAPHER',
                                8000, 
                                'POLYGLOT', 
                                7000,
                                () => {
                                }
                            ]}
                            wrapper="p"
                            cursor={true}
                            repeat={Infinity}    
                        />
                        {/* <p className='font-sans font-bold max-w-[1/4] -translate-y-[1px] text-[13px] pl-[10px] pt-[-10px] mt-[-2px] pb-[5px] 
                                    tracking-wider text-[#5b5b5b]'>#7C9AB9</p> */}
                        <p className='font-sans max-w-[1/4] text-xs pl-[10px] 
                                    tracking-wider pb-[10px]'>
                            Carnegie Mellon student, passionate about tech, language, photography, and plantains.
                        </p>  
                        
                    </div>
                    {/* <div className='tape2'></div> */}
                </div> 
 
                <div className='scroll_down_container'>
                    <Link href='/' className ='scroll_down animate-arrow-move' to='projects' smooth={true} duration={800}>
                        <span></span>
                        <span></span>
                        <span></span>     
                    </Link>
                    {/* <p className='text-sm mr-[-15%]'>Explore some of my work</p> */}
                </div>

            </section>
            
            {/* <Suspense fallback={<Loader/>}> */}
            <Suspense>
                <Projects/>
            </Suspense>
            
            {/* Divider */} 
            <div className='w-full h-[90px]'></div>

            <About/>
            
        </main>

    );
}

export default Home