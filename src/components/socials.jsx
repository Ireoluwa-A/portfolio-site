
import React from 'react'

// import "../styles/general.css";
import "../styles/socials.css";

import {FaGithub,FaInstagram,FaLinkedinIn} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'

const Socials = () => {

    return (
        <div className='hidden md:flex '>
            <div className='socials_container' >
                <a className='social_btn' target="_blank" href='https://github.com/Ireoluwa-A'><FaGithub className='social_icon'></FaGithub></a>
                <a target="_blank"  href='https://www.linkedin.com/in/ire-alarape/'><FaLinkedinIn className='social_icon'></FaLinkedinIn></a>
                <a target="_blank"  href='https://github.com/Ireoluwa-A'><FaInstagram className='social_icon'></FaInstagram></a>
                <a target="_blank"  href='mailto:irealarape@gmail.com'><HiOutlineMail className='social_icon'></HiOutlineMail></a>
                <div className='socials_line'></div>
                {/* <img className='leaves'src={leaves}/> */}
            </div>
        </div>
    )
}
export default Socials

