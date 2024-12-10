import React from 'react'
import './Banck.css'
function BanckOff(props) {
  return (
    <div id='div-smart3' style={{transition: 'all 0.5s ease-in-out'}} className={`max-w-full bg-${props.mode}`}>
      <section className='containergd'>


        <h1 className='headinggd'>Exciting Bank Offers For You</h1>
        <br />

        <div className="containergdd">

          <div className="list">
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721197736/Croma%20Assets/CMS/Homepage%20Banners/neu_offers_desk_tkq4lf.png?tr=w-1000" srcset="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721197736/Croma%20Assets/CMS/Homepage%20Banners/neu_offers_desk_tkq4lf.png?tr=w-240 240w,https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721197736/Croma%20Assets/CMS/Homepage%20Banners/neu_offers_desk_tkq4lf.png?tr=w-360 360w,https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721197736/Croma%20Assets/CMS/Homepage%20Banners/neu_offers_desk_tkq4lf.png?tr=w-480 480w,https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721197736/Croma%20Assets/CMS/Homepage%20Banners/neu_offers_desk_tkq4lf.png?tr=w-720 720w,https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721197736/Croma%20Assets/CMS/Homepage%20Banners/neu_offers_desk_tkq4lf.png?tr=w-1024 1024w" sizes="50vw" alt="undefined"/>
          </div>

          <div className="list">
            <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717075769/Croma%20Assets/CMS/LP%20Page%20Banners/2024/BAU/HP_2Split_MFYMP_Brands_HDFC_ICIC_30May2024_kzbaou.png?tr=w-1024" alt="" />
          </div>

          <span class=" list3 lazy-load-image-background blur-up lazy-load-image-loaded" style={{width: '100%', height: 'auto', backgroundColor: 'rgb(239, 240, 240)', borderRadius: '10px', objectFit: 'cover'}}> 
            <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1728297129/Croma%20Assets/CMS/LP%20Page%20Banners/2024/More%20For%20Your%20Money/October/BAU/Sat-Sun%20-%20Federal%20HDFC%20HSBC/LP_SingleSplit_Bank_Fed-hdfc-hsbc_7oct2024_h51k5x.png?tr=w-1024" alt="" />
          </span>
        </div>
     
      </section>
    </div>
  )
}

export default BanckOff
