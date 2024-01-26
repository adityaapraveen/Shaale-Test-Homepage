import React from 'react'
import './NavbarStyles.css'

const NavbarComp = () => {
  return (
    <div className='navbar'>
        <div className="first-two">
            <span className='shaale-logo'>shaale</span>

            <span>Explore dropdown</span>
        </div>
        <div className="last-four">
            <div className="search-box">
                <input type='text' placeholder='search' />
                <img src="C:\Users\adity\OneDrive\Desktop\Shaale Clone\shaale-test\src\icon\assets\searchicon-w.png" alt="" />
            </div>
        <div className="icons">
            <ul>
                <li>cal</li>
                <li>remi</li>
                <li>profile</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default NavbarComp
