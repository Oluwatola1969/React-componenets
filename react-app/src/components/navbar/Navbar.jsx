import React from 'react'
import './navbar.css'
import menuIcon from '../../assets/images/menu.png'
import logo from '../../assets/images/logo.png'
import searchIcon from '../../assets/images/search.png'
import uploadIcon from '../../assets/images/upload.png'
import moreIcon from '../../assets/images/more.png'
import notificationIcon from '../../assets/images/notification.png'
import profileIcon from '../../assets/images/user_profile.jpg'


const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-item'>
        <div className="nav-left flex-item">
            <img src={menuIcon} alt="menu" className='menu' onClick={()=>setSidebar(prev=>prev===false?true:false)}/>
            <img src={logo} alt="logo" className='logo'/>
        </div>
        <div className="nav-middle flex-item">
            <div className="search-box flex-item">
                <input type="text" placeholder='search' />
                <img src={searchIcon} alt="search" className='search-icon'/>
            </div>
            
        </div>
        <div className="nav-right flex-item">
            <img src={uploadIcon} alt="upload" />
            <img src={moreIcon} alt="more" />
            <img src={notificationIcon} alt="notification" />
            <img src={profileIcon} alt="profile" className='user-icon' />
        </div>
    </nav>
  )
}

export default Navbar