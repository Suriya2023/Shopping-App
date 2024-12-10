import React, { useState } from 'react'
import './Exclusive.css'

function Exclusive(props) {
  const [currentSlide, setCurrentSlide] = useState(0);


  // Define brand logos in groups of 5
  const brands = [
    [
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682981/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/13_fbzbpw.png?tr=w-720",
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682981/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/12_hfsle3.png?tr=w-720",
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682981/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/12_hfsle3.png?tr=w-720",
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/7_uvvozm.png?tr=w-720",
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/6_cruwwo.png?tr=w-720"
    ],
    [
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/5_pjm9wd.png?tr=w-720",
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682981/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/11_tc1idk.png?tr=w-720",
      
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/4_wmg1qj.png?tr=w-720",
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/3_voajbz.png?tr=w-720",
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/14_xtc6jg.png?tr=w-720"
    ]




  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % brands.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + brands.length) % brands.length);
  };

  return (
    <div>
      <br />
      <section className={`exclusive-section bg-${props.mode}`}>
        <h1 className={`exclusive-heading text-${props.mode} p-4`}>Exclusively Curated For You</h1>
        {/* <h1 className={`exclusive-heading text-${props.mode} p-4`}>  */}
    {/* </h1> */}
        <div className='exclusive-container'>
          <button className="slider-btn prev" onClick={prevSlide}>❮</button>
          <div className='exclusive'>
            <div
              className="slide-wrapper"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {brands[currentSlide].map((brand, index) => (
                <div key={index} className="brand-item">
                  <img src={brand} alt={`Brand ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <button className="slider-btn next" onClick={nextSlide}>❯</button>
        </div>

        <div className="slider-indicators">
          {brands.map((_, index) => (
            <span
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>
      {/* <br /> */}
    </div>
  )
}

export default Exclusive
