import homeIcon from '../assets/icons/home.svg';
import likeIcon from '../assets/icons/like-icon.svg';
import statIcon from '../assets/icons/statistic-icon.svg';
import { useState } from 'react';

import profileIcon from '../assets/icons/profile-icon.svg';
import logoutIcon from '../assets/icons/logout.svg';

const SideBar = () => {

  const [activeLink, setActiveLink] = useState('')

  const handleActiveLink = (link) => {
    setActiveLink(link)
  }



  return (

    <div className=' bg-secondary w-[250px] h-[510px] rounded-tr-[30px] shadow-lg '>
      <div className=' py-4 '></div>
      <div className='flex flex-col'>
        <div className={` flex flex-row gap-6 items-center py-5 pl-7  ${activeLink === 'dashboard' ? 'active-link' : ''}`} onClick={() => handleActiveLink('dashboard')}>
          <img src={homeIcon} alt="" />
          <h3>Dashboard</h3>
        </div>
        <div className={` flex flex-row gap-5 items-center py-3 pl-5  ${activeLink === 'vote' ? 'active-link' : ''}`} onClick={() => handleActiveLink('vote')}>
          <img src={likeIcon} alt="" />
          <h3>Vote</h3>
        </div>
        <div className={` flex flex-row gap-6 items-center py-5 pl-7  ${activeLink === 'stat' ? 'active-link' : ''}`} onClick={() => handleActiveLink('stat')}>
          <img src={statIcon} alt="" />
          <h3>Statistics</h3>
        </div>
        <div className={` flex flex-row gap-6 items-center py-5 pl-7  ${activeLink === 'profile' ? 'active-link' : ''}`} onClick={() => handleActiveLink('profile')}>
          <img src={profileIcon} alt="" />
          <h3>Profile Settings</h3>
        </div>
        <div className={` flex flex-row gap-6 items-center py-5 pl-7 mt-24  ${activeLink === 'logout' ? 'active-link' : ''}`} onClick={() => handleActiveLink('logout')} >
          <img src={logoutIcon} alt="" />
          <h3>Logout</h3>
        </div>
      </div>
    </div>

  );
}

export default SideBar;