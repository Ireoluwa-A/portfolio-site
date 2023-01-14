import React from 'react';
import LazyImg from './lazyimg';

// import "../../styles/photography.css";

function GalleryCol ({colInfo}) {
    return (  
        <div className="dream w-full md:w-[32.5%]">
            {colInfo.map((imgInfo,index)=>{
            return(
                <div key={index} className='gallery-box'>
                    {/* <LazyLoadImage height='auto' width='60vw' src={imgInfo.imgSrc} effect='blur'/> */}
                    <LazyImg imgSrc={imgInfo.imgSrc} imgAlt={imgInfo.imgAlt}/>
                    <div className='gallery-description'>
                        <h2>{imgInfo.name}</h2>
                        <h3>{imgInfo.date}</h3>
                    </div>
                </div>
            )})}
        </div>
    );
}

export default GalleryCol ;