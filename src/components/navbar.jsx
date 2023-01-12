import React, {useState, useEffect} from 'react'
import {NavLink, Link} from "react-router-dom";

import {waitForElementToDisplay, useFuncDelay, useLockScroll} from '../utils/helper';

import "../styles/navbar.css";

import resume from "../assets/resume.pdf";
import {FaBars, FaTimes} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs'


const Navbar = () => {
    // Mobile vs desktop
    const [nav,setNav] = useState(false)
    const toggleNav = () => setNav(!nav)

    // Hidden vs shown
    const [show, setShow] = useState(false)
    // Delay loading animation
    useFuncDelay(setShow, true, 400);

    // store scrollY to make navbar reappear on scroll up
    var oldScrollY = window.scrollY;
    const controlNavbar = () => {
        setShow(((window.scrollY <= 400)) || (oldScrollY > window.scrollY))
        oldScrollY = window.scrollY
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll',
            controlNavbar)
        }
    },[])

    // Lock navbar + blur when locked
    const [lock, setLock] = useState(false);
    const toggleScrollLock = () => setLock(!lock);
    useLockScroll(lock)

    // Wait for main page element to exist so we can blur it
    function blurHome()
                {lock ?
                     document.getElementById("home").style.filter = "blur(10px)":
                     document.getElementById("home").style.filter = '';}
            
    function blurPhotography(){
                        lock?
                            document.getElementById("photography").style.filter = "blur(10px)":
                            document.getElementById("photography").style.filter = '';
                        }
    waitForElementToDisplay("home",blurHome,1000,9000);
    waitForElementToDisplay("photography",blurPhotography,1000,9000);


    const handleClick = () => {
        toggleNav();
        toggleScrollLock();
    }

    return (
        <header className={`nav-container ${!show && 'nav-container-hidden'}`}>

            <div className='logo'>
                <a href='/'> I A </a>
            </div>

            {/* NAV Items */}
            <ul className='hidden md:flex md:nav pr-[7vw] text-[14px]'> 
                <li>
                    <Link className='font-WorkSans nav_link' to='/#projects'>
                        PROJECTS
                    </Link>
                </li>
                <li>
                    <NavLink className='font-WorkSans nav_link' to='/photography' activeClassName="active-link">
                            PHOTOGRAPHY
                    </NavLink> 
                </li>
                <li>
                    <Link className='font-WorkSans nav_link' to='/#about'>
                        ABOUT
                    </Link> 
                </li>
                <li>
                    <a href={resume} className='font-WorkSans nav_link' target="_blank">
                        RESUME
                    </a>
                </li>
            </ul>

            {/* MOBILE NAV */}
            <div onClick={handleClick} 
                className='md:hidden pr-[7%] flex z-20'>
                    {!nav ? <FaBars /> : <FaTimes />}
            </div>
            <ul className={!nav ? 'nav_mobile_hidden' : 'nav_mobile'} >
                <li>
                    <a href="/">
                        HOME
                    </a>
                </li>
                <li>
                    <Link onClick={handleClick} to='/#projects'>
                        PROJECTS
                    </Link>
                </li>
                <li>
                    <NavLink onClick={handleClick} to='/photography'>
                        PHOTOGRAPHY
                    </NavLink> 
                </li>
                <li>
                    <Link onClick={handleClick} to='/#about'>
                        ABOUT
                    </Link>
                </li>
                <li>
                    <a href={resume} target="_blank">
                        RESUME
                    </a>
                </li>
            </ul>
            
        </header>
    )
}

export default Navbar