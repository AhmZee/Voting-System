import vote2 from '../images/vote2.png';

import { Link } from 'react-router-dom';

const WelcomeMake = () => {
  return (
    <div className=' p-6 font-bold font-Inter text-center '>
       <Link to="/WelcomeStay">
        <h2 className=' text-right'>Skip</h2>
      </Link>
      <img src={vote2} alt="vote1" className=' m-auto mt-12' />
      <h2 className=' my-5 font-Lexend'>
        Make your vote count
      </h2>
      <p className=' font-normal text-sm w-[17.25rem]  m-auto text-left'>
        Register and vote from anywhere around the world
      </p>
      <svg className=' m-auto my-6 ' xmlns="http://www.w3.org/2000/svg" width="102" height="4" viewBox="0 0 102 4" fill="none">
        <path d="M70 0C71.1046 0 72 0.89543 72 2C72 3.10457 71.1046 4 70 4V0ZM70 4L30 4V0L70 0V4Z" fill="black" />
        <path d="M100 0C101.105 0 102 0.89543 102 2C102 3.10457 101.105 4 100 4V0ZM100 4L80 4V0L100 0V4Z" fill="black" fill-opacity="0.2" />
        <path d="M20 0C21.1046 0 22 0.89543 22 2C22 3.10457 21.1046 4 20 4V0ZM20 4L0 4V0L20 0V4Z" fill="black" fill-opacity="0.2" />
      </svg>
      <Link to="/WelcomeStay">
        <button className='font-normal w-[100%] h-[3.3125rem] text-primary bg-secondary rounded-[0.625rem] border-[1px] mt-5 border-primary z-10'>
          Next
        </button>
      </Link>
    </div>
  );
}

export default WelcomeMake;