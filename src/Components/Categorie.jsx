import React from 'react'
import './sl2.css'
function Categorie(props) {
  return (
    <div id='div-smart2' className={`bg-${props.mode}`}>
          <h1 style={{ fontWeight: '600', textAlign: 'center', cursor: 'pointer', hover: 'underline', fontFamily: 'Times New Roman, Times, serif', fontSize: '2rem' }} className='CategoriesH1'>Categories With Product..</h1>
{/* <br /> */}
      <div className='containere'>
        <div className='imgggd'>
          <a href="#div-smart1" rel="noopener noreferrer"><img src="https://assets.tatacliq.com/medias/sys_master/images/62926917206046.png" alt="" /></a>
        </div>
        <div  className='imgggd'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917271582.png" alt="" />
        </div>
        <div className='imgggd'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917337118.png" alt="" />
        </div>
        <div className='imgggd'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917402654.png" alt="" />
        </div>

        <div className='imgggd'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917468190.png  " alt="" />
        </div>
        <div className='imgggd'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917533726.png" alt="" />
        </div>
        <div className='imgggd'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917599262.png" alt="" />
        </div>
        <div className='imgggd'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917664798.png" alt="" />
        </div>
        <div className='imgggd'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917730334.png" alt="" />
        </div>
        <div className='imgggd'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917795870.png" alt="" />
        </div>
        <div className='imgggd'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917861406.png" alt="" />
        </div>


        <div className='imgggd' id='last'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926892466206.jpg" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Categorie
