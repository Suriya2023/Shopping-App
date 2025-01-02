import { React } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


import './Normal.css'
function Na(props) {
    let ChangBtntgl = () => {
        if (document.getElementById('respons').style.display === 'none')
        // &&
        // (document.getElementById("anim").classList.add("fire")
        // )
        {
            document.getElementById('respons').style.display = 'block';
            console.log("display none")

            // document.getElementById("anim").remove("fire")

        } else {
            document.getElementById('respons').style.display = 'none';
            // document.getElementById("anim").add("fire")
        }
    }



    // let a = document.querySelectorAll('.anim')
    // window.addEventListener("scroll",mylogo)

    // function mylogo() {
    //     var m = window.screenTop / 0 * 1

    //     a.forEach(anim => {
    //         var n = anim.getBoundingClientRect().top
    //         if (n < m) {
    //             anim.classList.add("fire")
    //         } else {
    //             anim.classList.remove("fire")
    //         }
    //     });

    // }


    // let ChangBtntgl = () =>{
    //     if () {

    //     } else {

    //     }
    // // }
    // const openCardSection = () => {
    //     const cardSection = document.getElementById('card-section11');
    //     cardSection.classList.add('open');
    // }

    // const closeCardSection = () => {
    // const CardSection = document.getElementById('card-section11');
    //     cardSection.classList.remove('open');
    // }


    // const CardSection = () => {

    const OnstartFire = () => {
        const fire = document.getElementById('mydom')

        // if ((fire.style.display == 'none')  (fire.style.transform =  'translateX(-400%)') ) {
        if (fire.style.opacity == 0) {

            // fire.style.transform = TransitionEvent()
            fire.style.transform = 'translateX(0%)'
            fire.style.opacity = 1;


        } else {
            fire.style.transform = 'translateX(-400%)'

            fire.style.opacity = 0;

        }
    }


    const CloseOff = () => {
        const fire = document.getElementById('mydom')

        // if ((fire.style.display == 'none')  (fire.style.transform =  'translateX(-400%)') ) {
        if (fire.style.opacity == 0) {

            // fire.style.transform = TransitionEvent()
            fire.style.transform = 'translateX(0%)'
            fire.style.opacity = 1;


        } else {
            fire.style.transform = 'translateX(-400%)'

            fire.style.opacity = 0;

        }
    }



    return (
        <>
        <div>
            <div className='mainslide'>


                <div className={`bg-${props.mode == "white" ? "dark" : "white"}`} id='mydom'>
                    <div className={`hdeendshow bg-${props.mode}`}>

                        <div id='container00' className={`container00 bg-${props.mode === 'light' ? 'dark' : 'light'}`}>

                            <div className={`myclass bg-${props.mode == 'light' ? 'dark' : 'light'}`}>
                                <button onClick={CloseOff}><i class="fa-solid fa-xmark"></i></button>
                            </div>
                            <div className="free-delivery00">&#10004; Part of your order qualifies for FREE Delivery. Choose FREE Delivery option at checkout.</div>

                            <div className="subtotal00">Subtotal (9 items): <span>&#8377;2,63,677.95</span></div>

                            <div className="gift-option00">
                                <input type="checkbox" id="gift00" />
                                <label for="gift">This order contains a gift</label>
                            </div>

                            <button className="proceed-button00">Proceed to Buy</button>

                            <div className="emi00">EMI Available</div>

                            <div className="pair-section00">
                                <div className="pair-title00">Pair with your cart</div>

                                <div id='product00' className="product00">
                                    <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917468190.png" alt="Apple Charger" />
                                    <div className="product-details00">
                                        <div className="product-title00">Apple  Apple Watch Strap + Case for Gen, Nylon  - Sports Watch </div>
                                        <div className="product-price00">&#8377;1,549 <span >&#8377;1,900</span></div>
                                        <a href="#" className="add-to-cart00">Add to cart</a>
                                    </div>
                                </div>

                                <div id='product000' className="product00">
                                    <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917599262.png" alt="Socks" />
                                    <div className="product-details00">
                                        <div className="product-title00">Smart  for Men &  Pairs Solid Socks</div>
                                        <div className="product-price00">&#8377;199 <span >&#8377;1,300</span></div>
                                        <a href="#" className="add-to-cart00">Add to cart</a>
                                    </div>
                                </div>



                                <div className="product00">
                                    <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917664798.png" alt="Apple Charger" />
                                    <div className="product-details00">
                                        <div className="product-title00">Jewellery Beauty of Humans</div>
                                        <div className="product-price00">&#8377;1,549 <span >&#8377;1,900</span></div>
                                        <a href="#" className="add-to-cart00">Add to cart</a>

                                    </div>
                                </div>

                                <div className="product00">
                                    <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917533726.png" alt="Socks" />
                                    <div className="product-details00">
                                        <div className="product-title00">Men & kids Enhancer Flatform Heel Slip On Casual Shoes  </div>
                                        <div className="product-price00">&#8377;199 <span >&#8377;1,300</span></div>
                                        <a href="#" className="add-to-cart00">Add to cart</a>
                                    </div>
                                </div>


                                <div className="product00">
                                    <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917402654.png" alt="Socks" />
                                    <div className="product-details00">
                                        <div className="product-title00">Zara Bages 12 Pairs Solid Stocks</div>
                                        <div className="product-price00">&#8377;199 <span >&#8377;1,300</span></div>
                                        <a href="#" className="add-to-cart00">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}>
                <div className={`container  ${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <div className={`logo ${props.mode === 'light' ? 'dark' : 'light'} `}>
                        <span className="logo-box"><i className="fa-solid fa-bag-shopping"></i> <i style={{ fontStyle: 'oblique' }} className={`underline  ${props.mode === 'light' ? 'dark' : 'light'}`}><Link to="/Shopping-App/">Shop</Link></i></span>
                    </div>



                    <div className='responss'>
                        <ul className={`nav-links bg-${props.mode}`} id="nav-links">
                            <li id=''><Link style={{ fontStyle: 'oblique' }} className={`$bg-{props.mode === 'light' ? 'dark' : 'light'}`} to="/Shopping-App/Men">Men</Link></li>
                            <li id='' ><a style={{ fontStyle: 'oblique' }} className={`$bg-{props.mode === 'light' ? 'dark' : 'light'}`} href="#">Women</a></li>
                            <li id='' ><a style={{ fontStyle: 'oblique' }} className={`$bg-{props.mode === 'light' ? 'dark' : 'light'}`} href="#">Kids</a></li>
                            <li id='' ><a style={{ fontStyle: 'oblique' }} className={`$bg-{props.mode === 'light' ? 'dark' : 'light'}`} href="#">Home & Living </a></li>
                            <li id='' ><a style={{ fontStyle: 'oblique' }} className={`$bg-{props.mode === 'light' ? 'dark' : 'light'}`} href="#">Beauty</a></li>
                            <li id='' ><a style={{ fontStyle: 'oblique' }} className={`$bg-{props.mode === 'light' ? 'dark' : 'light'}`} href="#">Studio <sup className='underline' >NEW</sup></a></li>

                        </ul>
                    </div>



                    <ul className="icon-links">
                        <li><a href="#"><span className="icon"></span></a></li>
                        <li><a href="#"><span className="icon"></span></a></li>
                        <li><a href="#"><span className="icon"></span></a></li>

                        <li>
                            <form className="search-box  autocomplete">
                                <input type="text" list='products' id="myInput inputBox" spellCheck="true " placeholder="Search  For Products..." className={`search-input text-black  ${props.mode === 'light' ? 'dark' : 'light'}`} />
                                <datalist id="products">
                                    <option value="Louis Vuitton Neverfull"></option>
                                    <option value="Gucci Marmont Tote"></option>
                                    <option value="Prada Nylon Backpack"></option>
                                    <option value="Nike Air Jordan 1"></option>
                                    <option value="Adidas Ultraboost"></option>
                                    <option value="Puma RS-X"></option>
                                    <option value="Rolex Submariner"></option>
                                    <option value="Omega Seamaster"></option>
                                    <option value="Casio G-Shock"></option>
                                    <option value="Bage"></option>
                                    <option value="shouse"></option>
                                    <option value="Hoodies"></option>
                                    <option value="Watch"></option>
                                </datalist>
                                <input style={{ fontWeight: '600', textAlign: 'center', cursor: 'pointer', hover: 'underline', fontFamily: 'Times New Roman, Times, serif', fontSize: '1.2rem', borderRadius: '10px', paddingRight: '10px', paddingLeft: '10px', border: '1px solid ', fontStyle: 'oblique' }} className={`shortcut ${props.mode === 'light' ? 'dark' : 'light'}`} type='Submit' />
                            </form>

                        </li>






                        <li className={` cursor-pointer ${props.mode === 'light' ? 'dark' : 'light'}`}> <i onClick={OnstartFire} className="fa-solid fa-cart-shopping"></i>

                            {/* slide bar */}





                            {/* slide end */}





                            <sup className='cart-count'>{props.total}</sup>







                        </li>
                        <li ><a href="#">
                            <span className="icon">

                                <label className="switch" >
                                    <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg>
                                    </span>
                                    <span className="moon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg>
                                    </span>
                                    <input type="checkbox" onClick={props.ToggleMode} className="input" />
                                    <span className="slider"></span>
                                </label>



                            </span></a></li>
                        <li> <button className="toggle-btn" id="toggle-btn" onClick={ChangBtntgl}>
                            ☰
                        </button></li>
                    </ul>
                </div>

                <div id='respons' className='smallPosition'>
                    <ul className={`nav-links bg-${props.mode}`} id="nav-links  smallPosition">
                        <li id='anim'><Link  style={{ fontStyle: 'oblique' }} className={`$bg-{props.mode === 'light' ? 'dark' : 'light'}`} to="/Shopping-App/Men">Men</Link></li>
                        <li id='anim1' ><a style={{ fontStyle: 'oblique' }} className={`$bg-{props.mode === 'light' ? 'dark' : 'light'}`} href="#">Women</a></li>
                        <li id='anim2' ><a style={{ fontStyle: 'oblique' }} className={`$bg-{props.mode === 'light' ? 'dark' : 'light'}`} href="#">Kids</a></li>
                        <li id='anim3' ><a style={{ fontStyle: 'oblique' }} className={`$bg-{props.mode === 'light' ? 'dark' : 'light'}`} href="#">Home & Living </a></li>
                        <li id='anim4' ><a style={{ fontStyle: 'oblique' }} className={`$bg-{props.mode === 'light' ? 'dark' : 'light'}`} href="#">Beauty</a></li>
                        <li id='anim5' ><a style={{ fontStyle: 'oblique' }} className={`$bg-{props.mode === 'light' ? 'dark' : 'light'}`} href="#">Studio <sup className='underline' >NEW</sup></a></li>


                    </ul>
                    <form className="search-boxes  autocomplete">
                        <input type="text" list='products' id="myInput inputBox" spellCheck="true " placeholder="Search  For Products..." className={`search-inputt text-black  ${props.mode === 'light' ? 'dark' : 'light'}`} />
                        <datalist id="products">
                            <option value="Louis Vuitton Neverfull"></option>
                            <option value="Gucci Marmont Tote"></option>
                            <option value="Prada Nylon Backpack"></option>
                            <option value="Nike Air Jordan 1"></option>
                            <option value="Adidas Ultraboost"></option>
                            <option value="Puma RS-X"></option>
                            <option value="Rolex Submariner"></option>
                            <option value="Omega Seamaster"></option>
                            <option value="Casio G-Shock"></option>
                            <option value="Bage"></option>
                            <option value="shouse"></option>
                            <option value="Hoodies"></option>
                            <option value="Watch"></option>
                        </datalist>
                        <input style={{ fontStyle: 'oblique' }} id='smalbtn' className="shortcut" type='Submit' />
                    </form>

                </div>
            </nav>
            {/* <span>{props.cart}</span> */}


        </div>



        </>
    )
}

export default Na
