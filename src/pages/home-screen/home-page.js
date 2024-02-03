import { Link } from 'react-router-dom';

import SideBar from '../../components/sidebar';
import SearchBar from '../../components/searchbar';

const Home2 = () => {
  return (
    <div>
      <div className=' px-8 hidden gap-3 myLS:flex  items-center pt-6 '>
        <h1 className=" text-[2.5rem] text-primary py-4 font-Lexend font-semibold mr-16 ">Elect.NG</h1>
        <div className='  '>
          <SearchBar />
        </div>
      </div>
      <div className=' flex gap-8 '>
        <div className=' hidden myLS:block '>
          <SideBar />
        </div>
        <div className=' p-6 m-auto w-[375px] font-Inter h-[100vh] text-center myLS:m-0 '>
          <h1 className=' pt-24 font-Lexend text-4xl text-primary myLS:pt-0 '>
            Welcome!
          </h1>
          <p className=' font-normal text-center text-sm w-[18.5rem]  m-auto pt-5 pb-28'>
            Welcome to <span className=' text-primary '>ELECT.NG</span> Online Voting System
            Your account has been created successfully
            Let’s Get Started
          </p>
          <Link to="/home/create-poll1">
            <button className='font-normal w-[95%] h-[65px] text-secondary bg-primary rounded-[0.625rem]' >
              Create A Poll
            </button>
          </Link>
          <Link to="/home/join-vote">
            <button className='font-normal w-[95%] h-[65px] text-primary bg-secondary rounded-[0.625rem] border-[1px] mt-5 border-primary' >
              Join A Vote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home2;