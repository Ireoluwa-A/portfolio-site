import React, {useState, useRef, useEffect} from 'react'
import {useInView} from 'react-intersection-observer';

// import "../styles/general.css";
import "../styles/projects.css";

import {FaGithub} from 'react-icons/fa';


const ProjectBox = (props) => {
    const proj = props.proj;

    const {ref: projRef, inView: projVisible, entry} = useInView({
        threshold: 0.4,
        triggerOnce: true
    })

    return (
        <div ref={projRef} 
            className={`projects_box fade_in_up
            ${projVisible ? 'fade_in_appear' : ''}`}
        >
            <div className={`${proj.imageLeft} projects_image proj_bg ${proj.background}`}></div>

            <div className={`projects_description ${proj.descriptionPos}`}>
                <h1 className='font-bold font-WorkSans'>{proj.title}</h1>
                <div className='projects_blurb'>
                    <p className='font-Nunito'>
                        {proj.description}
                    </p>
                </div>
                <ul className='projects_tech font-Nunito text-white'>
                    {proj.technology.map((item,index)=>{
                        return(
                            <li key={index}>{item.name}</li>
                        )
                    })}
                </ul>
                <div className={`projects_link ${proj.linkPos}`}>
                    <a target="_blank" href={proj.link}>
                        <FaGithub className='w-[18px] h-[18px]'></FaGithub>
                    </a>
                </div>
                
            </div>

            <div className={`${proj.imageRight} projects_image proj_bg ${proj.background}`}>
            </div>

        </div>

    );
}

export default ProjectBox