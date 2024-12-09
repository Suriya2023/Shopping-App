import React from 'react'
// import { AiOutlineHeart } from 'react-icons/ai';
// import { BsGrid } from 'react-icons/bs';
// import { GiCompactDisc } from 'react-icons/gi';
// import Menu from './menu';
// import UserLogin from './UserLogin';
// import { BiUser } from 'react-icons/bi';
// import { FiMoreHorizontal } from 'react-icons/fi';
// import UserLogin from './UserLogin';

import './MobileView.css';

function MobileView(props) {
  // const [activeTab, setActiveTab] = useState('beauty');
  // let a  = `bg-${props.mode === 'light' ? 'dark' : 'light'}`
  // let b = `text-${props.mode === 'light' ? 'dark' : 'light'}`

  // const navItems = [
  // { id: 'beauty', icon: <AiOutlineHeart className="w-6 h-6" />, label: 'Beauty' },
  // { 
  //id: 'categories', icon: <BsGrid 
  // onClick={props.CategorieMD}
  //  className="w-6 h-6" />, label: 'Categories', },
  //   { id: 'cliq', icon: <GiCompact/Disc className="w-6 h-6" />, label: 'CLiQ Drip' },
  // { id: 'login', icon: <BiUser className="w-6 h-6" />, label: 'Login' },
  // { id: 'more', icon: <FiMoreHorizontal onClick={() => setShowMenu(!showMenu)} className="w-6 h-6" />, label: 'More' },
  // ];/


  return (
    <>
      {/* // <div  className={`mbbottom  bg-${props.mode}`} > */}
      {/* <nav id='mbbottom' className={`fixed bottom-0 left-0 w-full z-50 bg-white  shadow-lg bg-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="flex justify-between items-center py-3">
          {navItems.map((item) => (
            <li key={item.id} className="flex-1 text-center">
              <button
                onClick={() => props.setActiveTab(item.id)}
                className={`flex flex-col items-center w-full ${
                  props.activeTab === item.id ? 'text-red-500' : `text-${props.mode === 'light' ? 'dark' : 'light'}`
              }`}
              >
                {item.icon}
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav> */}

      {/* /* {activeTab === 'login' && <UserLogin mode={a} text={b} />} */}
      {/* /* {showMenu && <Menu mode={props.mode} />} */}
      {/* // </div> */}

      <div id='mbbottom' className={`maincd  bg-${props.mode === 'white' ? 'black' : 'white'}`} >


        <div className={`containericon bg-${props.mode} `}>

          <div className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <a href="/"><i class="fa-solid fa-list"></i>
              {/* <i className='svg-inline--fa fa-grid-2 fa-lg'></i> */}
            </a>
            <br />
            <p>         Categories</p>
          </div>

          <div className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <a href="/"><i className="fa-regular fa-heart"></i></a>
            <br />
            <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>   Beauty</p>
          </div>






          <div onClick={props.OpenSidebar} className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <a href="/">
              <i className="fa-solid fa-user"></i> <br />
              <p> User</p>
            </a>
          </div>




          <div className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <a href="/">
              <i className="fa-solid fa-ellipsis"></i>
              <br />
              <p>   List</p>
            </a>
          </div>


          {/* <div>
           <label className="switch" >
                                    <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg>
                                    </span>
                                    <span className="moon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg>
                                    </span>
                                    <input type="checkbox" onClick={props.ToggleMode} className="input" />
                                    <span className="slider"></span>
                                </label> 
          </div> */}
        </div>
      </div>










    </>

  )
}

export default MobileView
