import React, {useState, useEffect, useRef} from 'react';

import "../../styles/home.css";

import { TypeAnimation } from 'react-type-animation';

const Card = (props) => {

    const browser = props.browser;
    const incompatibleBrowser = (browser == 'Safari');

    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    // Animate cursor
    const [cursorAnimated, setCursorAnimated] = useState(false);

    useEffect(()=> {
        window.addEventListener('mousemove',(e) => {
            setCursorX(e.pageX);
            setCursorY(e.pageY);
        })
        return window.removeEventListener('mousemove',(e) => {
            setCursorX(e.pageX);
            setCursorY(e.pageY);
        })
    },[])

    return ( 
        <>  
            <div className={`cursor ${cursorAnimated ? 'cursor_active' : 'cursor_fade'}`}
            style={{
                left: cursorX + 'px',
                top: cursorY + 'px'
            }}
            ></div>

            <div className={`intro_card ${incompatibleBrowser ? '' : 'drop-shadow-lg'} animate-fade_in_right`}>
                {/* <div className='tape1'></div> */}

                <div className='card_screen'
                onMouseEnter={function(){setCursorAnimated(true)}}
                onMouseLeave={function(){setCursorAnimated(false)}}
                >  
                    <a className={`cam_animation`} href='/#/photography' target="_blank"></a>
                </div>

                <div className='intro_card_content'>
                    <TypeAnimation className='font-sans text-sm font-bold pl-[10px] tracking-wider md:text-xl'
                        sequence={[
                            'SOFTWARE ENGINEER',
                            15000,
                            'PHOTOGRAPHER',
                            8000, 
                            'POLYGLOT', 
                            7000,
                            () => {
                            }
                        ]}
                        wrapper="p"
                        cursor={true}
                        repeat={Infinity}    
                    />
                    {/* <p className='font-sans font-bold max-w-[1/4] -translate-y-[1px] text-[13px] pl-[10px] pt-[-10px] mt-[-2px] pb-[5px] 
                                tracking-wider text-[#6e6e6e]'>#7C9AB9</p> */}
                    <p className='font-sans max-w-[1/4] text-xs pl-[10px] 
                                tracking-wider pb-[10px]'>
                        Carnegie Mellon student, passionate about tech, language, photography, and plantains.
                    </p>  
                    
                </div>
                {/* <div className='tape2'></div> */}
            </div> 
        </>
     );
     
}
export default Card;
 
