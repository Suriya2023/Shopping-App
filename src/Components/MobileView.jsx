import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsGrid } from 'react-icons/bs';
// import { GiCompactDisc } from 'react-icons/gi';
// import Menu from './menu';
// import UserLogin from './UserLogin';
import { BiUser } from 'react-icons/bi';
import { FiMoreHorizontal } from 'react-icons/fi';
import './MobileView.css';

function MobileView(props) {
    // const [activeTab, setActiveTab] = useState('beauty');
    // let a  = `bg-${props.mode === 'light' ? 'dark' : 'light'}`
    // let b = `text-${props.mode === 'light' ? 'dark' : 'light'}`

    const navItems = [
      { id: 'beauty', icon: <AiOutlineHeart className="w-6 h-6" />, label: 'Beauty' },
      { id: 'categories', icon: <BsGrid className="w-6 h-6" />, label: 'Categories' },
    //   { id: 'cliq', icon: <GiCompact/Disc className="w-6 h-6" />, label: 'CLiQ Drip' },
      { id: 'login', icon: <BiUser className="w-6 h-6" />, label: 'Login' },
        { id: 'more', icon: <FiMoreHorizontal onClick={() => setShowMenu(!showMenu)} className="w-6 h-6" />, label: 'More' },
    ];
  return (
    <div  className={`mbbottom  bg-${props.mode}`} >
         <nav id='mbbottom' className={`fixed bottom-0 left-0 w-full z-50 bg-white  shadow-lg bg-${props.mode === 'light' ? 'dark' : 'light'}`}>
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
    </nav>

 {/* {activeTab === 'login' && <UserLogin mode={a} text={b} />} */}
 {/* {showMenu && <Menu mode={props.mode} />} */}
    </div>
  )
}

export default MobileView
