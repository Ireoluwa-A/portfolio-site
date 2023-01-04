import React, {useState, useEffect} from 'react'
import {useInView} from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';

import "../styles/about.css";

const About_Icon = (props) => {
    const icon = props.icon;

    return (
        
        <div className='about_icon'>
            <div className={`about_language`}>
                <h2 className='font-WorkSans'>
                    {icon.language}
                </h2>
            </div>
            <div className={`about_flag ${icon.flag}`}>
            </div>
        </div>
    )
}
export default About_Icon