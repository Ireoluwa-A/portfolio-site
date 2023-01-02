import React, {useState, useEffect} from 'react'
import {useInView} from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';


import "../styles/about.css";

const About = () => {
    const {ref: aboutHeader, inView: aboutHeaderVisible, entry} = useInView()
    
    const location = useLocation()
    useEffect(()=> {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            console.log(elem)
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
        } else {
        window.scrollTo({top:0,left:0, behavior: "smooth"})
        }
    }, [location,])

    
    return (
        <section id='about' name='about' className='about_container'>
            {/* Title */}
            <div ref={aboutHeader} className={`about_header ${aboutHeaderVisible && (entry.boundingClientRect.y >= entry.rootBounds.y)? 'animate-fade_in_left' : ''}`} >
                <h1 className='text-3xl tracking-wider font-bold font-WorkSans'>ABOUT</h1>
                <div className='divider'></div>
            </div>
            <div className='about_body'>

                <div className='about_description font-WorkSans'>
                    <p>
                        I'm Ire, a sophomore studying Information Systems and Language technologies at Carnegie Mellon University,
                        and I enjoy using technology to solve problems.
                    </p>
                    <br></br>
                    {/* <p>
                        Born and raised during the ongoing tech boom of Lagos, Nigeria, and surrounded by the 
                        diversity of the region, I've always loved technology and have been
                        Now I harness this passion to learn
                    </p> */}
                    {/* <br></br> */}
                    <p>
                        You can usually find me practicing the piano/guitar, 
                        playing basketball or coaxing my friends to do photoshoots 
                        (with me behind the camera of course).
                    </p>
                </div>

                <div className='about_options'>

                </div>
 
            </div>
        </section>
    )
}
export default About