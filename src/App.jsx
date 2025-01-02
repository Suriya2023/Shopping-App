import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Na from './Components/Na'
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import CardGrid from './Components/CardGrid';
import MobileView from './Components/MobileView';
import UserLogin from './Components/UserLogin';

function App() {

  const [mode, setMode] = useState('light')

  let ToggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = "black"
      document.body.style.color = "white"
      document.body.style.transition = 'all .5s'

      document.getElementById('mbbottom').style.background = "black"
      document.getElementById('mbbottom').style.color = "white"
    } else {
      setMode('light');
      document.body.style.background = "white"
      document.body.style.color = "black"
      document.body.style.transition = 'all .5s'

      document.getElementById('mbbottom').style.background = "white"
      document.getElementById('mbbottom').style.color = "black"

    }
  }
  // icon-circle

  // mbbottom

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
      <Router>
        <Na mode={mode} ToggleMode={ToggleMode} />
        {/* <HomePage  mode={mode} /> */}
        <Routes>
          {/* <Route path='/Shopping-App/' element={<Sl mode={mode} />} /> */}
          <Route path='/Shopping-App/' element={<HomePage mode={mode} />} />
          <Route path='/Shopping-App/Men' element={<CardGrid />} />
          {/* <Route path='/Shopping-App/UserLogin' element={} /> */}
        </Routes>
        <UserLogin sidebarr={sidebarr} CloseSidebar={CloseSidebar} mode={mode} />
        <MobileView mode={mode} OpenSidebar={OpenSidebar} />

        <Footer mode={mode} />
      </Router>

    </>
  )
}

export default App
