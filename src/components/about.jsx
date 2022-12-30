import React, {useState, useEffect} from 'react'
import {useInView} from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';


// import "../styles/general.css";
import "../styles/about.css";

const About = () => {
    const {ref: aboutHeader, inView: aboutHeaderVisible, entry} = useInView()
    
    const location = useLocation()
    useEffect(()=> {
        if (location.hash) {
            console.log(location.hash.slice(1));
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
                <div className='about_description'>
                    <p>
                        I'm Ire. A sophomore studying Information Systems at CMU.
                    </p>
                </div>
                <div className='about_images'>

                </div>
 
            </div>
        </section>
    )
}
export default About