import React from 'react'

import Aq1 from './Images/aq1.png'
import Aq2 from './Images/aq2.png'
import Aq3 from './Images/aq3.png'
import Aq4 from './Images/aq4.png'
import Aq5 from './Images/aq5.png'
import Aq6 from './Images/aq6.png'
import Aq7 from './Images/aq7.png'
import Aq8 from './Images/aq8.png'

import Slider from './Slider';
import Sl from './Sl';
import Categorie from './Categorie';
import Awesome from './Awesome';
import Smatshop from './Smatshop';
import SmartShop2 from './SmartShop2';
import Bank from './BanckOff';
import Brands from './brands';
import Hot from './Hot';
import Exclusive from './Exclusive';


// import CardGrid from './CardGrid';


function HomePage() {


     









    return (
        <div>
            <Sl />
            <br />

            <Categorie />
            <Smatshop />
            <SmartShop2 />


            {/* {activeTab === 'login' && } */}


            <Awesome />
            <Slider />
            <Bank />
            <Brands />
            <Exclusive Aq3={Aq3} Aq4={Aq4} Aq5={Aq5} Aq6={Aq6} Aq7={Aq7} Aq8={Aq8} />
            <Hot Aq1={Aq1} Aq2={Aq2} />

        </div>
    )
}

export default HomePage
