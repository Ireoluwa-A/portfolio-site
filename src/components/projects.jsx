import React, {useRef, useEffect, useState} from 'react'


import { useLocation } from 'react-router-dom';



import { useScrollLocation } from '../helper';
import {useInView} from 'react-intersection-observer';

import ProjectBox from './projectbox';

import "../styles/general.css";
import "../styles/projects.css";

const Projects = () => {
    const location = useScrollLocation()

    const {ref: projectHeader, inView: projectHeaderVisible, entry} = useInView()
    const projBoxes = [
        // List of featured projects and their information
        // Passed as prop to PorjectBox Component
        {
            background: 'youkaryote_bg',
            descriptionPos: 'projects_description_r',
            imageLeft: '',
            imageRight: 'hidden',
            title: 'YOUKARYOTE',
            description: `To the fans of Civ 6 and Cellular Biology - 
                          an RTS game where you micromanage your cell,
                          produce ATP, perform meitosis, and expand until you conquer the map (porting to unity).`,
            technology: [{name: 'Python'}, {name: 'CMUGraphics'}, {name: 'Unity'}, {name: 'C#'}],
            link: 'https://github.com/Ireoluwa-A/Youkaryote',
            linkPos: 'projects_link_r'
        },
        {
            background: 'ede_bg',
            descriptionPos:'projects_description_l',
            imageLeft: 'hidden',
            imageRight: '',
            title: 'EDE',
            description: `To fellow language lovers, a tool to organize the myriad of resources.`,
            technology: [{name: 'SQL'}, {name: 'Flask'}, {name:'JavaScript (ES6+)' }, {name:'HTML & CSS' }],
            link: 'https://github.com/Ireoluwa-A/EDE', 
            linkPos: 'projects_link_l'
        },
        {
            background: 'c0_bg',
            descriptionPos:'projects_description_r',
            imageLeft: '',
            imageRight: 'hidden',
            title: 'THE C0 VIRTUAL MACHINE',
            description: `15-122 final project, written in C, implementing instructions enabling virtual machine interprete programs written in language C0 (subset of C language made by CMU)`,
            technology: [{name: 'C'}],
            link: 'https://github.com/Ireoluwa-A/Youkaryote',
            linkPos: 'hide'
        },
        {
            background: 'bcnf_bg',
            descriptionPos:'projects_description_l',
            imageLeft: 'hidden',
            imageRight: '',
            title: 'BCNF VISUALIZER',
            description: `Aid other students learning database design visualize breaking
                            an abstract relation into Boys-Codde Normal Form.`,
            technology: [{name: 'React'},{name: 'JavaScript (ES6+)'}, {name: 'HTML & CSS'}],
            link: 'https://github.com/Ireoluwa-A/Youkaryote',
            linkPos: 'projects_link_l'
        }
    ];

    function scrollingFromAbove(entry){
        return entry.boundingClientRect.y >= entry.rootBounds.y;
    }
    
    return (
        <section id='projects' name='projects' className='projects_container'>
            {/* Title */}
            <div ref={projectHeader} 
                className={`projects_header 
                            ${projectHeaderVisible && scrollingFromAbove(entry) ? 
                             'animate-fade_in_left' : ''}`} >
                <h1 className='text-3xl tracking-wider font-bold font-WorkSans'>MY</h1>
                <h1 className='text-4xl tracking-wider font-bold font-WorkSans'>PROJECTS</h1>
                <div className='divider'></div>
            </div>

            {/* All projects */}
            {/* <ProjectBox proj={projBoxes[0]}/> */}
            <div className='projects_body'>
                {projBoxes.map((proj,index)=>{
                    return(
                        <ProjectBox key={index} proj={proj} scrollingFunc={scrollingFromAbove}/>
                    )})
                }
            </div>
        </section>
    )
}
export default Projects
