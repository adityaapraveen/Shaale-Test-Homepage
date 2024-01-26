import React from 'react'
import './NavbarStyles.css'
import { FaSearch, FaBell  } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
import { IoMdArrowDropdown } from "react-icons/io";


const NavbarComp = () => {
  return (
    <div className='navbar'>
        <div className="first-two">
            <span className='shaale-logo'>shaale</span>
        
            <div className="explore-dropdown">
        
                <span className='explore'>Explore<IoMdArrowDropdown /></span>
                    <div className="dropdown-items">
                    <ul>
                        <li>Music</li>
                        <li>Dance</li>
                    </ul>
                    </div>
                </div>
            </div>
       
        <div className="last-four">
            <div className="search-box">
                <input type='text' placeholder='search' />
                <FaSearch className='search-icon'/>

            </div>
        <div className="icons">
            <ul>
                <li><SlCalender /></li>
                <li><FaBell /></li>
                <li><CgProfile /></li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default NavbarComp
