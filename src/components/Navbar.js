import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavbarStyles.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-home'>
                <NavLink to='/' style={{color:"white"}}>HYEYUN JEONG</NavLink>
            </div>
            <div className='nav-item'>
                <NavLink to='/projects' style={{color:"white"}} className='nav-link'>PROJECTS</NavLink>
                <NavLink to='/interests' style={{color:"white"}} className='nav-link'>INTERESTS</NavLink>
                <NavLink to='/contact' style={{color:"white"}} className='nav-link' id="say-hello">SAY HELLO</NavLink>
            </div>
        </div>
    )
}

export default Navbar