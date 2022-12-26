import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes, FaGitHub, FaLinkedin, FaRegistered} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

import {NavLink} from "react-router-dom";

// import "../styles/general.css";
import "../styles/navbar.css";
import resume from "../assets/resume.pdf";

import {Link} from 'react-scroll' 


const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const [show, setShow] = useState(true)
    const controlNavbar = () => {
        setShow(!(window.scrollY > 350))
    }
    useEffect(() => {
        window.addEventListener('scroll',
        controlNavbar)
        return () => {
            window.removeEventListener('scroll',
            controlNavbar)
        }
    },[])

    return (
        <div className={`nav-container ${!show && 'nav-container-hidden'}`}>
            <div className='logo'>
                <a href='/'> I A </a>
            </div>

            {/* NAV Items */}
            <div className='nav'>
                <ul className='hidden md:flex pr-[7vw] text-[14px]'> 
                    <li>
                        <Link href='/' to='projects' smooth={true} duration={900}>
                            PROJECTS
                            {/* Projects */}
                        </Link>
                    </li>
                    <li>
                        <NavLink to='/photography' activeClassName="active-link">
                            PHOTOGRAPHY
                            {/* Photography */}
                        </NavLink> 
                    </li>
                    <li>
                        <Link to='about' smooth={true} duration={900}>
                            ABOUT
                            {/* About */}
                        </Link>
                    </li>
                    <li>
                        <a className='font-bold text-[#A3A86D]' href={resume} target="_blank">
                            RESUME
                            {/* Resume */}
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile menu  */}
            {/* Hamburger*/}
            <div onClick={handleClick} className='md:hidden pr-[5%] z-20'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            <ul className={!nav ? 'hidden' : 'nav animate-fade-in-right absolute top-0 z-1 left-0 w-full h-screen bg-[#ece8e3] flex flex-col justify-center items-center'} >
                <li>
                    <a href="/">
                        HOME
                    </a>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={900}>
                        PROJECTS
                    </Link>
                </li>
                <li>
                    <NavLink to='/photography' activeClassName="active-link">
                        PHOTOGRAPHY
                    </NavLink> 
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        ABOUT
                    </Link>
                </li>
                <li>
                    <a className='font-bold text-[#A3A86D]' href={resume} target="_blank">
                        RESUME
                    </a>
                </li>
            </ul>

        </div>

        
        
    )
}

export default Navbar