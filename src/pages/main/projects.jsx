import React, {useRef, useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer';
import {useScrollLocation}  from '../../utils/helper';

import ProjectBox from './projectbox';
import projectsInfo from '../../projectsInfo.json';


import "../../styles/general.css";
import "../../styles/projects.css";


const Projects = () => {
    const location = useScrollLocation()

    const {ref: projectHeader, inView: projectHeaderVisible, entry} = useInView({
        threshold: 0.4,
        triggerOnce: true
    })
    
    return (
        <section id='projects' name='projects' className='projects_container'>
            {/* Title */}
            <div ref={projectHeader} 
                className={`projects_header fade_in_left
                            ${projectHeaderVisible ? 'fade_in_appear' : ''}`} >
                <h1 className='text-3xl tracking-wider font-bold font-WorkSans'>MY</h1>
                <h1 className='text-4xl tracking-wider font-bold font-WorkSans'>PROJECTS</h1>
                <div className='divider'></div>
            </div>

            {/* All projects */}
            {/* <ProjectBox proj={projBoxes[0]}/> */}
            <div className='projects_body'>
                {projectsInfo.map((proj,index)=>{
                    return(
                        <ProjectBox key={index} proj={proj} />
                    )})
                }
            </div>
        </section>
    )
}
export default Projects
