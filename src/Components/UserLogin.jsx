import React from 'react'
import './UserLogin.css'
function UserLogin(props) {
  

    return (
        <div id={props.sidebarr} style={{display: 'none'}}>
            <div style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white'}} className={`sidebar`} id="sidebar">
                <button className="close-btn" onClick={props.CloseSidebar} ><i  style={{ marginTop: '7px', fontSize: '25px', color: props.mode === 'dark' ? 'white' : 'black'}} className="fa-regular fa-circle-xmark"></i></button>
                <h2>User Login</h2>
                <hr />
                <hr />
                <ul>
                    <li className=''><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" width="16" fill={props.mode === 'dark' ? 'white' : 'black'}><circle cx="8" cy="8" r="7.5" /></svg> Dashboard</a></li>
                    <hr />
                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" width="16" fill={props.mode === 'dark' ? 'white' : 'black'}><rect x="3" y="4" width="10" height="8" rx="1.5" /></svg> Products</a></li>
                    <hr />
                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" width="16" fill={props.mode === 'dark' ? 'white' : 'black'}><circle cx="8" cy="5" r="3" /><path d="M2 15a6 6 0 0 1 12 0z" /></svg> Profile</a></li>
                    <hr />
                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" width="16" fill={props.mode === 'dark' ? 'white' : 'black'}><path d="M10 4v4H2V4h8zM2 10h12v2H2z" /></svg> Sign in</a></li>
                    <hr />
                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" width="16" fill={props.mode === 'dark' ? 'white' : 'black'}><path d="M4 8h8v4H4zM3 4h10v2H3z" /></svg> Sign up</a></li>
                    <hr />
                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" width="16" fill={props.mode === 'dark' ? 'white' : 'black'}><rect x="3" y="2" width="10" height="12" rx="1.5" /></svg> Docs</a></li>
                    <hr />
                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" width="16" fill={props.mode === 'dark' ? 'white' : 'black'}><path d="M3 4h10v8H3z" /></svg> Components</a></li>
                    <hr />
                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" width="16" fill={props.mode === 'dark' ? 'white' : 'black'}><circle cx="8" cy="8" r="6" /></svg> Help</a></li>
                    <hr />
                </ul>
            </div>
        </div>
    )
}

export default UserLogin
