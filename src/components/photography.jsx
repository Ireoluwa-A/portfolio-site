import React from 'react'


import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import "../styles/photography.css";

// import GALLERY from '../assets/gallery/gallery.js';
import Img1 from '../assets/gallery/1.jpg';
import Img2 from '../assets/gallery/2.jpg';
import Img3 from '../assets/gallery/3.jpg';
import Img4 from '../assets/gallery/4.jpg';
import Img5 from '../assets/gallery/5.jpg';
import Img6 from '../assets/gallery/6.jpg';
import Img7 from '../assets/gallery/7.jpg';
import Img8 from '../assets/gallery/8.jpg';
import Img9 from '../assets/gallery/9.jpg';
import Img10 from '../assets/gallery/10.jpg';
import Img11 from '../assets/gallery/11.jpg';
import Img12 from '../assets/gallery/12.jpg';
import Img13 from '../assets/gallery/13.jpg';



const Photography = () => {

    let data1 = [
        {id: 1, imgSrc: Img1, name: 'Constantine Westerink', date: 'August 2021'},
        {id: 2, imgSrc: Img2},
        {id: 7, imgSrc: Img7},
        {id: 10, imgSrc: Img10},
        // {id: 15, Img11}
    ]
    let data2 = [
        {id: 3, imgSrc: Img3, name: 'Tyrece Jeffrey', date: 'October 2022'},
        {id: 4, imgSrc: Img4, name: 'Josephine Kim', date: 'September 2021'},
        {id: 11, imgSrc: Img11},
        {id: 13, imgSrc: Img13, name:'Peach Tree Rascals', date: 'October 2022'}
    ]
    let data3 = [
        {id: 5, imgSrc: Img5, name: 'Ire Ayoola', date: 'June 2019'},
        {id: 6, imgSrc: Img6, name: 'Kandace Pewee', date: 'July 2021'},
        {id: 9, imgSrc: Img9, name: 'Christelle Akanashenge', date: 'July 2021'},
        {id: 12, imgSrc: Img12, name: 'CMU', date: 'October 2022'}
    ]

    
    return (
        <div id='photography' name='photography' className='photography_container'>  
         
            <section className='gallery-wrapper w-full h-screen'>
                
                <p className='gallery-title flex text-[30px] font-bold animate-fade_in_left'>
                    FEATURED
                </p>
                    <div className='w-full h-full gallery-content animate-fade_in_right'>
                        <div className="flex flex-col md:flex-row justify-between animate-fade_in_right">
                            <div className="dream w-full md:w-[32.5%]">
                                {data1.map((item,index)=>{
                                return(
                                    <div key={index} className='gallery-box'>
                                        <LazyLoadImage effect="blur" src={item.imgSrc}/> 
                                        <div className='gallery-description'>
                                            <h2>{item.name}</h2>
                                            <h3>{item.date}</h3>
                                        </div>
                                    </div>
                                ) 
                                })}
                            </div>
                            <div className="dream w-full md:w-[32.5%]">
                                {data2.map((item,index)=>{
                                return(
                                    <div key={index} className='gallery-box'>
                                        <LazyLoadImage effect="blur"  src={item.imgSrc}/> 
                                        <div className='gallery-description'>
                                            <h2>{item.name}</h2>
                                            <h3>{item.date}</h3>
                                        </div>
                                    </div>
                                )
                                })}
                            </div>
                            <div className="dream w-full md:w-[32.5%]">
                                {data3.map((item,index)=>{
                                return(
                                    <div key={index} className='gallery-box'>
                                        <LazyLoadImage effect="blur" src={item.imgSrc}/> 
                                        <div className='gallery-description'>
                                            <h2>{item.name}</h2>
                                            <h3>{item.date}</h3>
                                        </div>
                                    </div>  
                                )
                                })}
                            </div>
                         </div>
                </div> 
            </section>


            {/* <div className='w-full h-screen bg-[#ece8e3]' >
            
            </div> */}
        </div>


    )

}

export default Photography