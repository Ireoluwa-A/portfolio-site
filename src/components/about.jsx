import React from 'react'
import {useInView} from 'react-intersection-observer';

import "../styles/general.css";
import "../styles/about.css";

const About = () => {
    const {ref: aboutHeader, inView: aboutHeaderVisible, entry} = useInView()

    return (
        <section name='about' className='about_container'>
            {/* Title */}
            <div ref={aboutHeader} className={`about_header ${aboutHeaderVisible && (entry.boundingClientRect.y >= entry.rootBounds.y)? 'animate-fade_in_left' : ''}`} >
                <h1 className='text-4xl tracking-wider font-WorkSans'>ABOUT</h1>
                <div className='divider'></div>
            </div>
        </section>
    )
}
export default About