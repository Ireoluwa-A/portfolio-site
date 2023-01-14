import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import GalleryCol from './gallerycol';
import GalleryInfo from '../../data/galleryinfo.js'; 

import "../../styles/photography.css";

const Photography = () => {

    return (
        <div id='photography' name='photography' className='photography_container'>
            {/* FEATURED GALLERY  */}
            <section className='gallery-wrapper'>
                <p className='gallery-title flex text-[30px] font-bold animate-fade_in_left'>
                    FEATURED
                </p>
                <div className='w-full h-full gallery-content animate-fade_in_right'>
                    <div className="flex flex-col md:flex-row justify-between animate-fade_in_right">
                        {GalleryInfo.map((colInfo, index) => {
                            return (
                            <GalleryCol key={index} colInfo={colInfo}/> 
                            )
                        })}
                    </div>
                </div>
            </section>
            
            {/* TODO: GENERAL PICS */}
            <section>

            </section>
            

        </div>
    )
}

export default Photography