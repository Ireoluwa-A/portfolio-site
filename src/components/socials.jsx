
import React, {useState, useEffect} from 'react'

// import "../styles/general.css";
import "../styles/socials.css";

import {FaGithub,FaInstagram,FaLinkedinIn} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'

const Socials = () => {
    const [show, setShow] = useState(false)
    // Delay loading animation
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
            }, 800)
        })
        
    return (
        <div className='hidden md:flex '>
            <div className={`socials_container ${!show ? 'socials_container_hidden' : ''}`} >
                <a className='social_btn' target="_blank" href='https://github.com/Ireoluwa-A'><FaGithub className='social_icon'></FaGithub></a>
                <a target="_blank"  href='https://www.linkedin.com/in/ire-alarape/'><FaLinkedinIn className='social_icon'></FaLinkedinIn></a>
                <a target="_blank" ><FaInstagram className='social_icon'></FaInstagram></a>
                <a target="_blank"  href='mailto:irealarape@gmail.com'><HiOutlineMail className='social_icon'></HiOutlineMail></a>
                <div className='socials_line'></div>
                {/* <img className='leaves'src={leaves}/> */}
            </div>
        </div>
    )
}
export default Socials

