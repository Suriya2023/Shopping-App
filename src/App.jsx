// import { useState } from 'react'

import { useState } from 'react';
import './App.css'
import Na from './Components/Na'
import Slider from './Components/Slider';
import Sl from './Components/Sl';
import Slidee from './Components/sl2';
import Smatshop from './Components/Smatshop';
// import Cart from './Components/cart';
// import Navbar from './Components/navbar'

function App() {
  // const [count, setCount] = useState(0)


  const [mode, setMode] = useState('light')

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
    } else {
      setMode('light');
      document.body.style.background = "white"
      document.body.style.color = "black"

      document.getElementById('anim').style.background = "white"
      document.getElementById('anim').style.border = "2px solid black"
      document.getElementById('anim').style.color = "black"

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


  return (
    <>
      {/* <div className={`circle bg-${mode}`} >

        <div className={`red bg-${mode === 'light' ? 'dark' : 'dark'}`}></div>
      </div>   */}


      {/* <Navbar/>

  
      {/* <Cart  /> */}
      <Na mode={mode} ToggleMode={ToggleMode} />
      <Sl mode={mode} />
      <br  mode={mode}/>
      <Slidee mode={mode}/>
      <Smatshop mode={mode}/>

      <Slider mode={mode} />


    </>
  )
}

export default App
