import React, {useState} from 'react'

import "../styles/general.css";
import "../styles/footer.css";

import {FaRegCopyright} from "react-icons/fa";

const Footer = () => {
    const [swatch1Animated, setSwatch1Animated] = useState(false)
    const [swatch2Animated, setSwatch2Animated] = useState(false)
    return (

        <footer name='footer' className='footer_container'>

            <div className='swatch_container drop-shadow-lg'
            onMouseEnter={() => setSwatch1Animated(() => true)}
            onAnimationEnd={() => setSwatch1Animated(() => false)}
            >
                <div className={`swatch top_swatch ${swatch1Animated ? 'swatch_animated': ''}`}>
                    <div className='circle'></div>
                   <p className='text-white font-Nunito text-[15px]'>Contact me!</p>

                </div>
                <div className='swatch hidden_swatch'>
                    <div className='circle'></div>
                    {/* <div> */}
                        <p className='text-white font-Nunito text-[15px]'>Irealarape@gmail.com</p>
                    {/* </div> */}
                   
                </div>
            </div>
            
            <div className='swatch_container drop-shadow-lg'
            onMouseEnter={() => setSwatch2Animated(() => true)}
            onAnimationEnd={() => setSwatch2Animated(() => false)}
            >
                <div className={`swatch top_swatch ${swatch2Animated ? 'swatch_animated': ''}`}>
                    <div className='circle'></div>
                    <p className='text-white font-Nunito text-[14px]'>Built from scratch in React</p>
                </div>
                <div className='swatch hidden_swatch flex-row'>
                    <div className='circle'></div>
                    {/* <div> */}  
                        <p className='text-white mr-[50px] font-Nunito text-[15px] text-left flex '><FaRegCopyright className='text-white mt-[5px] mr-[5px]'></FaRegCopyright>  Ire Alarape 2022</p>
                    {/* </div> */}
                   
                </div>
            </div>

        </footer>


    )
}
export default Footer