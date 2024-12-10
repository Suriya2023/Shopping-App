import React, { useEffect } from 'react'
import './Hot.css'
// import So from './Images/so.png'

function Hot(props) {
  useEffect(() => {
    const elements = document.querySelectorAll('.lakals');
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      elements.forEach(element => {
        const boundingRect = element.getBoundingClientRect().top;
        if (boundingRect < viewportHeight) {
          element.classList.add('fire');
        } else {
          element.classList.remove('fire');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.lakals2');
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      elements.forEach(element => {
        const boundingRect = element.getBoundingClientRect().top;
        if (boundingRect < viewportHeight) {
          element.classList.add('fire');
        } else {
          element.classList.remove('fire');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() =>{
    let elements = document.querySelectorAll(".lakals3")
    let  handleScroll = () => {
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
    <div className='hot-container max-w-100'>
      <h1 className='lakals2'
        style={{ fontStyle: 'oblique', fontWeight: '600', textAlign: 'center', cursor: 'pointer', hover: 'underline', fontFamily: 'Times New Roman, Times, serif', fontSize: '2rem', }}
      >
        Hot Shopping Deals
      </h1>
      <br />
      <div className="grid margin-auto  display-grid grid-container">
        <div className="grid-item grid-item-1 ">
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733633311/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Dec/08122024/HP_New-at-Croma_Vivo_8Dec2024_nm7oqp.jpg?tr=w-1024" alt="" />
        </div>
        <div className="grid-item grid-item-2 ">
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733633311/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Dec/08122024/HP_New-at-Croma_Speaker_8Dec2024_ghcold.jpg?tr=w-1024" alt="" />
        </div>
        <div className="grid-item grid-item-3 ">
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733633310/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Dec/08122024/HP_New-at-Croma_AP_8Dec2024_akpb6f.jpg?tr=w-1024" alt="" />
        </div>
        <div className="grid-item grid-item-4 ">
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733580818/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Whats%20Hot/Dec/08122024/Desktop/HP_New-at-Croma_Ref_8Dec2024_pdiilw.jpg?tr=w-1024" alt="" />
        </div>
      </div>
      <br />
      <h1 className='lakals2' style={{ fontStyle: 'oblique', fontWeight: '600', textAlign: 'center', cursor: 'pointer', hover: 'underline', fontFamily: 'Times New Roman, Times, serif', fontSize: '2rem', }}>
        Deals on Shop Appliances
      </h1>
      <br />
      <div className="grid2">

        <div id='griditem' className="grid-item  ">
          <img src={props.Aq1} alt="" />
        </div>

        <div className="grid-item  ">
          <img src={props.Aq2} alt="" />
        </div>

      </div>
      <br />
      <h1 className='lakals3' style={{ fontStyle: 'oblique', fontWeight: '600', textAlign: 'center', cursor: 'pointer', hover: 'underline', fontFamily: 'Times New Roman, Times, serif', fontSize: '2rem', }}>
        Deals Of The Day
      </h1>
      <br />
      <div className="grid margin-auto  display-grid grid-container">
        <div className="grid-item grid-item-1 ">
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733633310/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Dec/08122024/HP_DOTD_Tab_8Dec2024_pkqfn4.jpg?tr=w-1024" alt="" />
        </div>
        <div className="grid-item grid-item-2 ">
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733633310/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Dec/08122024/HP_DOTD_AC_8Dec2024_r0auf6.jpg?tr=w-1024" alt="" />
        </div>
        <div className="grid-item grid-item-3 ">
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733582058/Croma%20Assets/CMS/LP%20Page%20Banners/2024/DOTD/Dec/08122024/Desktop/HP_DOTD_SW_8Dec2024_lp1ggq.jpg?tr=w-1024" alt="" />
        </div>
        <div className="grid-item grid-item-4 ">
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733582058/Croma%20Assets/CMS/LP%20Page%20Banners/2024/DOTD/Dec/08122024/Desktop/HP_DOTD_M_O_8Dec2024_fywvo5.jpg?tr=w-1024" alt="" />
        </div>
      </div>
      <br />
    </div>
  )
}

export default Hot
