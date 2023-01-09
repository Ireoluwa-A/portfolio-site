import React, {useState, useEffect} from 'react'
import {useInView} from 'react-intersection-observer';


import { useScrollLocation } from '../helper';

import About_Icon from './about_icon';

// import "../styles/about.css";
import "../styles/about.css";

const About = () => {
    
    const {ref: aboutHeader, inView: aboutHeaderVisible, entry} = useInView({
        threshold: 0,
        triggerOnce: true
    })
    const {ref: aboutBody, inView: aboutBodyVisible, entryBody} = useInView({
        threshold: 0,
        triggerOnce: true
    })
    const location = useScrollLocation()

    
    const about_icons = [
        {language: 'English', 
        flag: 'US_flag'
        },
        {language: 'Yoruba', 
        flag: 'NG_flag'
        },
        {language: 'French', 
        flag: 'FR_flag'
        },
        {language: 'Mandarin', 
        flag: 'CHI_flag'
        },
        {language: 'Spanish', 
        flag: 'MEX_flag'
        },
        {language: 'Arabic', 
        flag: 'ALG_flag'
        }
    ]

    return (
        <section id='about' name='about' className='about_container'>
            {/* Title */}
            <div ref={aboutHeader} className={`about_header fade_in_left ${aboutHeaderVisible ? 'fade_in_appear' : ''}`} >
                <h1 className='text-3xl tracking-wider font-bold font-WorkSans'>ABOUT</h1>
                <div className='divider'></div>
            </div>
            <div ref={aboutBody} className={`about_body fade_in_up ${aboutBodyVisible ? 'fade_in_appear' : ''}`}>

                <div className='about_description font-WorkSans'>
                    <p>
                        I'm Ire, a sophomore studying Information Systems and Language Technologies at Carnegie Mellon University,
                        and I enjoy using technology to solve problems.
                    </p>
                    <br></br>
                    <p>
                        Born and raised during the ongoing tech boom of Lagos, Nigeria, I was exposed to computers
                        from an early age and loved using them to make everything from Scratch Games to animations and videos.
                        I've maintained this passion and curiosity, and love learning everything and anything I can.
                    </p>
                    <br></br>
                    <p>
                        You can usually find me practicing the piano/guitar, 
                        playing basketball, or coaxing my friends to do photoshoots 
                        (with me behind the camera of course).
                    </p>
                </div>
                
            </div>

                {/* <div className='about_options'> */}
                {/* {about_icons.map((about_icon,index)=>{
                        return(
                            <About_Icon key={index} icon={about_icon}/>
                        )})
                    } */}
                   
                {/* </div> */}
   
{/* 
                    <div className='about_icon'>
                        <div className='about_language'>
                            <h2 className='font-WorkSans'>
                                ENGLISH
                            </h2>
                        </div>
                        <div className='about_flag'>
                        </div>
                    </div> */}
                
 
            
        </section>
    )
}
export default About