import React, {useState, useRef, useEffect} from 'react'

// import "../styles/general.css";
import "../styles/projects.css";

import {useInView} from 'react-intersection-observer';

import {FaGithub} from 'react-icons/fa';


const ProjectBox = (props) => {
    const proj = props.proj;
    const scrollingFromAbove = props.scrollingFunc;

    const {ref: projRef, inView: projVisible, entry} = useInView()

    return (
        <div ref={projRef} 
            className={`projects_box  
            ${projVisible && (scrollingFromAbove(entry)) ?
             'animate-fade_in_left' : ''}`}
        >
            <div className={`${proj.imageLeft} projects_image proj_bg ${proj.background}`}>
            </div>

            <div className={`projects_description ${proj.descriptionPos}`}>
                <h1 className='font-bold font-WorkSans text-[30px]'>{proj.title}</h1>
                <div className='projects_blurb'>
                    <p className='font-Nunito text-[15px] text-[#5e5e5e]'>
                        {proj.description}
                    </p>
                </div>
                <div className='projects_tech font-Nunito text-white'>
                    {proj.technology.map((item,index)=>{
                        return(
                            <span key={index}>{item.name}</span>
                        )
                    })}
                </div>
                <div className={`projects_link ${proj.linkPos}`}>
                    <a target="_blank" href={proj.link}><FaGithub></FaGithub></a>
                </div>
                
            </div>

            <div className={`${proj.imageRight} projects_image proj_bg ${proj.background}`}>
            </div>

        </div>

    );
}

export default ProjectBox