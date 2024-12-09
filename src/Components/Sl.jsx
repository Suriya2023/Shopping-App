"use client";
import React, { useState, useEffect } from 'react'
import { Carousel } from "flowbite-react";

import './sl.css'
function Sl(props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const updateSlider = () => {
        const slider = document.querySelector('.sliderr');
        if (slider) {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    };

    const prevSlide = () => {
        const slides = document.querySelectorAll('.slidee');
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        const slides = document.querySelectorAll('.slidee');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    useEffect(() => {
        updateSlider();
    }, [currentIndex]);

    return (
        <div className={`bg-${props.mode}`}>






          


            

 
    <div  id="default-carousel" className="h-96 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img src="https://assets.tatacliq.com/medias/sys_master/images/63053281656862.jpg" alt="..." />
        <img src="https://assets.tatacliq.com/medias/sys_master/images/63053281787934.jpg" alt="..." />
        <img src="https://assets.tatacliq.com/medias/sys_master/images/63053281525790.jpg" alt="..." />
        <img src="https://assets.tatacliq.com/medias/sys_master/images/63053281591326.jpg" alt="..." />
        <img src="https://assets.tatacliq.com/medias/sys_master/images/63053281919006.jpg" alt="..." />
        <img src="https://assets.tatacliq.com/medias/sys_master/images/63053281853470.jpg" alt="..." />
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733580692/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Dec/08122024/Desktop/HP_Rotating_TV_8Dec2024_xak1kj.jpg" alt="" />
        {/* <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733633311/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Dec/08122024/HP_Rotating_Monitor_8Dec2024_gbppz1.jpg" alt="..." /> */}
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733580692/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Dec/08122024/Desktop/HP_Rotating_Pixel_8Dec2024_dxmtjy.jpg" alt="" />

      </Carousel>
    </div>
  



            {/* mobile view */}


            {/* ... existing code ... */}
            <div className="slider-containerr">
                <div className="sliderr">
                    <div className="slidee" id='side'>
                    <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733633311/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Dec/08122024/HP_Rotating_Monitor_8Dec2024_gbppz1.jpg" alt="..." />

                    </div>
                    <div className="slidee" id='side1'>
                    <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733580691/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Dec/08122024/Desktop/HP_Rotating_MB_8Dec2024_xx7y1e.jpg" alt="..." />

                    </div>
                    <div className="slidee" id='side2'>
                    <img src="https://assets.tatacliq.com/medias/sys_master/images/63053281591326.jpg" alt="..." />

                    </div>
                    <div className="slidee" id='side3'>
                    <img src="https://assets.tatacliq.com/medias/sys_master/images/63053281919006.jpg" alt="..." />
                    </div>
                </div>
                <button className="prevv" onClick={prevSlide}>&#10094;</button>
                <button className="nextt" onClick={nextSlide}>&#10095;</button>
            </div>


        </div>
    )
}

export default Sl
