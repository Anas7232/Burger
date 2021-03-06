import React, { useState } from 'react'
import {Link} from 'react-scroll';
import logo from '../images/logo1.png';

function Navbar() {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50 ){
            setnav(true)
        }else{
            setnav(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='main' className='logo' smooth={true} duration={2000}>
                <img src={logo} alt='' />
            </Link>
            <input className="menu-btn" type='checkbox' id="menu-btn" />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link smooth={true} duration={2000} to='main'> Header </Link></li>
                <li><Link smooth={true} duration={2000} to='products'> Products </Link></li>
                <li><Link smooth={true} duration={2000} to='about'> About </Link></li>
                <li><Link smooth={true} duration={2000} to='contact'> Contact </Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
