import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';

import {BsFillPersonLinesFill} from 'react-icons/bs'

import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";

// import "../styles/general.css";
import "../styles/navbar.css";
import resume from "../assets/resume.pdf";

// import {Link} from 'react-scroll' 


const Navbar = () => {
    const [nav,setNav] = useState(false)
    const toggleNav = () => setNav(!nav)

    const [show, setShow] = useState(true)
    // store scrollY to make navbar reappear on scroll up
    var oldScrollY = window.scrollY;
    const controlNavbar = () => {
        setShow(((window.scrollY <= 400)) || (oldScrollY > window.scrollY))
        oldScrollY = window.scrollY
    }
    useEffect(() => {
        window.addEventListener('scroll', 
        controlNavbar)
        return () => {
            window.removeEventListener('scroll',
            controlNavbar)
        }
    },[])
    
    
    const [lock, setLock] = useState(false);
    lock?document.body.style.overflow = "hidden":document.body.style.overflow = "auto";
    // lock?document.getElementById("name").style.filter = "grayscale(100%)":document.getElementById("name").style.filter = 'auto';
    const toggleScrollLock = () => setLock(!lock);
    // lock?document.getElementById("#home").style.filter = "blur(1px)":document.getElementById("name").style.filter = 'auto';

    waitForElementToDisplay("home",function(){lock?document.getElementById("home").style.filter = "blur(10px)":document.getElementById("home").style.filter = '';},1000,9000);
    waitForElementToDisplay("photography",function(){lock?document.getElementById("photography").style.filter = "blur(10px)":document.getElementById("photography").style.filter = '';},1000,9000);

    function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
    var startTimeInMs = Date.now();
    (function loopSearch() {
        if (document.getElementById(selector) != null) {
        callback();
        return;
        }
        else {
        setTimeout(function () {
            if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
            return;
            loopSearch();
        }, checkFrequencyInMs);
        }
    })();
    }

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
            {/* <div className='hidden md:flex md:nav'> */}
                <ul className='hidden md:flex md:nav pr-[7vw] text-[14px]'> 
                    <li>
                        <Link className='font-WorkSans' to='/#projects'>
                            PROJECTS
                        </Link>
                    </li>
                    <li>
                        <NavLink className='font-WorkSans' to='/photography' activeClassName="active-link">
                            PHOTOGRAPHY
                        </NavLink> 
                    </li>
                    <li>
                        <Link className='font-WorkSans' to='/#about'>ABOUT</Link>
                    </li>
                    <li>
                        <a className='font-WorkSans' target="_blank">
                            RESUME
                        </a>
                    </li>
                </ul>


            {/* </div> */}


            <div onClick={handleClick} 
                        className='md:hidden pr-[7%] flex z-20'>
                            {!nav ? <FaBars /> : <FaTimes />}
                </div>

            {/* <div className='md:hidden flex w-[60%] h-screen'> */}

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
            
            {/* </div> */}




        </header>

        
        
    )
}

export default Navbar