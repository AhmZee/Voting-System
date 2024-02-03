import searchIcon from '../assets/icons/search-icon.svg';
import notificationIcon from '../assets/icons/notification-icon.svg';

const SearchBar = () => {
  return (
    <div className=' flex flex-row items-center gap-3 w-[900px] ' >
      <div className=' flex min-w-[500px] h-[55px]  bg-secondary border-[1px] border-[#92E3A9] rounded-[30px] shadow-md '>
        <img src={searchIcon} alt="" className=' ml-4 mr-3 w-[30px]' />
        <input type="text" name="" id="" placeholder='Search' className=' focus-within:outline-none bg-transparent ' />
      </div>
      <img src={notificationIcon} alt="" className=' w-[25px] ' />
      <h1 className=' font-[700] text-[2.0rem] px-[10px] bg-[rgba(146,227,169,0.29)] inline-block font-Lexend text-4xl text-primary rounded-[50%] mr-5 '>J</h1>
    </div>
  );
}

export default SearchBar;