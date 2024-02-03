import homeIcon from '../assets/icons/home.svg';
import likeIcon from '../assets/icons/like-icon.svg';
import statIcon from '../assets/icons/statistic-icon.svg';
import profileIcon from '../assets/icons/profile-icon.svg';
import logoutIcon from '../assets/icons/logout.svg';

const SideBar = () => {
  return (
    <div >
    
      <div className=' bg-secondary w-[250px] h-[510px] rounded-tr-[30px] shadow-lg '>
        <div className=' flex flex-row gap-6 items-center pl-7 pt-12'>
          <img src={homeIcon} alt="" className=' ' />
          <h3>Dashboard</h3>
        </div>
        <div className=' flex flex-row gap-6 items-center pl-4 pt-10'>
          <img src={likeIcon} alt="" className=' ' />
          <h3>Vote</h3>
        </div>
        <div className=' flex flex-row gap-6 items-center pl-7 pt-10'>
          <img src={statIcon} alt="" className=' ' />
          <h3>Statistics</h3>
        </div>
        <div className=' flex flex-row gap-6 items-center pl-7 pt-10'>
          <img src={profileIcon} alt="" className=' ' />
          <h3>Profile Settings</h3>
        </div>
        <div className=' flex flex-row gap-6 items-center pl-7 pt-32'>
          <img src={logoutIcon} alt="" className=' ' />
          <h3>Logout</h3>
        </div>
      </div>
    </div>
  );
}

export default SideBar;