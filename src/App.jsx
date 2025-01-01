// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './App.css'
import Aq1 from './Components/Images/aq1.png'
import Aq2 from './Components/Images/aq2.png'
import Aq3 from './Components/Images/aq3.png'
import Aq4 from './Components/Images/aq4.png'
import Aq5 from './Components/Images/aq5.png'
import Aq6 from './Components/Images/aq6.png'
import Aq7 from './Components/Images/aq7.png'
import Aq8 from './Components/Images/aq8.png'
import Na from './Components/Na'
import Slider from './Components/Slider';
import Sl from './Components/Sl';
import Categorie from './Components/Categorie';
import Awesome from './Components/Awesome';
import Smatshop from './Components/Smatshop';
import SmartShop2 from './Components/SmartShop2';
import Bank from './Components/BanckOff';
import Brands from './Components/brands';
import Hot from './Components/Hot';
import Exclusive from './Components/Exclusive';
import Footer from './Components/Footer';
import MobileView from './Components/MobileView';
import UserLogin from './Components/UserLogin';
// import ShoppingCart from './Components/ShoppingCart';

// import Menu from './Components/menu';
// import Cart from './Components/cart';
// import Navbar from './Components/navbar'

function App() {
  // const [count, setCount] = useState(0)


  const [mode, setMode] = useState('light')
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  let ToggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = "black"
      document.body.style.color = "white"
      document.body.style.transition = 'all .5s'




      document.getElementById('anim').style.background = "black"
      document.getElementById('anim').style.color = "white"
      document.getElementById('anim').style.border = "2px solid white"

      document.getElementById('anim5').style.background = "black"
      document.getElementById('anim5').style.border = "2px solid white"

      document.getElementById('anim5').style.color = "white"

      document.getElementById('anim2').style.background = "black"
      document.getElementById('anim2').style.border = "2px solid white"

      document.getElementById('anim2').style.color = "white"

      document.getElementById('anim1').style.background = "black"
      document.getElementById('anim1').style.color = "white"
      document.getElementById('anim1').style.border = "2px solid white"


      document.getElementById('anim3').style.background = "black"
      document.getElementById('anim3').style.color = "white"
      document.getElementById('anim3').style.border = "2px solid white"


      document.getElementById('anim4').style.background = "black"
      document.getElementById('anim4').style.border = "2px solid white"

      document.getElementById('anim4').style.color = "white"

      document.getElementById('mbbottom').style.background = "black"
      document.getElementById('mbbottom').style.color = "white"



      document.getElementById('container00').style.background = "black"
      document.getElementById('container00').style.color = "white"
      document.getElementById('container00').style.border = "2px solid white"

      

      document.getElementById('Mainsewaar').style.background = "black"
      document.getElementById('Mainsewaar').style.color = "white"
      document.getElementById('Mainsewaar').style.border = "2px solid white"


    } else {
      setMode('light');
      document.body.style.background = "white"
      document.body.style.color = "black"

      document.getElementById('anim').style.background = "white"
      document.getElementById('anim').style.border = "2px solid black"
      document.getElementById('anim').style.color = "black"

      document.getElementById('Mainsewaar').style.background = "white"
      document.getElementById('Mainsewaar').style.border = "2px solid black"
      document.getElementById('Mainsewaar').style.color = "black"


      document.getElementById('anim1').style.background = "white"
      document.getElementById('anim1').style.color = "black"
      document.getElementById('anim1').style.border = "2px solid black"


      document.getElementById('anim4').style.background = "white"
      document.getElementById('anim4').style.border = "2px solid black"
      document.getElementById('anim4').style.color = "black"

      document.getElementById('anim2').style.background = "white"
      document.getElementById('anim2').style.border = "2px solid black"
      document.getElementById('anim2').style.color = "black"

      document.getElementById('anim3').style.background = "white"
      document.getElementById('anim3').style.border = "2px solid black"
      document.getElementById('anim3').style.color = "black"

      document.getElementById('anim5').style.background = "white"
      document.getElementById('anim5').style.border = "2px solid black"
      document.getElementById('anim5').style.color = "black"

      document.getElementById('mbbottom').style.background = "white"
      document.getElementById('mbbottom').style.color = "black"


      document.getElementById('container00').style.background = "white"
      document.getElementById('container00').style.border = "2px solid black"
      document.getElementById('container00').style.color = "black"

      document.body.style.transition = 'all .5s'

    }
  }














  const circle = document.querySelector(".circle");
  document.addEventListener("mousemove", (e) => {
    circle.style.top = e.layerY + "px";
    circle.style.left = e.layerX + "px";
  });
  //   const circle = () =>{ document.querySelector(".circle");
  //   document.addEventListener("mousemove", (e) => {
  //     circle.style.top = e.layerY + "px";
  //     circle.style.left = e.layerX + "px";
  //   });
  // }

  // document.addEventListener("DOMContentLoaded", () => {
  //   const circle = document.querySelector(".circle");

  //   document.addEventListener("mousemove", (e) => {
  //     circle.style.top = `${e.layerY}px`;
  //     circle.style.left = `${e.layerX}px`;
  //   });
  // });
  // const cart = {};
  // let total = 0;

  // function addToCart(name, price) {
  //   // Add item to cart or update quantity
  //   if (cart[name]) {
  //     cart[name]++;
  //   } else {
  //     cart[name] = 1;
  //   }
  //   total += price;
  //   updateCart();
  // }
  // const [activeTab, setActiveTab] = useState('beauty');
  // const [showMenu, setShowMenu] = useState(false);

  // let cm = document.getElementById("Categorie")

  const OpenSidebar = () => {
    if (document.getElementById('sidebarr').style.display === 'none') {
      document.getElementById('sidebarr').style.display = 'block';
    } else {
      document.getElementById('sidebarr').style.display = 'none';
    }
  }
  const CloseSidebar = () => {
    if (document.getElementById('sidebarr').style.display === 'block') {
      document.getElementById('sidebarr').style.display = 'none';
    }
    else {
      document.getElementById('sidebarr').style.display = 'block';
    }
  }


  return (
    <>
      {/* <div style={{ border: mode === 'black' ? '2px solid white' : '2px solid' }} className='circle' >

        <div className='red'>
          <i style={{ margin: 'auto', color: mode === 'dark' ? 'white' : 'black' }} className='fa-solid fa-bag-shopping'></i>
        </div>
       
      

          



 
      </div> */}


      {/* <Navbar/>

  
      {/* <Cart  /> */}


      <Na mode={mode} ToggleMode={ToggleMode} />
      {/* <ShoppingCart/> */}


      <Sl mode={mode} />
      <br mode={mode} />

      <Categorie mode={mode} />

      <Smatshop mode={mode} />
      <SmartShop2 mode={mode} />


      {/* {activeTab === 'login' && */}
      {/* } */}



      <Awesome mode={mode} />
      <Slider mode={mode} />
      <Bank mode={mode} />

      <Brands mode={mode} />
      <Exclusive Aq3={Aq3} Aq4={Aq4} Aq5={Aq5} Aq6={Aq6} Aq7={Aq7} Aq8={Aq8} mode={mode} />
      <Hot Aq1={Aq1} Aq2={Aq2} mode={mode} />
      <Footer mode={mode} />
      <MobileView
        OpenSidebar={OpenSidebar}
        mode={mode}
      />
      <UserLogin sidebarr='sidebarr'
        mode={mode}
        CloseSidebar={CloseSidebar}
      />






    </>
  )
}

export default App
