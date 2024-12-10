import React, { useEffect , useRef} from 'react'
import './Awesome.css'
function Awesome(props) {

    // function Awesome() {
        // Add useEffect and useRef hooks at the top
        const scrollContainerRef = useRef(null);
      
        useEffect(() => {
          const scrollContainer = scrollContainerRef.current;
          const prevBtn = document.querySelector('.prev-btn');
          const nextBtn = document.querySelector('.next-btn');
          
          const scrollAmount = 300;
      
          const handleNextClick = () => {
            scrollContainer.scrollBy({
              left: scrollAmount,
              behavior: 'smooth'
            });
          };
      
          const handlePrevClick = () => {
            scrollContainer.scrollBy({
              left: -scrollAmount,
              behavior: 'smooth'
            });
          };
      
          const handleScroll = () => {
            const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            prevBtn.style.opacity = scrollContainer.scrollLeft === 0 ? '0.5' : '1';
            nextBtn.style.opacity = scrollContainer.scrollLeft >= maxScroll ? '0.5' : '1';
          };
      
          nextBtn.addEventListener('click', handleNextClick);
          prevBtn.addEventListener('click', handlePrevClick);
          scrollContainer.addEventListener('scroll', handleScroll);
      
          // Cleanup function
          return () => {
            nextBtn.removeEventListener('click', handleNextClick);
            prevBtn.removeEventListener('click', handlePrevClick);
            scrollContainer.removeEventListener('scroll', handleScroll);
          };
        }, []); // Empty dependency array since we only want this to run once
      
        useEffect(() => {
          let elements = document.querySelectorAll(".Magictxtt")
          let handleScroll = () => {
              let viewportHeight = window.innerWidth;
              elements.forEach(element => {
                  let boundingRect = element.getBoundingClientRect().right;
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
        let elements = document.querySelectorAll(".category-item")
        let handleScroll = () => {
            let viewportHeight = window.innerWidth;
            elements.forEach(element => {
                let boundingRect = element.getBoundingClientRect().right;
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
      <div className={`category-container bg-${props.mode}`}>
   <h1 className="Magictxtt" style={{ fontWeight: '600', textAlign: 'center', cursor: 'pointer', hover: 'underline', fontFamily: 'Times New Roman, Times, serif', fontSize: '2rem' }}>
    Awesome Features

   </h1>
      <button className={`nav-btn bg-${props.mode === 'dark' ? 'text-white' : 'text-black'} text-${props.mode === 'dark' ? 'text-black' : 'text-white'} prev-btn`}>&#10094;</button>
       
    
    <div className="category-scroll" ref={scrollContainerRef}>
            <div className="category-item">
            <div className="icon-circle">
                <i className={`fas fa-tv ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}></i>
            </div>
            <span className={`${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>Home Theatres & Soundbars</span>
        </div>
        
        <div className="category-item">
            <div className="icon-circle">
            <i className={`fa-solid fa-barcode ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}></i>
            </div>
            <span className={`${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>Shop by Barcode</span>
        </div>

        <div className="category-item">
            <div className="icon-circle">
            <i className={`fa-brands fa-shopify ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}></i>
            </div>
            <span className={`${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>Shop by Category</span>
        </div>

        <div className="category-item">
            <div className="icon-circle">
            <i className={`fa-solid fa-film ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}></i>
            </div>
            <span className={`${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>Wearables</span>
        </div>

        <div className="category-item">
            <div className="icon-circle">
            <i className={`fa-solid fa-camera-retro ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}></i>
            </div>
            <span className={`${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>Cameras</span>
        </div>

        <div className="category-item">
            <div className="icon-circle">
                <i className={`fas fa-music ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}></i>
            </div>
            <span className={`${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>Speakers & Media Players</span>
        </div>

        <div className="category-item">
            <div className="icon-circle">
                <i className={`fa-solid fa-mobile-screen-button ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}></i>
            </div>
            <span className={`${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>Mobile Phones</span>
        </div>

        <div className="category-item">
            <div className="icon-circle">
            <i className={`fa-solid fa-money-bill ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}></i>
            </div>
            <span className={`${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>Money & Finance</span>
        </div>

        <div className="category-item">
            <div className="icon-circle">
            <i className={`fa-solid fa-truck ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}></i>
            </div>
            <span className={`${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>Fast Delivery</span>
        </div>

        <div className="category-item">
            <div className="icon-circle">
            <i className={`fa-solid fa-lock ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}></i>

            </div>
            <span className={`${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>Shop by Brand</span>
        </div>

        <div className="category-item">
            <div className="icon-circle">
            <i className={`fa-solid fa-clock ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}></i>
            </div>
            <span className={`${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>Limited Offers</span>
        </div>

        {/* <!-- Add more items following the same pattern --> */}
    </div>
    
    <button className={`nav-btn bg-${props.mode === 'dark' ? 'text-white' : 'text-black'} text-${props.mode === 'dark' ? 'text-black' : 'text-white'} next-btn`}>&#10095;</button>
</div>
    </div>
  )
}

export default Awesome
