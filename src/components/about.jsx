import React from 'react'
import {useInView} from 'react-intersection-observer';


import "../styles/general.css";
import "../styles/about.css";

const About = () => {
    const {ref: aboutHeader, inView: aboutHeaderVisible} = useInView()

    return (
        <section name='about' className='about_container'>
            {/* Title */}
            <div ref={aboutHeader} className={`about_header ${aboutHeaderVisible ? 'animate-fade_in_left' : ''}`} >
                <h1 className='text-4xl tracking-wider font-WorkSans'>About</h1>
                <div className='divider'></div>
            </div>
            
            
        </section>
        // <div name='projects' className='projects-container max-w-[1000px] mx-auto px-8 pt-[30px] flex flex-col'>
        //     <div className='projects-header'>
        //         <h1 className='text-5xl tracking-wider font-WorkSans'>My</h1>
        //         <h1 className='text-5xl tracking-wider font-WorkSans'>Projects</h1>
        //         <div className='divider'></div>
        //     </div>
        // </div>
    )
}
export default About