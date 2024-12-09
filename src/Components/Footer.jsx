import React from 'react'
import './Footer.css'
function Footer(props) {
  return (
    <div>
        
      <div className={`footer text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
      <hr />
      {/* <hr /> */}
      <br />
    <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <div className="column">
            <h4>Get to Know Us</h4>
            <ul>
                <li><a href="#">About Shops</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press Releases</a></li>
                <li><a href="#">Shops Science</a></li>
            </ul>
        </div>
        <div className="column">
            <h4>Connect with Us</h4>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
        </div>
        <div className="column">
            <h4>Make Money with Us</h4>
            <ul>
                <li><a href="#">Sell on Shops</a></li>
                <li><a href="#">Sell under Shop Accelerator</a></li>
                <li><a href="#">Protect and Build Your Brand</a></li>
                <li><a href="#">Shops Global Selling</a></li>
                <li><a href="#">Supply to Shops</a></li>
                <li><a href="#">Become an Affiliate</a></li>
                <li><a href="#">Fulfillment by Shops</a></li>
                <li><a href="#">Advertise Your Products</a></li>
                <li><a href="#">Shops Pay on Merchants</a></li>
            </ul>
        </div>
        <div className="column">
            <h4>Let Us Help You</h4>
            <ul>
                <li><a href="#">Your Account</a></li>
                <li><a href="#">Returns Centre</a></li>
                <li><a href="#">Recalls and Product Safety Alerts</a></li>
                <li><a href="#">100% Purchase Protection</a></li>
                <li><a href="#">Shops App Download</a></li>
                <li><a href="#">Help</a></li>
            </ul>
        </div>
    </div>
    <hr />  

    <div className="footer-bottom">
        <p>&copy; 2024 Shop</p>
         <h1> Made with ❤️ by <a href="/">Suraj Singh Rajput</a></h1>
    </div>
        </div>
    </div>
  )
}

export default Footer
