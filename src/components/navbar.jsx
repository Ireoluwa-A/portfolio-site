import React, {useState} from 'react'
import {FaBars, FaTimes, FaGitHub, FaLinkedin, FaRegistered} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

import { NavLink} from "react-router-dom";

import "../styles/navbar.css";
import {resume} from "../assets/resume.pdf";

import {Link} from 'react-scroll' 


const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    // const [navColor, setNavColor] = useState(['red'])

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-3 bg-[#ece8e3]
        text-black-300 tracking-[1px] z-10'>
             {/* Logo */}
            <div className='pl-[20%]'>
                <a className='font-bold font-sans text-xl cursor-pointer' href='/portfolio-site'>
                    I A
                </a>
            </div>

            {/* NAV Items */}
            <div className='nav'>
                <ul className='hidden md:flex pr-[100px] text-[14px]'> 
                    <li>
                        <Link href='/' to='projects' smooth={true} duration={500}>
                            PROJECTS
                            {/* Projects */}
                        </Link>
                    </li>

                    <li>
                        <NavLink to='/photography' activeClassName="active-link">
                            PHOTOGRAPHY
                            {/* Photography */}
                        </NavLink> 
                        {/* <a href='/photography' >
                            PHOTOGRAPHY
                        </a> */}
                    </li>

                    <li>
                        <Link to='about' smooth={true} duration={500}>
                            ABOUT
                            {/* About */}
                        </Link>
                    </li>

                    <li>
                        <a className='font-bold text-[#A3A86D]' href="/" target="_blank">
                            RESUME
                            {/* Resume */}
                        </a>
                    </li>

                </ul>

            </div>

            {/* Hamburger Menu */}
            <div onClick={handleClick} className='md:hidden pr-[5%] z-20'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu  */}
            <ul className={!nav ? 'hidden' : 'nav absolute top-0 z-1 left-0 w-full h-screen bg-[#ece8e3] flex flex-col justify-center items-center'} >
                <li>
                    <a href="/">
                        HOME
                        {/* Resume */}
                    </a>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={500}>
                        PROJECTS
                        {/* Projects */}
                    </Link>
                </li>
                <li>
                    <a href='/photography'>
                        PHOTOGRAPHY
                        {/* Photography */}
                    </a>
                </li>

                <li>
                    <Link to='about' smooth={true} duration={500}>
                        ABOUT
                        {/* About */}
                    </Link>
                </li>

                <li>
                    <a href="../assets/resume.pdf" target="_blank">
                        RESUME
                        {/* Resume */}
                    </a>
                </li>
            </ul>

            {/* <div className='flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center' >
                        <a className='flex justify-between items-center w-full href='/'>Linkedin</a>

                    </li>
                </ul>

            </div> */}

        </div>

        
        
    )
}

export default Navbar