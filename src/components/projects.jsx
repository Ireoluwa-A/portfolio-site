import React, {useRef, useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer';

import "../styles/general.css";
import "../styles/projects.css";

const Projects = () => {

    const {ref: projectHeader, inView: projectHeaderVisible} = useInView()
    
    return (
        <section name='projects' className='projects-container'>
            {/* Title */}
            <div ref={projectHeader} className={`projects-header ${projectHeaderVisible ? 'animate-fade_in_left' : ''}`} >
                <h1 className='text-4xl tracking-wider font-WorkSans'>My</h1>
                <h1 className='text-4xl tracking-wider font-WorkSans'>Projects</h1>
                <div className='divider'></div>
            </div>

            {/* All projects */}
            <div className='projects-body'>
                <div className='projects-box'>
                    <div className='projects-image'>

                    </div>
                    <div className='projects-description'>

                    </div>
                </div>


            </div>
        </section>
    )
}
export default Projects