import React from 'react'
// import '../App.css'
import './Nav.css'



function navbar() {

    // const menuToggle = document.getElementById("menu-toggle");
    // const mobileNav = document.getElementById("mobile-nav");

    // menuToggle.addEventListener("click", () => {
    //     mobileNav.classList.toggle("block");
    // });

    // function Domains() {
    //     // style.display = block
    //     if (document.getElementById('OnclickNav').style.tw-display == none) {
    //         document.getElementById('OnclickNav').style.tw-display = block;
    //     } else {
    //         document.getElementById('OnclickNav').style.tw-display = none
    //     }

    // }


    let ToggleMenu = () => {
        if (document.getElementById('mobile-nav').style.display == "block") {

            document.getElementById('mobile-nav').style.display = "none"
        

        } else {
            document.getElementById('mobile-nav').style.display = "block"
        }
    }

    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    {/* <!-- Logo --> */}
                    <div className="logo">
                        <a href="#">ShopLogo</a>
                    </div>

                    {/* <!-- Desktop Navigation --> */}
                    <ul className="nav-links">
                        <li ><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                    {/* <!-- Cart & Mobile Menu --> */}
                    <div className="cart-menu">
                        {/* <span className='inputf'>
                            <input type="text" name="" id="" />

                        </span> */}
                        <a href="#" className="cart">

                            <span className="icon">🛒</span>
                            <span className="badge">3</span>

                        </a>
                        <button className="menu-toggle" id="menu-toggle" onClick={ToggleMenu}>☰</button>
                    </div>
                </div>

                {/* <!-- Mobile Navigation --> */}
                <ul className="mobile-nav hidden" id="mobile-nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default navbar
