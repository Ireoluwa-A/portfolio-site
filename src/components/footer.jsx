import React from 'react'

import "../styles/general.css";
import "../styles/footer.css";

import {FaRegCopyright} from "react-icons/fa";
import {FaGithub} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id='footer' name='footer' className='footer_container'>
            <div className='flex flex-row mx-auto tracking-wider' > 
                <FaRegCopyright className='mt-[2px] md:w-[15px] md:h-[15px]'></FaRegCopyright> 
                <p className='pl-[5px]'>IRE ALARAPE 2023</p>
            </div>   
            <div className='flex flex-row mx-auto tracking-wider'> 
                <div className='footer_link' >
                    <a className='flex flex-row'target='_blank' href='https://github.com/Ireoluwa-A/portfolio-site'>
                        <p>BUILT FROM SCRATCH </p>
                        <FaGithub className='md:w-[15px] md:h-[15px] mt-[3px] md:mt-[1px] ml-[4px]'></FaGithub>
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer