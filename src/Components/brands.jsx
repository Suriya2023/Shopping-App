import React, { useEffect } from 'react'
import './brands.css'
import './Smatshop.css'

function brands(props) {

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const trackRef = React.useRef(null);

  // Convert to arrow functions
  const updateCarousel = () => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.children[0].getBoundingClientRect().width;
      trackRef.current.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  };

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (trackRef.current && currentIndex < trackRef.current.children.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Add effect for resize handler
  React.useEffect(() => {
    window.addEventListener('resize', updateCarousel);
    return () => window.removeEventListener('resize', updateCarousel);
  }, []);

  // Update carousel when currentIndex changes
  React.useEffect(() => {
    updateCarousel();
  }, [currentIndex]);


  useEffect(() => {
    let elements = document.querySelectorAll(".localll")
    let handleScroll = () => {
      let viewportHeight = window.innerHeight;
      elements.forEach(element => {
        let boundingRect = element.getBoundingClientRect().top;
        if (boundingRect < viewportHeight) {
          element.classList.add('fire');
        } else {
          element.classList.remove('fire');
        }
      })
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })



  useEffect(() => {
    let elements = document.querySelectorAll(".branded-heading")
    let handleScroll = () => {
      let viewportHeight = window.innerWidth;
      elements.forEach(element => {
        let boundingRect = element.getBoundingClientRect().top;
        if (boundingRect < viewportHeight) {
          element.classList.add('fire');
        } else {
          element.classList.remove('fire');
        }
      })
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })



  return (
    <div>
      <div className='branded-heading'>
        <h1>Best Brands of the Week</h1>
      </div>
      <br />

      <div className={`carouseled ${props.mode}`}>
        <button className="carouseled-btn left" onClick={handleLeftClick}>&#8249;</button>
        <button className="carouseled-btn right" onClick={handleRightClick}>&#8250;</button>

        <div className="carouseled-track" ref={trackRef}>
          <div className={`carouseled-card localll color-${props.mode}`}>
            <img className='' src="https://assets.tatacliq.com/medias/sys_master/images/62926918844446.jpg" alt="Titan" />
            <h3>Titan</h3>
            <p> Up to 50% Off</p>
          </div>
          <div className={`carouseled-card localll color-${props.mode}`}>
            <img className='' src="https://assets.tatacliq.com/medias/sys_master/images/62926918778910.jpg" alt="Puma" />
            <h3>Puma</h3>
            <p>Min 50% + 10% Off</p>
          </div>
          <div className={`carouseled-card localll color-${props.mode}`}>
            <img className='' src="https://assets.tatacliq.com/medias/sys_master/images/62926918582302.jpg" alt="Libas" />
            <h3>Libas</h3>
            <p>Min 50% + 10% Off</p>
          </div>
          <div className={`carouseled-card localll color-${props.mode}`}>
            <img className='' src="https://assets.tatacliq.com/medias/sys_master/images/62926918909982.jpg" alt="Vero Moda" />
            <h3>Vero Moda</h3>
            <p>Min 30% + 20% Off</p>
          </div>

          <div className={`carouseled-card localll color-${props.mode}`}>
            <img className='' src="https://assets.tatacliq.com/medias/sys_master/images/62926918582302.jpg" alt="Vero Moda" />
            <h3>Vero Moda</h3>
            <p>Min 30% + 20% Off</p>
          </div>

          <div className={`carouseled-card localll color-${props.mode}`}>
            <img className='' src="https://assets.tatacliq.com/medias/sys_master/images/62926918647838.jpg" alt="Vero Moda" />
            <h3>Vero Moda</h3>
            <p>Min 30% + 20% Off</p>
          </div>


          <div className={`carouseled-card localll color-${props.mode}`}>
            <img className='' src="https://assets.tatacliq.com/medias/sys_master/images/62926918582302.jpg" alt="Vero Moda" />
            <h3>Vero Moda</h3>
            <p>Min 30% + 20% Off</p>
          </div>
        </div>
      </div>
      {/* <br /><br /><br /> */}

    </div>
  )
}

export default brands
