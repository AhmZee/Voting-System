import vote3 from '../images/vote3.png';

import { Link } from 'react-router-dom';

const WelcomeStay = () => {
  return (
    <div className=' p-6 font-bold font-Inter text-center '>
      <img src={vote3} alt="vote1" className=' m-auto mt-8' />
      <h2 className=' my-3 font-Lexend'>
        Stay informed
      </h2>
      <p className=' font-normal text-sm w-[17.25rem]  m-auto text-left'>
        Stay informed and get the latest news around you about your elections.
      </p>
      <svg className=' m-auto mt-5 mb-2 ' xmlns="http://www.w3.org/2000/svg" width="101" height="4" viewBox="0 0 101 4" fill="none">
        <path d="M50 0C51.1046 0 52 0.89543 52 2C52 3.10457 51.1046 4 50 4V0ZM50 4L30 4V0L50 0V4Z" fill="black" fill-opacity="0.2" />
        <path d="M20 0C21.1046 0 22 0.89543 22 2C22 3.10457 21.1046 4 20 4V0ZM20 4L0 4V0L20 0V4Z" fill="black" fill-opacity="0.2" />
        <path d="M99 0C100.105 0 101 0.89543 101 2C101 3.10457 100.105 4 99 4V0ZM99 4L59 4V0L99 0V4Z" fill="black" />
      </svg>
      <Link to="/CreateUser">
        <button className='font-normal w-[17.125rem] h-[3.3125rem] text-black bg-primary rounded-[0.625rem]  mt-5 z-10'>
          Create an Account
        </button>
      </Link>
      <Link to="/LoginUser">
      <button className='font-normal w-[17.125rem] h-[3.3125rem] text-primary bg-secondary rounded-[0.625rem] border-[1px] mt-5 border-primary z-10'>
        Log In
      </button>
      </Link>
    </div>
  );
}

export default WelcomeStay;