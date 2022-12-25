import React, {useRef, useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer';

import "../styles/general.css";
import "../styles/projects.css";

const Projects = () => {

    const {ref: projectHeader, inView: projectHeaderVisible} = useInView()
    const {ref: proj1, inView: proj1Visible} = useInView()
    const {ref: proj2, inView: proj2Visible} = useInView()
    const {ref: proj3, inView: proj3Visible} = useInView()
    const {ref: proj4, inView: proj4Visible} = useInView()
    const {ref: proj5, inView: proj5Visible} = useInView()

    return (
        <section name='projects' className='projects_container'>
            {/* Title */}
            <div ref={projectHeader} className={`projects_header ${projectHeaderVisible ? 'animate-fade_in_left' : ''}`} >
                <h1 className='text-4xl tracking-wider font-WorkSans'>My</h1>
                <h1 className='text-4xl tracking-wider font-WorkSans'>Projects</h1>
                <div className='divider'></div>
            </div>

            {/* All projects */}
            <div className='projects_body'>
                <div ref={proj1} className={`projects_box ${proj1Visible ? 'animate-fade_in_right' : ''}`}>
                    <div className='projects_image proj_bg youkaryote_bg'>
                    </div>
                    <div className='projects_description projects_description_r'>
                        <h1 className='font-WorkSans text-[25px]'>YOUKARYOTE</h1>
                        <div className='projects_blurb drop-shadow-lg'>
                            <p className='font-Lato text-sm mr-[20px] text-[#2d2d2d]'>
                                To the fans of Civ 6 and Cellular Biology - an RTS game where you
                                micromanage your cell, produce ATP, perform meitosis, 
                                and expand until you conquer the map.
                                <span className='text-sm text-right'> (porting to Unity)</span>
                            </p>
                           
                        </div>
                        <div className='projects_tech font-Lato'>
                            <span>Python</span>
                            <span>CMUGraphics Library</span>
                            <span>Unity</span>
                            <span>C#</span>
                        </div>
                    </div>
                </div>

                <div ref={proj2} className={`projects_box ${proj2Visible ? 'animate-fade_in_right' : ''}`}>
                    <div className='projects_description projects_description_l'>
                        <h1 className='font-WorkSans text-[25px]'>EDE</h1>
                        <div className='projects_blurb drop-shadow-lg'>
                            <p className='font-Lato text-sm mr-[20px] text-[#2d2d2d]'>
                                Language Learning schedule organizer
                            </p>
                        </div>
                        <div className='projects_tech font-Lato'>
                            <span>Javascript</span>
                            <span>Flask</span>
                            <span>SQL</span>
                            <span>HTML/CSS</span>
                        </div>
                    </div>

                    <div className='projects_image proj_bg ede_bg'>
                    </div>
                </div>


                <div ref={proj3} className={`projects_box ${proj3Visible ? 'animate-fade_in_right' : ''}`}>
                    <div className='projects_image proj_bg sentimental_bg'>
                    </div>
                    <div className='projects_description projects_description_r'>
                        <h1 className='font-WorkSans text-[27px]'>THE C0 VIRTUAL MACHINE</h1>
                        <div className='projects_blurb drop-shadow-lg'>
                            <p className='font-Lato text-sm mr-[20px] text-[#2d2d2d]'>

                            </p>
                        </div>
                        <div className='projects_tech font-Lato'>
                            <span>C</span>
                        </div>
                    </div>
                </div>

                <div ref={proj4} className={`projects_box ${proj4Visible ? 'animate-fade_in_right' : ''}`}>
                    <div className='projects_description projects_description_l'>
                        <h1 className='font-WorkSans text-[25px]'>BCNF VISUALIZER</h1>
                        <div className='projects_blurb drop-shadow-lg'>
                            <p className='font-Lato text-sm mr-[20px] text-[#2d2d2d]'>
                                Aid other students learning database design visualize breaking
                                an abstract relation into Boys-Codde Normal Form.
                            </p>
                        </div>
                        <div className='projects_tech font-Lato'>
                            <span>Javascript</span>
                            <span>HTML</span>
                            <span>CSS</span>
                        </div>
                    </div>

                    <div className='projects_image proj_bg bcnf_bg'>
                    </div>
                </div>



                {/* <div ref={proj5} className={`projects_box ${proj5Visible ? 'animate-fade_in_right' : ''}`}>
                    <div className='projects_image proj_bg bcnf_bg'>
                    </div>
                    <div className='projects_description projects_description_r'>
                        <h1 className='font-WorkSans text-[30px]'>SENTIMENTAL ANALYSIS</h1>
                        <div className='projects_blurb drop-shadow-lg'>
                            <p className='font-Lato text-sm mr-[20px] text-[#2d2d2d]'>
                                Web app to determine overall media sentiment towards individual. Scrapes twitter, 
                                youtube and uses ML to classify sentiment.
                            </p>
                        </div>
                        <div className='projects_tech font-Lato'>
                            <span>PyTorch</span>
                            <span>Jupyter</span>
                            <span></span>
                        </div>
                    </div>
                </div> */}


            </div>
        </section>
    )
}
export default Projects