import React, { useRef, useState, useEffect } from 'react';
import './Slider.css';
import './Smatshop.css'

function Slider(props) {
    const carouselRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollCarousel = (direction) => {
        const carousel = carouselRef.current;
        const itemWidth = carousel.querySelector('.carousel-item').offsetWidth + 15;
        const newPosition = scrollPosition + direction * itemWidth;

        setScrollPosition(newPosition);
        carousel.style.transform = `translateX(${-newPosition}px)`;
    };

    useEffect(() => {
        let elements = document.querySelectorAll(".carouselitemm")
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
        let elements = document.querySelectorAll(".Magictxt")
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



    return (
        <div className='mxwidth'>
            {/* <div className='best-deals'> */}


            <h1 className="Magictxt" style={{ fontWeight: '600', textAlign: 'center', cursor: 'pointer', hover: 'underline', fontFamily: 'Times New Roman, Times, serif', fontSize: '2rem' }}>
                <span  style={{ fontWeight: '600', textAlign: 'center', cursor: 'pointer', hover: 'underline', fontFamily: 'Times New Roman, Times, serif', fontSize: '2rem' }} id='LastWord' className={`color-${props.mode}`}  > Home Care Tools Up to 20% off. <span id='LastWordChange'>.....</span>  </span>
            </h1>

            {/* </div> */}

            <div className={`carousel-container `}>
                <div
                    className={`arrow arrow-left ${props.mode === 'black' ? 'color-white' : 'color-black'}`}
                    onClick={() => scrollCarousel(-1)}
                >
                    <i className="fa-solid fa-arrow-left" style={{ color: props.mode === 'black' ? 'white' : 'black' }} ></i>
                </div>
                <div className={`carousel bg-${props.mode}`} id="carousel" ref={carouselRef}>
                    <div className="carousel-item fire">
                        <span className="discount-badge">40% OFF</span>
                        <img className='carouselitemm' src="https://www.retailmenot.com/imagery/product_offers/01je28zgb5ph43kzjcr0brqacq.fit_limit.quality_80.size_250x250.v1733135435.jpg.webp" alt="Apple Watch" />
                        <p className="product-title">Apple Watch SE</p>
                        <button className="check-price">Check price</button>
                    </div>
                    <div className="carousel-item">
                        <span className="discount-badge">65% OFF</span>
                        <img className='carouselitemm' src="https://www.retailmenot.com/imagery/product_offers/01je2e6s0956x5sev8c7stm4zk.fit_limit.quality_80.size_250x250.v1733135435.jpg.webp" alt="Dyson Airwrap" />
                        <p className="product-title">Dyson Airwrap</p>
                        <button className="check-price">Check price</button>
                    </div>
                    <div className="carousel-item">
                        <span className="discount-badge">46% OFF</span>
                        <img className='carouselitemm' src="https://www.retailmenot.com/imagery/product_offers/01jdw1v9x82chqyv7n3hh3278v.fit_limit.quality_80.size_250x250.v1733135435.jpg.webp" alt="Dyson Vacuum" />
                        <p className="product-title">Dyson V8 Vacuum</p>
                        <button className="check-price">Check price</button>
                    </div>
                    <div className="carousel-item">
                        <span className="discount-badge">42% OFF</span>
                        <img className='carouselitemm' src="https://www.retailmenot.com/imagery/product_offers/01jdw1v6fx9548ske7nmsh9gah.fit_limit.quality_80.size_250x250.v1733135433.jpg.webp" alt="Apple iPad" />
                        <p className="product-title">Apple iPad</p>
                        <button className="check-price">Check price</button>
                    </div>
                    <div className="carousel-item">
                        <span className="discount-badge">42% OFF</span>
                        <img className='carouselitemm' src="https://www.retailmenot.com/imagery/product_offers/01jdw1vawfb3xvx57cb57edx6t.fit_limit.quality_80.size_250x250.v1733135436.jpg.webp" alt="Apple iPad" />
                        <p className="product-title">Apple iPad</p>
                        <button className="check-price">Check price</button>
                    </div>
                    <div className="carousel-item">
                        <span className="discount-badge">42% OFF</span>
                        <img className='carouselitemm' src="https://i5.walmartimages.com/seo/Restored-Apple-iPad-Air-4-A2324-WiFi-Cellular-Unlocked-64GB-Space-Gray-Refurbished_8d9cf185-075e-438b-a6aa-58c66bb1a35c.7b7834d5e6211af78c1fb81d2bb3e57a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" alt="Apple iPad" />
                        <p className="product-title">Apple iPad</p>
                        <button className="check-price">Check price</button>
                    </div>
                    <div className="carousel-item">
                        <span className="discount-badge">40% OFF</span>
                        <img className='carouselitemm' src="https://www.retailmenot.com/imagery/product_offers/01je28zgb5ph43kzjcr0brqacq.fit_limit.quality_80.size_250x250.v1733135435.jpg.webp" alt="Apple Watch" />
                        <p className="product-title">Apple Watch SE</p>
                        <button className="check-price">Check price</button>
                    </div>
                    <div className="carousel-item">
                        <span className="discount-badge">65% OFF</span>
                        <img className='carouselitemm' src="https://www.retailmenot.com/imagery/product_offers/01je2e6s0956x5sev8c7stm4zk.fit_limit.quality_80.size_250x250.v1733135435.jpg.webp" alt="Dyson Airwrap" />
                        <p className="product-title">Dyson Airwrap</p>
                        <button className="check-price">Check price</button>
                    </div>
                    <div className="carousel-item">
                        <span className="discount-badge">46% OFF</span>
                        <img className='carouselitemm' src="https://www.retailmenot.com/imagery/product_offers/01jdw1v9x82chqyv7n3hh3278v.fit_limit.quality_80.size_250x250.v1733135435.jpg.webp" alt="Dyson Vacuum" />
                        <p className="product-title">Dyson V8 Vacuum</p>
                        <button className="check-price">Check price</button>
                    </div>
                    <div className="carousel-item">
                        <span className="discount-badge">42% OFF</span>
                        <img className='carouselitemm' src="https://www.retailmenot.com/imagery/product_offers/01jdw1v6fx9548ske7nmsh9gah.fit_limit.quality_80.size_250x250.v1733135433.jpg.webp" alt="Apple iPad" />
                        <p className="product-title">Apple iPad</p>
                        <button className="check-price">Check price</button>
                    </div>
                    <div className="carousel-item">
                        <span className="discount-badge">42% OFF</span>
                        <img className='carouselitemm' src="https://www.retailmenot.com/imagery/product_offers/01jdw1vawfb3xvx57cb57edx6t.fit_limit.quality_80.size_250x250.v1733135436.jpg.webp" alt="Apple iPad" />
                        <p className="product-title">Apple iPad</p>
                        <button className="check-price">Check price</button>
                    </div>
                    <div className="carousel-item">
                        <span className="discount-badge">42% OFF</span>
                        <img className='carouselitemm' src="https://i5.walmartimages.com/seo/Restored-Apple-iPad-Air-4-A2324-WiFi-Cellular-Unlocked-64GB-Space-Gray-Refurbished_8d9cf185-075e-438b-a6aa-58c66bb1a35c.7b7834d5e6211af78c1fb81d2bb3e57a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" alt="Apple iPad" />
                        <p className="product-title">Apple iPad</p>
                        <button className="check-price">Check price</button>
                    </div>
                    <div className="carousel-item">
                        <span className="discount-badge">40% OFF</span>
                        <img className='carouselitemm' src="https://www.retailmenot.com/imagery/product_offers/01je28zgb5ph43kzjcr0brqacq.fit_limit.quality_80.size_250x250.v1733135435.jpg.webp" alt="Apple Watch" />
                        <p className="product-title">Apple Watch SE</p>
                        <button className="check-price">Check price</button>
                    </div>
                    <div className="carousel-item">
                        <span className="discount-badge">65% OFF</span>
                        <img className='carouselitemm' src="https://www.retailmenot.com/imagery/product_offers/01je2e6s0956x5sev8c7stm4zk.fit_limit.quality_80.size_250x250.v1733135435.jpg.webp" alt="Dyson Airwrap" />
                        <p className="product-title">Dyson Airwrap</p>
                        <button className="check-price">Check price</button>
                    </div>
                    <div className="carousel-item">
                        <span className="discount-badge">46% OFF</span>
                        <img className='carouselitemm' src="https://www.retailmenot.com/imagery/product_offers/01jdw1v9x82chqyv7n3hh3278v.fit_limit.quality_80.size_250x250.v1733135435.jpg.webp" alt="Dyson Vacuum" />
                        <p className="product-title">Dyson V8 Vacuum</p>
                        <button className="check-price">Check price</button>
                    </div>
                    <div className="carousel-item">
                        <span className="discount-badge">42% OFF</span>
                        <img className='carouselitemm' src="https://www.retailmenot.com/imagery/product_offers/01jdw1v6fx9548ske7nmsh9gah.fit_limit.quality_80.size_250x250.v1733135433.jpg.webp" alt="Apple iPad" />
                        <p className="product-title">Apple iPad</p>
                        <button className="check-price">Check price</button>
                    </div>
                    <div className="carousel-item">
                        <span className="discount-badge">42% OFF</span>
                        <img className='carouselitemm' src="https://www.retailmenot.com/imagery/product_offers/01jdw1vawfb3xvx57cb57edx6t.fit_limit.quality_80.size_250x250.v1733135436.jpg.webp" alt="Apple iPad" />
                        <p className="product-title">Apple iPad</p>
                        <button className="check-price">Check price</button>
                    </div>
                    <div className="carousel-item">
                        <span className="discount-badge">42% OFF</span>
                        <img className='carouselitemm' src="https://i5.walmartimages.com/seo/Restored-Apple-iPad-Air-4-A2324-WiFi-Cellular-Unlocked-64GB-Space-Gray-Refurbished_8d9cf185-075e-438b-a6aa-58c66bb1a35c.7b7834d5e6211af78c1fb81d2bb3e57a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" alt="Apple iPad" />
                        <p className="product-title">Apple iPad</p>
                        <button className="check-price">Check price</button>
                    </div>
                </div>
                <div
                    className={`arrow arrow-right  bg-${props.mode === 'black' ? 'color-white' : 'color-black'}`}
                    onClick={() => scrollCarousel(1)}
                >
                    <i className="fa-solid fa-arrow-right" style={{ color: props.mode === 'black' ? 'white' : 'black' }} ></i>
                </div>
            </div>
        </div>
    );
}

export default Slider;
