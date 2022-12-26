import React, {useRef, useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer';

import ProjectBox from './projectbox';

import "../styles/general.css";
import "../styles/projects.css";


const Projects = () => {

    const {ref: projectHeader, inView: projectHeaderVisible, entry} = useInView()
    const [projBoxes, setProjBoxes] = useState([
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
                          produce ATP, perform meitosis, and expand until you conquer the map. (porting to unity)`,
            technology: [{name: 'Python'}, {name: 'CMUGraphics Lib'}, {name: 'Unity'}, {name: 'C#'}],
            link: 'https://github.com/Ireoluwa-A/Youkaryote',
            linkPos: 'projects_link_r'
        },
        {
            background: 'ede_bg',
            descriptionPos:'projects_description_l',
            imageLeft: 'hidden',
            imageRight: '',
            title: 'EDE',
            description: 'Language Learning schedule organizer',
            technology: [{name: 'Javascript'}, {name: 'Flask'}, {name: 'SQL'}, {name: 'HTML & CSS'}],
            link: 'https://github.com/Ireoluwa-A/EDE', 
            linkPos: 'projects_link_l'
        },
        {
            background: 'ede_bg',
            descriptionPos:'projects_description_r',
            imageLeft: '',
            imageRight: 'hidden',
            title: 'THE C0 VIRTUAL MACHINE',
            description: '',
            technology: [{name: 'C'}],
            link: 'https://github.com/Ireoluwa-A/Youkaryote',
            linkPos: 'projects_link_r'
        },
        {
            background: 'bcnf_bg',
            descriptionPos:'projects_description_l',
            imageLeft: 'hidden',
            imageRight: '',
            title: 'BCNF VISUALIZER',
            description: `Aid other students learning database design visualize breaking
                          an abstract relation into Boys-Codde Normal Form.`,
            technology: [{name: 'Javascript'}, {name: 'HTML & CSS'}],
            link: 'https://github.com/Ireoluwa-A/Youkaryote',
            linkPos: 'projects_link_l'
        }
    ])
    
    return (
        <section name='projects' className='projects_container'>
            {/* Title */}
            {/* Entry bounding checks if we scrolled from above */}
            <div ref={projectHeader} className={`projects_header ${projectHeaderVisible && (entry.boundingClientRect.y >= entry.rootBounds.y) ? 'animate-fade_in_left' : ''}`} >
                <h1 className='text-4xl tracking-wider font-WorkSans'>My</h1>
                <h1 className='text-4xl tracking-wider font-WorkSans'>Projects</h1>
                <div className='divider'></div>
            </div>

            {/* All projects */}
            {/* <ProjectBox proj={projBoxes[0]}/> */}
            <div className='projects_body'>
                {projBoxes.map((proj,index)=>{
                    return(
                        <ProjectBox key={index} proj={proj}/>
                    )})
                }
            </div>
        </section>
    )
}
export default Projects