import React from 'react'
import AirBnbLogo from "./Images/Airbnb-logo.png";

function Header() {
  return (
    <div>
        <nav className='main-nav'>
            <img src={AirBnbLogo} alt='logo1' className='logo'/>
        </nav>
    </div>
  )
}

export default Header