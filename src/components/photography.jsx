import React from 'react'
import "../styles/photography.css";

import Img1 from '../assets/gallery/1.jpg';
import Img2 from '../assets/gallery/2.jpg';
import Img3 from '../assets/gallery/3.jpg';
import Img4 from '../assets/gallery/4.jpg';
import Img5 from '../assets/gallery/5.jpg';
import Img6 from '../assets/gallery/6.jpg';
import Img7 from '../assets/gallery/7.jpg';
import Img8 from '../assets/gallery/8.jpg';
import Img9 from '../assets/gallery/9.jpg';


const Photography = () => {

    // let color = A3A86D;

    let data1 = [
        {id: 1, imgSrc: Img1},
        {id: 2, imgSrc: Img2},
        {id: 7, imgSrc: Img7}
    ]
    let data2 = [
        {id: 3, imgSrc: Img3},
        {id: 4, imgSrc: Img4}
    ]
    let data3 = [
        {id: 5, imgSrc: Img5},
        {id: 6, imgSrc: Img6},
        {id: 9, imgSrc: Img9}
    ]



    return (
        <div name='photography' className='bg-[#ece8e3] w-full h-max flex justify-center flex-col align-middle'>   
            <div className='gallery-wrapper w-full h-screen'>
                <p className='gallery-title flex text-[30px] font-bold animate-fade_in_left'>
                    FEATURED
                </p>
                {/* <div className='h-full flex gallery-border animate-fade_in_right'>
                </div> */}
                    <div className='w-full h-full gallery-content animate-fade_in_right'>
                        <div className="flex flex-col md:flex-row justify-between animate-fade_in_right">
                            <div class="dream w-full md:w-[32.5%]">
                                {data1.map((item,index)=>{
                                return(
                                    <img key={index} src={item.imgSrc}/>   
                                )
                                })}
                            </div>
                            <div class="dream w-full md:w-[32.5%]">
                                {data2.map((item,index)=>{
                                return(
                                    <img key={index} src={item.imgSrc}/>   
                                )
                                })}
                            </div>
                            <div class="dream w-full md:w-[32.5%]">
                                {data3.map((item,index)=>{
                                return(
                                    <img key={index} src={item.imgSrc}/>   
                                )
                                })}
                            </div>

                         </div>
                   
                </div> 
            </div>


            {/* <div className='w-full h-screen bg-[#ece8e3]' >
            
            </div> */}
        </div>


    )

}

export default Photography