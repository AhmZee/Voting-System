
import vote1 from '../../assets/images/vote1.png';
import vote2 from '../../assets/images/vote2.png';
import vote3 from '../../assets/images/vote3.png';


import { useState } from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {

  const [firstWelcome, setFirstWelcome] = useState(true);
  const [secondWelcome, setSecondWelcome] = useState(false);
  const [thirdWelcome, setThirdWelcome] = useState(false);

  const toSecondWelcome = () => {
    setFirstWelcome(false);
    setSecondWelcome(true);
  }

  const toThirdWelcome = () => {
    setSecondWelcome(false);
    setThirdWelcome(true);
  }

  const skipWelcome = () => {
    setFirstWelcome(false);
    setSecondWelcome(false);
    setThirdWelcome(true);
  }

  return (
    <>
      <div className=' m-auto w-[375px] font-Inter h-[100vh] '>
        {firstWelcome && (
          <div className=' m-auto font-Inter h-[100vh] '>
            <div className=' p-6 font-bold font-Inter text-center '>
              <h2 className=' text-right' onClick={skipWelcome}>Skip</h2>
              <img src={vote1} alt="vote1" className=' m-auto mt-12' />
              <h2 className=' my-5 font-Lexend'>
                Cast your vote
              </h2>
              <p className=' font-normal text-sm w-[17.25rem] m-auto'>
                Exercise your voting right, let your
                voice be heard with the right vote
              </p>
              <svg className=' m-auto my-6 ' xmlns="http://www.w3.org/2000/svg" width="102" height="4" viewBox="0 0 102 4" fill="none">
                <path d="M2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4V0ZM2 4L42 4V0L2 0V4Z" fill="black" />
                <path d="M52 0C50.8954 0 50 0.89543 50 2C50 3.10457 50.8954 4 52 4V0ZM52 4L72 4V0L52 0V4Z" fill="black" fill-opacity="0.2" />
                <path d="M82 0C80.8954 0 80 0.89543 80 2C80 3.10457 80.8954 4 82 4V0ZM82 4L102 4V0L82 0V4Z" fill="black" fill-opacity="0.2" />
              </svg>
              <button className='font-normal w-[100%] h-[3.3125rem] text-primary bg-secondary rounded-[0.625rem] border-[1px] mt-5 border-primary z-10' onClick={toSecondWelcome}>
                Next
              </button>
            </div>
          </div>
        )}

        {secondWelcome && (
          <div className=' p-6 font-bold font-Inter text-center '>
            <h2 className=' text-right' onClick={skipWelcome}>Skip</h2>
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
            <button className='font-normal w-[100%] h-[3.3125rem] text-primary bg-secondary rounded-[0.625rem] border-[1px] mt-5 border-primary z-10 ' onClick={toThirdWelcome}>
              Next
            </button>
          </div>
        )}

        {thirdWelcome && (
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
            <Link to="/account">
              <button className='font-normal w-[17.125rem] h-[3.3125rem] text-black bg-primary rounded-[0.625rem]  mt-5 z-10'>
                Create an Account
              </button>
            </Link>
            <Link to="/account/login-user">
              <button className='font-normal w-[17.125rem] h-[3.3125rem] text-primary bg-secondary rounded-[0.625rem] border-[1px] mt-5 border-primary z-10'>
                Log In
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default Welcome;